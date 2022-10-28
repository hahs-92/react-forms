import styles from "./signup.module.css";

export function Signup() {
  return (
    <form>
      <section className={styles.inputContainer}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="FirstName"
        />
      </section>
      <section className={styles.inputContainer}>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="LastName"
        />
      </section>
      <section className={styles.inputContainer}>
        <input type="email" id="email" name="email" placeholder="Email" />
      </section>
    </form>
  );
}
