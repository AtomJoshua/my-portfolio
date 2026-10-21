import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim() || "Not provided";
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    // Send payload matching all common EmailJS variable patterns
    const templateParams = {
      from_name: name,
      name: name,
      email: email,
      reply_to: email,
      phone: phone,
      message: message,
      title: "New Portfolio Inquiry"
    };

    emailjs
      .send(
        "service_mrrfubp",
        "template_rx7kykj",
        templateParams,
        "21PZYOtFePiNDkFUH"
      )
      .then(
        (response) => {
          console.log("EmailJS Success:", response);
          setStatus({
            type: "success",
            message: "Message delivered successfully! I will get back to you shortly."
          });
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error details:", error);
          setStatus({
            type: "error",
            message: `Failed to send (${error.text || "check console"}). Please email directly.`
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="pt-28 px-4 max-w-5xl mx-auto text-gray-300 pb-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
        <p className="text-lg text-gray-400 mt-3">
          Available for technical engineering roles, infrastructure contracts, and full-stack collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Direct Channels</h2>
            <p className="text-sm text-gray-400">
              Feel free to reach out via email or phone. I typically respond within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:atomenoch45@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 border border-purple-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                  <div className="text-sm font-medium">atomenoch45@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+2349067581803"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 border border-purple-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Phone</div>
                  <div className="text-sm font-medium">+234 906 758 1803</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-medium">Abuja, Nigeria</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 text-xs text-gray-500">
            Open to on-site roles in Abuja as well as remote opportunities.
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+234 ..."
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your role or project..."
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm resize-none"
              />
            </div>

            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}