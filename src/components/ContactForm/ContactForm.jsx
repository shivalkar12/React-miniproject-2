import style from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  // const [name, setName] = useState["Anshu "];
  // const [email, setEmail] = useState["  support@doSomecode.com  "];
  // const [text, setText] = useState["  Subscribe"];
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setName(event.target[0].value);
  //   setEmail(event.target[1].value);
  //   setText(event.target[2].value);
  // };

  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button text="VIA SUPPOT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL"
          icon={<HiMail fontSize="24px" />}
        />
        <form action="">
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input name="text" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          {/* <div> {name + " " + email + " " + text}</div> */}
        </form>
      </div>
      <div className={style.contact_image}>
        <img src="./Images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
