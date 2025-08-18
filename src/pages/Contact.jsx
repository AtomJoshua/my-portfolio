import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_xjsvfyt",
        "template_soq11oe",
        form.current,
        "21PZYOtFePiNDkFUH"
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus({ type: "error", message: "Failed to send message. Please try again." });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-md p-6 rounded-lg shadow-lg mt-24 text-center">
        <h1 className="text-3xl text-white font-bold">Reach Out</h1>
        <p className="text-lg text-gray-300 mt-4">
          Have questions or want to collab? Reach out to me via the form below.
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="md:w-1/2 bg-black/60 backdrop-blur-md p-6 shadow-md rounded-md text-gray-200">
          {/* <h2 className="text-2xl font-semibold text-white">Where to find us</h2>
          <p className="mt-2">
            488 Sulu Gambari Close. <br />
            Gwarimpa <br />
            Abuja, Nigeria.
          </p> */}

          <h2 className="text-2xl font-semibold text-white mt-4">Phone</h2>
          <p className="mt-2">+2349067581803</p>
          {/* <p className="mt-2">+2347015598516</p> */}

          <h2 className="text-2xl font-semibold text-white mt-4">Email</h2>
          <p className="mt-2">atomenoch45@gmail.com</p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-black/60 backdrop-blur-md p-6 shadow-md rounded-md text-gray-200">
          <h2 className="text-2xl font-semibold text-white">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input type="hidden" name="title" value="New Contact Form Message" />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full md:w-auto bg-purple-700 hover:bg-purple-800 transition text-white px-6 py-3 rounded-md flex items-center justify-center"
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
