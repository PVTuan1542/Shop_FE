import styles from "./index.module.css";

const Input = () => {
  return (
    <div>
      <div className={styles.label}>Email</div>
      <div className="text">
        <input className={styles.email_input} placeholder="Email"></input>
      </div>
    </div>
  );
};

export default Input;
