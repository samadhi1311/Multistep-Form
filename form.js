import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function App() {
  // set and store form data
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const stepOneValidation = Yup.object({
    email: Yup.string().email("Invalid email").required("An email is required"),
    password: Yup.string()
      .min(4, "Minimum of 4 characters are required")
      .required("A password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  const stepTwoValidation = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
  });

  // set and store current step
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (data) => {
    console.log(data);
  };

  const handleNextStep = (newData, finalStep = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);

    if (finalStep) {
      makeRequest(newData);
      return;
    }
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  // 1st step
  const StepOne = (props) => {
    const handleSubmit = (values) => {
      props.next(values);
    };

    return (
      <Formik
        initialValues={props.data}
        validationSchema={stepOneValidation}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <label htmlFor="email">Email: </label>
            <Field name="email" />
            <ErrorMessage name="email" />
            <label htmlFor="password">Password: </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />
            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    );
  };

  // 2nd step
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      props.next(values, true);
    };
    return (
      <Formik
        initialValues={props.data}
        validationSchema={stepTwoValidation}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="firstName">First Name: </label>
            <Field name="firstName" />
            <ErrorMessage name="firstName" />
            <label htmlFor="lastName">Last Name: </label>
            <Field name="lastName" />
            <ErrorMessage name="lastName" />
            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return <div className="App">{steps[currentStep]}</div>;
}
