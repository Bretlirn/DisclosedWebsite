import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import "./Email.css";



init("user_pNgFcozy8WXPq9ndcTFeB");

const Email = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("");

  const errMsg = (err: any, margin: number) => {
    return(
      <div
        role="alert"
        style={{
          marginBottom: margin,
          display: "flex",
          justifyContent: "center",
          color: "red",
        }}
      >
        {err.message}
      </div>
    )
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ yourName: "", email: "", myMessage: "" });
    }
  }, [reset, isSubmitSuccessful]);

  const message = watch("myMessage") || "";
  const messageCharsLeft = 1500 - message.length;

  /** A function that generate a random number */
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = async () => {
    const statusMessage = document.querySelector(".status-message");
    generateContactNumber();
    const reponse = await sendForm(
      "default_service",
      "template_prew0ng",
      "#contact-form"
    );

    if (reponse.status === 200) {
      console.log("SUCCESS!", reponse.status, reponse.text);
      setStatusMessage("Message sent!");
      if (statusMessage) {
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    } else {
      console.log("FAILED...", reponse.status, reponse.text);
      setStatusMessage("Message wasn't able to send.");
      if (statusMessage) {
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="id" value={contactNumber} />

      <input
        className="Email-input"
        type="text"
        placeholder="Name"
        {...register("yourName", {
          required: "Name is required.",
          maxLength: {
            value: 40,
            message: "You exceeded the maximum character!",
          },
        })}
      />
      {errors.yourName && errMsg(errors.yourName, -32)}

      <br />

      <input
        className="Email-input"
        style={{marginTop: 24}}
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required.",
          maxLength: {
            value: 40,
            message: "You exceeded the maximum character!",
          },
        })}
      />
      {errors.email && errMsg(errors.email, -32)}

      <br />
      <div>
        <textarea
          className="Email-textarea"
          style={{marginTop: 24}}
          placeholder="Message"
          {...register("myMessage", {
            required: "Please enter a message.",
            maxLength: {
              value: 1500,
              message: "You exceeded the maximum character!",
            },
          })}
        />
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <input
          style={{ display: "flex", justifyContent: "center"}}
          type="submit"
          value="Send"
        />
        {errors.myMessage && errMsg(errors.myMessage, 0)}
        <div className="message-chars-left">{messageCharsLeft}</div>
        </div>
      </div>


      
      <div className="status-message">
        {statusMessage}
      </div>
    </form>
  );
};

export default Email;
