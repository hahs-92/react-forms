import { useFormik } from "formik";
import * as Yup from "yup";
//styles
import styles from "./signup.module.css";

export function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  //   console.log(formik.errors);
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <section className={styles.inputContainer}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="FirstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p>{formik.errors.firstName}</p>
        )}
      </section>
      <section className={styles.inputContainer}>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="LastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p>{formik.errors.lastName}</p>
        )}
      </section>
      <section className={styles.inputContainer}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
      </section>

      <section>
        <button type="submit">Send</button>
      </section>
    </form>
  );
}
