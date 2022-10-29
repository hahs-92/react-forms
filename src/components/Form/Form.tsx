import { Formik, Form, Field, ErrorMessage } from "formik";
//styles
import styles from "./form.module.css";
import { useState } from "react";

export const Form1 = () => {
  const [formSent, setFormSent] = useState(false);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        country: "",
        genre: "",
        message: "",
      }}
      validate={(values) => {
        const errors: {
          name?: string;
          email?: string;
          country?: string;
          genre?: string;
          message?: string;
        } = {};
        if (!values.name) {
          errors.name = "Required";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          //debe ser un usuario de 4 a 16 digitos
          //solo debe contener numeros letras
          errors.name = "El nombre solo puede contener letras y espacios";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("form: ", values);

        setFormSent(false);
        setSubmitting(true);

        setTimeout(() => {
          resetForm();
          setFormSent(true);
        }, 500);
      }}
    >
      {(props) => (
        <Form className={styles.form}>
          <section>
            <Field type="text" name="name" placeholder="Name" id="name" />
            <ErrorMessage
              name="name"
              component={() => <p>{props.errors.name}</p>}
            />
          </section>

          <section>
            <Field type="email" name="email" placeholder="Email" id="email" />
            <ErrorMessage
              name="email"
              component={() => <p>{props.errors.email}</p>}
            />
          </section>

          <section>
            <label htmlFor="M">
              <Field type="radio" name="genre" value="male" id="M" />
              Hombre
            </label>
            <label htmlFor="F">
              <Field type="radio" name="genre" value="female" id="F" />
              Mujer
            </label>
          </section>

          <section>
            <Field as="select" name="country" id="select">
              <option value="Spain">España</option>
              <option value="USA">USA</option>
              <option value="Germany">Alemania</option>
            </Field>
          </section>

          <section>
            <Field name="message" as="textarea" placeholder="Mensaje" />
          </section>

          <button type="submit">
            {props.isSubmitting ? "Loading" : "Send"}
          </button>
          {formSent && (
            <p className={styles.success}>Formulario enviado con exito¡</p>
          )}
        </Form>

        // <form onSubmit={props.handleSubmit} className={styles.form}>
        //   <section>
        //     <input
        //       type="text"
        //       name="name"
        //       placeholder="Name"
        //       id="name"
        //       value={props.values.name}
        //       onChange={props.handleChange}
        //       onBlur={props.handleBlur}
        //     />
        //     {props.touched.name && props.errors.name && (
        //       <p>{props.errors.name}</p>
        //     )}
        //   </section>

        //   <section>
        //     <input
        //       type="email"
        //       name="email"
        //       placeholder="Email"
        //       id="email"
        //       value={props.values.email}
        //       onChange={props.handleChange}
        //       onBlur={props.handleBlur}
        //     />
        //     {props.touched.email && props.errors.email && (
        //       <p>{props.errors.email}</p>
        //     )}
        //   </section>

        //   <button type="submit">
        //     {props.isSubmitting ? "Loading" : "Send"}
        //   </button>
        //   {formSent && (
        //     <p className={styles.success}>Formulario enviado con exito¡</p>
        //   )}
        // </form>
      )}
    </Formik>
  );
};
