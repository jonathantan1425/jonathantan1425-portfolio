import React, { useState } from "react";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsBody = Poppins({ subsets: ["latin"], weight: "400" });

const subheaderClass = poppinsBody.className + " text-left text-4xl text-smoke-50 mb-4 w-1/2 mx-auto";
const headerClass = poppinsBold.className + " text-6xl text-smoke-50 mb-4 w-1/2 mx-auto";
const responseMsgClass = poppinsBody.className + " text-2xl text-smoke-50 mb-4 w-1/2 mx-auto pt-4";

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
          className="
          w-full
          rounded
          py-3
          px-[14px]
          text-smoke-950
          border border-smoke-50
          bg-smoke-100
          resize-none
          outline-none
          focus-visible:shadow-none
          focus:border-turquoise-200
          "
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
      console.log(res)
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
    <div className="flex flex-col w-full items-center justify-center p-20">
      <div className="bg-turquoise-950 rounded-xl py-10 px-20 w-full">
        <p className={subheaderClass}>Like what you see?</p>
        <p className={headerClass}>Contact me!</p>
        <form className="w-1/2 mx-auto">
          {renderField}
          <div className="mb-6">
            <textarea
              rows={6}
              placeholder="Your Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="
                w-full
                rounded
                py-3
                px-[14px]
                text-smoke-950
                border border-smoke-50
                bg-smoke-100
                resize-none
                outline-none
                focus-visible:shadow-none
                focus:border-turquoise-200
                "
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className={`
              ${success && !isSending ? "pointer-events-none bg-turquoise-300" : "bg-turquoise-200"}
                w-full
                text-turquoise-950
                rounded
                p-3
                transition
                hover:bg-opacity-80
                duration-300
                `}
            >
              <span className={`${!success && !isSending ? "" : "hidden"}`}>Send Message</span>
              <span className={`${isSending ? "" : "hidden"} loading loading-spinner loading-xs`}></span>
              <span className={`${success && !isSending ? "": "hidden"}`}>Thank you for reaching out! I will be in contact soon.</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
