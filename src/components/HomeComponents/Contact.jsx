import emailjs from '@emailjs/browser'; // Correct import for EmailJS
import { useRef, useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  // useRef for form reference
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vdq7wah', // Your Service ID
        'template_ur8ln0y', // Your Template ID
        form.current, // Form reference
        '_-arK-pJ65hVEcxoC' // Public Key
      )
      .then(
        () => {
          setStatus("Your message has been sent successfully!");
        },
        (error) => {
          setStatus("Failed to send message. Please try again.", error);
        }
      );

    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setCountry("");
    setMessage("");
  };

  return (
    <div id="contact" className="dark:bg-transparent transition-all duration-300 border-t-[3px] dark:border-none py-16">
      <div className="w-[90%] m-auto">
        <div className="pb-4">
          <h2 className="font-medium font-inter text-2xl text-center dark:text-gray-100 pb-2">
            Get in Touch <span className="text-indigo-600 font-Vast_shadow font-semibold text-3xl">with me</span>
          </h2>
          <p className="text-center text-gray-600 pb-6 font-Dm_font font-medium dark:text-gray-300">
            Have a question or need assistance? Fill out the form below, and we’ll respond promptly!
          </p>
        </div>

        <div className="flex flex-wrap gap-y-8 gap-x-6 dark:gap-x-12">
          {/* Contact Form */}
          <div className="w-full md:w-[60%]">
            <form
              ref={form}
              className="w-full bg-gradient-to-t from-[#89b0f961] via-[#19c7e65d] to-[#89b0f944] py-6 px-6 rounded dark:bg-gradient-to-b dark:to-[#101145] dark:via-[#101145] dark:from-[#132b64] dark:rounded-2xl dark:shadow-custom"
              onSubmit={sendEmail}
            >
              <h2 className="text-center text-2xl font-iner font-semibold pb-4 text-[#fe3ec4] dark:text-[#fcb32d]">Contact Me</h2>
              {/* Name */}
              <div className="pb-4">
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Phone & Email */}
              <div className="flex flex-wrap gap-4 pb-4">
                <input
                  className="contact-input"
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Service & Country */}
              <div className="flex flex-wrap gap-4 pb-4">
                <select
                  name="service"
                  className="contact-input"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Select Services</option>
                  <option value="Custom code Website">Custom code Website</option>
                  <option value="Create WordPress Website">Create WordPress Website</option>
                  <option value="WordPress E-commerce Website">WordPress E-commerce Website</option>
                  <option value="Landing Page Website">Landing Page Website</option>
                  <option value="Rebuild, Copy, Edit, Customization">Rebuild, Copy, Edit, Customization</option>
                  <option value="WordPress bug fixing">WordPress bug fixing</option>
                  <option value="Malware Removal & Security">Malware Removal & Security</option>
                </select>
                <input
                  type="text"
                  name="country"
                  className="contact-input"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>

              {/* Message */}
              <div className="pb-4">
                <textarea
                  name="message"
                  className="contact-input"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white w-full py-2 font-inter rounded transition-transform duration-300 hover:scale-105 hover:bg-blue-500 dark:bg-[#3730A3]"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-center text-green-500">{status}</p>}
          </div>

          {/* Information & Google Map */}
          <div className="w-full md:w-[35%] bg-white shadow-md p-6 rounded dark:bg-gradient-to-b dark:to-[#101145] dark:via-[#101145] dark:from-[#132b64] dark:rounded-2xl dark:shadow-custom">
            <div className="flex flex-row gap-x-4">
              <h2 className="text-lg font-semibold text-gray-800 font-inter dark:text-white">Bickrom Chandro Sen</h2>
              <span className="inline-block bg-[#1d2f69] dark:bg-[#2020b0] text-white text-sm font-medium py-1 px-3 rounded-full font-Dm_font">
                Web Developer
              </span>
            </div>
                <p className="text-gray-600 mt-2 font-Dm_font text-sm dark:text-gray-300">
                Crafting seamless digital experiences with precision and creativity.  
                Empowering brands to thrive online with tailored web solutions.  
              </p>
                          

            <div className="mt-6">
                  <iframe 
                  type="google map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67667.16828987045!2d89.21460999683711!3d25.754493786630565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1735174010213!5m2!1sen!2sbd" className="w-full h-[300px] rounded shadow-md" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
