# Recidivism Prediction with Fairness Assessment

This project involves building machine learning models to predict recidivism among inmates using demographic and criminal data. The project includes baseline and adversarial models, each evaluated on fairness metrics to assess potential biases related to sensitive attributes like race and sex.

## Project Structure

1. **Data Preprocessing**
    - **Imputation**: Handled missing values in both numerical and categorical columns to retain the dataset's integrity.
    - **One-Hot Encoding**: Encoded categorical variables to create a feature matrix suitable for machine learning.
    - **Scaling**: Standardized features for uniformity in model training.
    - **SMOTE**: Used SMOTE (Synthetic Minority Over-sampling Technique) to handle class imbalance, enhancing model stability on minority classes.

2. **Models Implemented**
    - **Baseline Neural Network**: Trained to predict recidivism without adversarial influence.
    - **Random Forest**: Included as an ensemble comparison.
    - **Adversarial Neural Network**: Introduced an adversarial component to minimize discrimination by learning invariant representations with respect to sensitive attributes.

3. **Fairness Evaluation**
    - Used **Demographic Parity Difference (DPD)** to evaluate fairness, measuring the prediction rate differences across demographic groups.
    - Assessed model performance across racial and gender groups to determine potential biases.

## Setup

1. **Install Required Packages**
   - Run the following command to install necessary libraries:
     ```bash
     pip install pandas numpy sklearn imblearn tensorflow matplotlib
     ```

2. **Load Data**
   - Place your dataset (`chm_jail_data.csv`) in the project's root directory or update the file path in the script accordingly.

3. **Running the Model**
   - The script can be run in an IDE or Jupyter Notebook. It will preprocess the data, train the models, apply SMOTE, and evaluate model performance and fairness metrics.

## Key Observations

1. **Class Distribution**
    - Imbalance in recidivism classes was addressed using SMOTE to ensure the models were not biased towards the majority class.

2. **Bias and Fairness Findings**
    - **Race**: The adversarial model showed improved fairness with a lower DPD (0.4866) compared to the main model (0.5751).
    - **Gender**: Both models had similar DPDs, indicating consistency in fairness across sexes.
    - **High DPD for Minor Racial Groups**: Groups with fewer samples (e.g., White (Hispanic)) exhibited disproportionately high DPDs. This highlights the need for further analysis, as predictions based on such small groups may not be reliable.

3. **Ethical Considerations**
    - **Data Quality**: Racial and gender biases in data collection can impact predictions, calling for transparency in model deployment.
    - **Model Usage**: Predictive models in recidivism have real-world impacts; hence, results should be used responsibly.

## Recommendations for Further Improvement

1. **Refactor Code into Functions**: Improve readability and enable testing.
2. **Expand Fairness Metrics**: Include metrics like Equalized Odds and Predictive Parity.
3. **Hyperparameter Tuning**: Employ cross-validation for enhanced model performance.
4. **Enhanced Documentation**: Add comments and docstrings for better project understanding.
5. **Conduct EDA**: Further exploratory analysis can provide deeper insights into the data.

## Performance Metrics

| Metric             | Main Model | Adversarial Model |
|--------------------|------------|-------------------|
| **ROC-AUC**        | 0.7244     | 0.7240           |
| **Accuracy**       | 69.88%     | 70.64%           |
| **Race DPD**       | 0.5751     | 0.4866           |
| **Sex DPD**        | 0.0953     | 0.0911           |

---

