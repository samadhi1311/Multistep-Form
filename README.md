# Multistep-Form
Multistep form in ReactJS using Formik and Yup

## Overview

This React application implements a multistep form using Formik and Yup for form validation. The form collects user information in two steps, with the ability to navigate between steps and submit the final data.

## Dependencies

- ReactJS
- Formik: A form library for React to handle form state, validation, and submission.
- Yup: A JavaScript schema builder for value parsing and validation.

## Code Structure

### State Management

- `useState`: Manages the form data (`data`) and the current step (`currentStep`).

### Form Validation

- `stepOneValidation`: Validation schema for the first step of the form.
- `stepTwoValidation`: Validation schema for the second step of the form.

### Form Submission

- `makeRequest`: A placeholder function that logs the form data to the console.

### Step Components

#### StepOne

- Handles the first step of the form.
- Uses Formik for form management and Yup for validation.
- Collects email, password, and confirmPassword.

#### StepTwo

- Handles the second step of the form.
- Uses Formik for form management and Yup for validation.
- Collects firstName and lastName.
- Allows navigation back to the first step.

### Navigation Functions

- `handleNextStep`: Advances to the next step, updating the form data.
- `handlePrevStep`: Navigates back to the previous step, updating the form data.

### Render

- `steps`: Array containing StepOne and StepTwo components.
- Renders the current step based on `currentStep`.

## Usage

1. User starts with the first step, providing email, password, and confirmPassword.
2. After validation, user proceeds to the second step, providing firstName and lastName.
3. User can navigate back and forth between steps.
4. Upon completing the form, the data is logged to the console (replace `makeRequest` with actual submission logic).

## Conclusion

This multistep form provides a structured approach to collecting user information with built-in validation. Customize it according to your specific requirements, and integrate actual submission logic in place of the placeholder function for a fully functional form.
