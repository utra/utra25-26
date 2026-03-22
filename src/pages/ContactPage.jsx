import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaUsers,
} from "react-icons/fa";
import utraArt from "../assets/images/robonars/Robonars Class.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const cardVariants = {
  hidden: { y: 30 },
  visible: { y: 0 },
};

const SocialCard = ({
  icon: Icon,
  title,
  description,
  link,
  label,
  gradient,
  delay,
  secondaryLink,
}) => {
  const CardContainer = secondaryLink ? motion.div : motion.a;
  const containerProps = {
    variants: cardVariants,
    className: `relative group p-5 sm:p-6 rounded-2xl backdrop-blur-md bg-black/40 border border-white/10 overflow-hidden flex flex-col h-full hover:border-white/20 transition-all duration-300`,
    ...(secondaryLink
      ? {}
      : { href: link, target: "_blank", rel: "noopener noreferrer" }),
  };

  return (
    <CardContainer {...containerProps}>
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${gradient}`}
      />

      <div className="relative z-10 flex flex-col items-center text-center h-full">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${gradient} shadow-lg shadow-purple-500/20`}
        >
          <Icon className="text-2xl text-white" />
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 [font-family:'ProximaNova',sans-serif]">
          {title}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed [font-family:'ProximaNova',sans-serif] flex-grow">
          {description}
        </p>

        {secondaryLink ? (
          <div className="flex gap-3 w-full mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-colors bg-white/5 py-2.5 sm:py-3 rounded-xl hover:bg-white/10 flex-1"
            >
              <FaInstagram className="w-4 h-4 mr-2" />
              <span>{label}</span>
            </a>
            <a
              href={secondaryLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-colors bg-white/5 py-2.5 sm:py-3 rounded-xl hover:bg-white/10 flex-1"
            >
              <secondaryLink.icon className="w-4 h-4 mr-2" />
              <span>{secondaryLink.label}</span>
            </a>
          </div>
        ) : (
          <span className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/80 group-hover:text-white transition-colors mt-auto">
            <span>{label}</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        )}
      </div>
    </CardContainer>
  );
};

export default function ContactPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-screen text-white overflow-hidden pb-20 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-30 pointer-events-none h-[40%]"
        style={{
          backgroundImage: `url('${utraArt}')`,
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />

      {/* Background Decor (Subtle overlays on top of image for readability) */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 sm:pt-32 pb-8 sm:pb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[40px] sm:text-[60px] md:text-[90px] font-extrabold gradient-purple-blue mb-4 sm:mb-6 [font-family:'ProximaNova',sans-serif] leading-tight">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed [font-family:'ProximaNova',sans-serif] drop-shadow-md px-4">
            Whether you're interested in joining, sponsoring, or just saying
            hello, we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Cards Grid */}
      <section className="container mx-auto px-4 relative z-10 max-w-[1450px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-5"
        >
          {/* Instagram */}
          <SocialCard
            icon={FaInstagram}
            title="Follow Us"
            description="Stay updated with our latest robots, competition highlights, and daily team life."
            link="https://www.instagram.com/utra_uoft/"
            label="Instagram"
            gradient="from-pink-500 to-rose-600"
          />

          {/* LinkedIn */}
          <SocialCard
            icon={FaLinkedin}
            title="Connect With Us"
            description="Follow our professional updates, achievements, and networking opportunities."
            link="https://www.linkedin.com/company/university-of-toronto-robotics-association/"
            label="LinkedIn"
            gradient="from-blue-600 to-blue-800"
          />

          {/* Recruitment */}
          <SocialCard
            icon={FaUsers}
            title="Join The Team"
            description="We recruit new members at the start of Fall and Winter terms. Check our Instagram for the latest announcements!"
            link="https://www.instagram.com/utra_uoft/"
            label="Check Updates"
            gradient="from-purple-500 to-indigo-600"
          />

          {/* Email / General Inquiries */}
          <SocialCard
            icon={FaPaperPlane}
            title="General Inquiries"
            description="Have a question about UTRA? Missed recruitment? Reach out to us for general information."
            link="mailto:admin@utra.ca"
            label="admin@utra.ca"
            gradient="from-blue-500 to-cyan-500"
          />

          {/* Email / Sponsorship Inquiries */}
          <SocialCard
            icon={FaHandshake}
            title="Sponsorship Inquiries"
            description="Interested in partnering with or sponsoring UTRA? We'd love to discuss collaboration opportunities."
            link="mailto:sponsorships@utra.ca"
            label="sponsorships@utra.ca"
            gradient="from-emerald-500 to-teal-500"
          />
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 relative z-10 max-w-4xl mt-16 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-6 sm:py-10"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 [font-family:'ProximaNova',sans-serif]">
            Send Us a Message
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8 [font-family:'ProximaNova',sans-serif]">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}

const WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbwDSQXD6jh2ypHSK6yUMdQstpkFmsmPsmDE4qNM-0NRmFEu20Pu4sBUJRj5_CzzsAen/exec";

function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.Name.trim()) errors.Name = "Please provide your name.";
    if (!formData.Email.trim()) {
      errors.Email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      errors.Email = "Please provide a properly formatted email address.";
    }
    if (!formData.Message.trim()) errors.Message = "Please provide a message.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, val]) => body.append(key, val));

      const res = await fetch(WEBAPP_URL, { method: "POST", body });
      const json = await res.json();

      if (json.result === "success") {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base [font-family:'ProximaNova',sans-serif] focus:outline-none focus:bg-white/10 transition-all duration-200 ${
      fieldErrors[field]
        ? "border-red-500 focus:border-red-400"
        : "border-white/10 focus:border-purple-400"
    }`;

  return submitted ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-10 text-center"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
        <FaPaperPlane className="text-2xl text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 [font-family:'ProximaNova',sans-serif]">
        Message Sent!
      </h3>
      <p className="text-gray-300 text-sm [font-family:'ProximaNova',sans-serif]">
        Thanks for reaching out. We'll be in touch soon.
      </p>
      <button
        onClick={() => {
          setSubmitted(false);
          setFormData({ Name: "", Email: "", Message: "" });
        }}
        className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white transition-colors [font-family:'ProximaNova',sans-serif]"
      >
        Send another message
      </button>
    </motion.div>
  ) : (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 [font-family:'ProximaNova',sans-serif]">
            Name
          </label>
          <input
            type="text"
            name="Name"
            placeholder="Your name"
            value={formData.Name}
            onChange={handleChange}
            className={inputClass("Name")}
          />
          {fieldErrors.Name && (
            <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-red-500/10 border border-red-500/20 px-3 py-1.5">
              <span className="text-red-400 text-xs">▲</span>
              <p className="text-red-400 text-xs [font-family:'ProximaNova',sans-serif]">
                {fieldErrors.Name}
              </p>
            </div>
          )}
        </div>

        <div className="flex-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 [font-family:'ProximaNova',sans-serif]">
            Email
          </label>
          <input
            type="text"
            name="Email"
            placeholder="your@email.com"
            value={formData.Email}
            onChange={handleChange}
            className={inputClass("Email")}
          />
          {fieldErrors.Email && (
            <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-red-500/10 border border-red-500/20 px-3 py-1.5">
              <span className="text-red-400 text-xs">▲</span>
              <p className="text-red-400 text-xs [font-family:'ProximaNova',sans-serif]">
                {fieldErrors.Email}
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 [font-family:'ProximaNova',sans-serif]">
          Message
        </label>
        <textarea
          name="Message"
          rows={5}
          placeholder="What's on your mind?"
          value={formData.Message}
          onChange={handleChange}
          className={`${inputClass("Message")} resize-none`}
        />
        {fieldErrors.Message && (
          <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-red-500/10 border border-red-500/20 px-3 py-1.5">
            <span className="text-red-400 text-xs">▲</span>
            <p className="text-red-400 text-xs [font-family:'ProximaNova',sans-serif]">
              {fieldErrors.Message}
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center [font-family:'ProximaNova',sans-serif]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full py-3 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed shadow-purple-500/30 transition-all duration-200 [font-family:'ProximaNova',sans-serif] flex items-center justify-center gap-2"
      >
        <FaPaperPlane className={`text-sm ${loading ? "animate-pulse" : ""}`} />
        {loading ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
