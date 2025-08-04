import { environmentVariables } from "../../environmentVariables";
import styles from "./Contact.module.scss";

function Contact() {
  const {
    personalInformation: { phoneNumber, email, linkedinProfile },
  } = environmentVariables;
  return (
    <div className={styles["information-container"]}>
      <div className={styles["location-container"]}>
        <strong>
          <p>Location:</p>
        </strong>
        <p>Chía, Cundinamarca, Colombia</p>
      </div>
      <div className={styles["email-container"]}>
        <strong>
          <p>Email:</p>
        </strong>
        <p>{email}</p>
      </div>
      <div className={styles["linkedin-container"]}>
        <strong>
          <p>LinkedIn:</p>
        </strong>
        <a href={linkedinProfile} target="_blank" rel="noreferrer">
          {linkedinProfile}
        </a>
      </div>
      <div className={styles["phone-container"]}>
        <strong>
          <p>Phone:</p>
        </strong>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
}

export default Contact;
