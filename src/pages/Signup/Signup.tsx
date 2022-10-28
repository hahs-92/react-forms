import { useFormik } from "formik";
//styles
import styles from "./signup.module.css";

export function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
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
        />
      </section>
      <section className={styles.inputContainer}>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="LastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </section>
      <section className={styles.inputContainer}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </section>

      <section>
        <button type="submit">Send</button>
      </section>
    </form>
  );
}
