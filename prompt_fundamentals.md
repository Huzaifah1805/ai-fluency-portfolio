# Prompting Fundamentals on Real Tasks (FL-02)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 2 / Assignment 3)  
**Date:** July 10, 2026

---

## Part 1: Selected Task from FL-01
*   **Selected Task:** *Writing Python feature engineering code for ML pipelines (Collaborative task).*
*   **Goal:** Engineer search performance features (e.g. CTR-to-position ratio) from raw query datasets while strictly preventing data leakage across the target boundary.

---

## Part 2: Prompt Iteration Log

### Baseline (Run 1: Naive One-Line Prompt)
> **Prompt:**  
> "Write a Python script to calculate CTR and trend metrics from a search dataset."

#### Representative Output Excerpt
```python
import pandas as pd
df['ctr'] = df['clicks'] / df['impressions']
df['trend_pct'] = (df['impressions_last_30d'] - df['impressions_prev_30d']) / df['impressions_prev_30d']
```

#### Notes (Baseline)
*   **What changed:** Baseline naive prompt.
*   **What actually improved in output:** Nothing.
*   **What still failed:** The generated trend calculation uses future data (`impressions_last_30d` which falls in the target window), resulting in massive target leakage that would make the model appear artificially 100% accurate but fail in production.
*   **What to try next:** Assign a specific role to force the AI to write production-grade, leakage-free code.

---

### Version 2: Role Assignment (Run 2)
> **Prompt:**  
> "You are a Senior Machine Learning Engineer specializing in Search Intelligence and data safety. Write a Python script to calculate CTR and trend metrics from a search dataset."

#### Representative Output Excerpt
```python
# Senior ML Engineer Approach
# Safe metrics calculation
import pandas as pd

def calculate_search_features(df):
    # Safe feature engineering to prevent leakage
    df['safe_ctr'] = df['clicks'] / df['impressions']
    # ...
```

#### Notes (Version 2)
*   **What changed in prompt:** Assigned the role of a "Senior ML Engineer specializing in Search Intelligence."
*   **What actually improved in output:** The model added comments acknowledging data safety and structured the logic into a reusable function instead of flat script code.
*   **What still failed:** It still failed to enforce a clean separation of history vs. target windows for the trend calculation, showing it doesn't understand *what* is being predicted.
*   **What to try next:** Add context and motivation to explain the exact split window.

---

### Version 3: Context & Motivation (Run 3)
> **Prompt:**  
> "You are a Senior Machine Learning Engineer. Write a Python script to calculate features from a search dataset. Context: We are predicting content decay in a target window (days 91-120). All features must be engineered exclusively using history data (days 0-90) to prevent target leakage."

#### Representative Output Excerpt
```python
# Safe window check
# Features must only use data from the 90-day history window.
df_history = df[df['days'] <= 90]
history_ctr = df_history['clicks'] / df_history['impressions']
```

#### Notes (Version 3)
*   **What changed in prompt:** Added specific window context (days 0-90 for features, days 91-120 for target) and motivation (prevent leakage).
*   **What actually improved in output:** The output introduced strict row filtering, segregating history data from target data before calculating features.
*   **What still failed:** The code doesn't aggregate features at the entity level (by page/content ID), making it impossible to join with a page-level target table.
*   **What to try next:** Provide few-shot examples of correct entity-level aggregation.

---

### Version 4: Few-Shot Examples (Run 4)
> **Prompt:**  
> "You are a Senior Machine Learning Engineer. Write a Python script to calculate features from a search dataset. Context: We predict decay in a target window using history data (days 0-90). 
> Example: 
> Input: df with page_id, clicks, impressions, days.
> Code:
> history = df[df['days'] <= 90]
> features = history.groupby('page_id').agg(total_clicks=('clicks', 'sum'), total_imps=('impressions', 'sum'))
> features['ctr'] = features['total_clicks'] / features['total_imps']
> Now, write code to calculate page-level position opportunity and trend features safely."

#### Representative Output Excerpt
```python
# Grouping by page_id to calculate safe position opportunity
history = df[df['days'] <= 90]
page_features = history.groupby('page_id').agg(
    avg_pos=('position', 'mean'),
    max_pos=('position', 'max')
)
page_features['position_opportunity'] = 10 - page_features['avg_pos']
```

#### Notes (Version 4)
*   **What changed in prompt:** Added a few-shot code example demonstrating how to aggregate page-level features from raw daily rows safely.
*   **What actually improved in output:** The output accurately followed the aggregation pattern (`groupby('page_id').agg(...)`) and generated valid opportunity metrics.
*   **What still failed:** The generated output is a chaotic mix of scattered code blocks without clean documentation, type hints, or assertions to verify the output shapes.
*   **What to try next:** Define a strict output structure.

---

### Version 5: Output Structure & Constraints (Run 5)
> **Prompt:**  
> "You are a Senior Machine Learning Engineer. [Context and Few-Shot Example same as V4]. Output Structure: Write the code as a single Python module containing:
> 1. Type hints and docstrings.
> 2. A single main function: `engineer_features(df: pd.DataFrame) -> pd.DataFrame`.
> 3. An assertion block at the bottom verifying the final output dataframe has no nulls."

#### Representative Output Excerpt
```python
import pandas as pd
import numpy as np

def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Engineers leakage-free page-level features from daily search performance logs.
    ...
    """
    # Calculation steps
    return features

# Verification
result = engineer_features(raw_data)
assert not result.isnull().any().any(), "Output contains null values"
```

#### Notes (Version 5)
*   **What changed in prompt:** Added a rigid output structure (type hints, docstrings, function signature, assertion block).
*   **What actually improved in output:** The generated code became modular, readable, and ready to be imported into a production training pipeline. The assertions verify data quality.
*   **What still failed (The "made it worse" moment):** By enforcing strict structure rules, the AI tried to write a mock dataset at the top to run the assertions, but wrote syntax-broken pandas constructors that crashed due to dimension mismatch.
*   **What to try next:** Add step decomposition to instruct the AI to build only the functions and separate the mock/test logic.

---

### Version 6: Step Decomposition (Run 6)
> **Prompt:**  
> "You are a Senior Machine Learning Engineer. [Context & Examples same as V4]. Output Structure: Write only the functions and type hints. 
> Decompose your task into these steps:
> Step 1: Filter raw history rows safely.
> Step 2: Aggregate to page level.
> Step 3: Engineer interaction features (CTR, position opportunity).
> Step 4: Add docstrings explaining why these metrics are leakage-free."

#### Representative Output Excerpt
```python
def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    # Step 1: Filter history
    history = df[df['days'] <= 90]
    
    # Step 2: Aggregate
    aggregated = history.groupby('page_id').agg(...)
    
    # Step 3: Interaction features
    aggregated['ctr'] = aggregated['clicks'] / aggregated['impressions']
    
    # Step 4: Docstring explains that since we filter 'days <= 90', future target labels are preserved from leakage.
    return aggregated
```

#### Notes (Version 6)
*   **What changed in prompt:** Decomposed the output logic into four distinct steps.
*   **What actually improved in output:** The generated code strictly mirrors the logical steps, documenting the safety boundary at each level.
*   **What still failed:** The code works perfectly; there are no syntactic or logical errors.

---

## Part 3: Cross-Model Comparison (Claude vs. ChatGPT)
I ran the final Version 6 prompt on both **Claude 3.5 Sonnet** and **ChatGPT (GPT-4o)**:

| Attribute | Claude 3.5 Sonnet | ChatGPT (GPT-4o) |
| :--- | :--- | :--- |
| **Code Style** | Uses vectorized operations; cleaner variable names (e.g. `is_historical_window`). | Prefers standard iterative/simple pandas statements; uses generic names (e.g. `temp_df`). |
| **Leakage Handling** | Explicitly checks if `days` contains future values and logs a warning. | Simply runs the filter silently without check validations. |
| **Docstrings** | Very technical, focuses on cross-validation boundaries (explaining *why* `client_id` grouping requires strict fold isolation). | Broadly explains the equations without highlighting the leakage validation logic. |
| **Failure Points** | Output was slightly longer due to extensive assertions, but 100% correct. | Generated a redundant `import datetime` that wasn't used anywhere in the code. |

---

## Part 4: Final Reusable Prompt Template
```text
Act as a Senior Machine Learning Engineer specializing in data safety. Write a Python function using Pandas to engineer features for an ML dataset.

Context: 
- Raw Input Data: A daily-grain DataFrame containing columns: {entity_id_col}, {temporal_col}, {metric_col_1}, {metric_col_2}.
- Target Split: We predict an outcome in the target window ({target_start} to {target_end} days).
- Safety Boundary: All features must be engineered exclusively using history data ({history_start} to {history_end} days) to prevent target leakage.

Step-by-Step Task Decomposition:
Step 1: Filter raw rows safely using the temporal threshold to isolate history.
Step 2: Aggregate raw history to the entity level ({entity_id_col}).
Step 3: Calculate the following engineered features:
  - Cumulative metrics (sums)
  - Safe ratio-based interaction features
Step 4: Document the function with clear type hints, docstrings, and a line explaining why the features are leakage-free.

Output Format: A clean, modular Python function: `engineer_features(df: pd.DataFrame) -> pd.DataFrame`.
```
