import React, { useState } from 'react';



export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const fields = [
    {id: 'Your Name', type: 'text', func: setName},
    {id: 'Your Email', type: 'email', func: setEmail},
    {id: 'Your Phone', type: 'text', func: setPhone},
  ]

  const renderField = fields.map((field) => {
    return (
      <div className="mb-6" key={field.id}>
        <input
          type={field.type}
          placeholder={field.id}
          onChange={(e) => {field.func(e.target.value)}}
          className="
          w-full
          rounded
          py-3
          px-[14px]
          text-dark_gray
          dark:text-white
          border border-light_gray
          outline-none
          focus-visible:shadow-none
          focus:border-primary
          "
          />
      </div>
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
      name,
      email,
      phone,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setPhone('')
        setBody('')
      }
  })}

  return (
    <div className="w-full lg:w-1/2 xl:w-5/12">
      <form>
        {renderField}
        <div className="mb-6">
            <textarea
              rows="6"
              placeholder="Your Message"
              onChange={(e) => {setMessage(e.target.value)}}
              className="
              w-full
              rounded
              py-3
              px-[14px]
              text-dark_gray
              dark:text-white
              border border-light_gray
              resize-none
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
              ></textarea>
        </div>
        
        <div>
            <button
              type="submit"
              onClick={(e) => {handleSubmit(e)}}
              className="
              w-full
              text-white
              bg-mint
              rounded
              p-3
              transition
              hover:bg-opacity-80
              duration-300
              "
              >
            Send Message
            </button>
        </div>
      </form>
    </div>
  )
}