import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="w-full py-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="uppercase text-sm py-2">Name</label>
          <input className="border-2 rounded-lg p-3 bg-white border-gray-300" type="text" name="from_name" id="name" required/>
        </div>
          
        <div className="flex flex-col py-2">
          <label htmlFor="email" className="uppercase text-sm py-2">Email</label>
          <input className="border-2 rounded-lg p-3 bg-white border-gray-300" type="email" name="from_email" id="email" required />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="phone" className="uppercase text-sm py-2">Phone</label>
          <input className="border-2 rounded-lg p-3 bg-white border-gray-300" type="tel" name="from_phone" id="phone" required />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="message" className="uppercase text-sm py-2">Message</label>
          <textarea className="border-2 rounded-lg p-3 bg-white border-gray-300" rows={6} name="message" id="message" required></textarea>
        </div>

        <button className="p-4 mt-4 w-full lg:w-max lg:mr-auto text-primaryText border-2 border-gray-300 rounded-lg hover:scale-105 ease-in duration-300">Send Message</button>
      </div>
    </form>
  )
}
export default ContactForm