"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsBody = Poppins({ subsets: ["latin"], weight: "400" });

const subheaderClass =
  poppinsBody.className + " text-left text-size-subheader text-turquoise-950";
const responseMsgClass =
  poppinsBody.className + " text-2xl text-smoke-50 mb-4 pt-4";
const inputClass = `w-full
  p-4
  text-smoke-950
  border-b border-turquoise-950
  bg-smoke-50
  resize-none
  outline-none
  focus-visible:shadow-none
  focus:bg-smoke-100`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const fields = [
    { id: "Your Name", type: "text", func: setName, value: name },
    { id: "Your Email", type: "email", func: setEmail, value: email },
    { id: "Your Phone", type: "text", func: setPhone, value: phone },
  ];

  const renderField = fields.map((field) => {
    return (
      <div className="mb-6" key={field.id}>
        <input
          type={field.type}
          placeholder={field.id}
          value={field.value}
          onChange={(e) => {
            field.func(e.target.value);
          }}
          className={inputClass}
        />
      </div>
    );
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Sending");
    setIsSending(true);

    let data = {
      name,
      email,
      phone,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      // headers: {
      //   Accept: "application/json, text/plain, */*",
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(data),
    }).then((res) => {
      setIsSending(false);
      console.log("Response received");
      console.log(res);
      if (res.ok) {
        setSuccess(true);
        console.log("Response succeeded!");
      }
    });
  };

  const renderSubmitted = () => {
    return (
      <p className={responseMsgClass}>
        Thank you for reaching out! I will be in contact soon.
      </p>
    );
  };

  return (
    <div
      id="contact"
      className="section flex justify-center item-center w-full px-5 py-16 "
    >
      <div className="space-y-4">
        <p className={subheaderClass}>Like what you see? Contact me!</p>
        <form className="w-full max-w-xl">
          {renderField}
          <textarea
            rows={6}
            placeholder="Your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className={inputClass}
          ></textarea>

          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className={`
                ${
                  success && !isSending
                    ? "pointer-events-none bg-turquoise-950"
                    : "bg-turquoise-950"
                }
                  mt-2
                  w-full
                  text-smoke-50
                  p-4
                  transition
                  hover:bg-turquoise-800
                  duration-300
                  `}
          >
            <span className={`${!success && !isSending ? "" : "hidden"}`}>
              Send Message
            </span>
            <span
              className={`${
                isSending ? "" : "hidden"
              } loading loading-spinner loading-xs`}
            ></span>
            <span className={`${success && !isSending ? "" : "hidden"}`}>
              Thank you for reaching out! I will be in contact soon.
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
