import React from 'react'
import style from "./ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <div className={`  ${style.contact_section}`}>
      <h1>Contact Us</h1>
      <p>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HERAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WNT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
    </div>
  )
}

export default ContactHeader
