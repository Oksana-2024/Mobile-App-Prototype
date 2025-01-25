import { ErrorMessage, Field, Formik } from "formik";
import s from "./FormContact.module.css";
import { Form } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  message: "",
};

const errorMessage = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().max(500, "Must be 500 symbols or less"),
});

const handleSubmit = (values, actions) => {
  actions.reserForm();
};

const FormContact = () => {
  return (
    <div>
      <Formik
        initialValues={{ initialValues }}
        validationSchema={errorMessage}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div>
            <Field
              className={s.input}
              type="text"
              name="username"
              placeholder="Name"
            />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <Field
              className={s.textarea}
              type="text"
              as="textarea"
              name="message"
              placeholder="Message"
            />
            <ErrorMessage name="message" component="span" />
          </div>
          <button type="submit">SUBMIT</button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormContact;
