import React from "react";
import userData from "@constants/data";
import {BsTelephone, BsMailbox2, BsFillPinFill} from "react-icons/bs";
import {FaLinkedinIn, FaInstagram, FaTwitter} from "react-icons/fa"


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
          
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md dark:bg-gray-900 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
             

            </header>
            <iframe
            width="100%"
            height="10%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=unilorin&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
            
            
          
            <div className="icons-container inline-flex flex-col my-20">
              {/* <div className="flex flex-row items-center space-x-6 hover:border hover:border-blue-500 p-4">

               <BsTelephone />
                <p className="text-gray-50 font-light text-sm">
                  {userData.phone}
                </p>
              </div> */}
              <div className="flex flex-row items-center space-x-6 hover:border hover:border-blue-500 p-4">
                <BsMailbox2 />
                <p className="text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 hover:border hover:border-blue-500 p-4">
                <BsFillPinFill />
                <p className="text-gray-50 font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <a
                href={userData.socialLinks.linkedin}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={userData.socialLinks.twitter}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <FaTwitter />
              </a>
              <a
                href={userData.socialLinks.instagram}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <form className="form rounded-lg bg-white p-4 flex flex-col" name="contact" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name" onChange={(e)=> setName(e.target.value)}
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email" onChange={(e)=> setEmail(e.target.value)}
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message" onChange={(e)=> setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="dark:bg-gray-900 rounded-md w-2/2 mx-4 mt-8 py-2 text-gray-50 text-xl font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </section>
  );
}
