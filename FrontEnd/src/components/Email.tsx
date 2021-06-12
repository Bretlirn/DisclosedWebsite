import React, { useState } from "react";
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

  React.useEffect(() => {
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
      {errors.yourName && (
        <div
          role="alert"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
          }}
        >
          {errors.yourName.message}
        </div>
      )}
      <input
        className="Email-input"
        type="text"
        placeholder="Name"
        {...register("yourName", {
          required: "This field is require!",
          maxLength: {
            value: 40,
            message: "You exceeded the maximum character!",
          },
        })}
      />

      <br />
      {errors.email && (
        <div
          role="alert"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
          }}
        >
          {errors.email.message}
        </div>
      )}
      <input
        className="Email-input"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "This field is require!",
          maxLength: {
            value: 40,
            message: "You exceeded the maximum character!",
          },
        })}
      />

      <br />
      {errors.myMessage && (
        <div
          role="alert"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
          }}
        >
          {errors.myMessage.message}
        </div>
      )}
      <textarea
        className="Email-textarea"
        placeholder="Message"
        {...register("myMessage", {
          required: "This field is require!",
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
          style={{ display: "flex", justifyContent: "center" }}
          type="submit"
          value="Send"
        />
        <div className="message-chars-left">{messageCharsLeft}</div>
      </div>
      <div style={{ color: "white" }} className="status-message">
        {statusMessage}
      </div>
    </form>
  );
};

export default Email;
