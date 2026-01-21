import { motion } from "framer-motion";
import { FaInstagram, FaPaperPlane, FaUsers } from "react-icons/fa";
import utraArt from "../assets/images/robonars/Robonars Class.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SocialCard = ({ icon: Icon, title, description, link, label, gradient, delay }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={cardVariants}
    className={`relative group p-8 rounded-3xl backdrop-blur-md bg-black/40 border border-white/10 overflow-hidden flex flex-col h-full hover:border-white/20 transition-all duration-300`}
  >
    {/* Gradient Overlay */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${gradient}`} />
    
    <div className="relative z-10 flex flex-col items-center text-center h-full">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${gradient} shadow-lg shadow-purple-500/20`}>
            <Icon className="text-3xl text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 [font-family:'ProximaNova',sans-serif]">{title}</h3>
        <p className="text-gray-300 mb-8 leading-relaxed [font-family:'ProximaNova',sans-serif] flex-grow">
            {description}
        </p>

        <span className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider uppercase text-white/80 group-hover:text-white transition-colors">
            <span>{label}</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </span>
    </div>
  </motion.a>
);

export default function ContactPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-screen text-white overflow-hidden pb-20 relative">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-30 pointer-events-none h-[40%]"
        style={{
          backgroundImage: `url('${utraArt}')`,
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
        }}
      />

      {/* Background Decor (Subtle overlays on top of image for readability) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
            <h1 className="text-[60px] md:text-[90px] font-extrabold gradient-purple-blue mb-6 [font-family:'ProximaNova',sans-serif] leading-tight">
            Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed [font-family:'ProximaNova',sans-serif] drop-shadow-md">
                Whether you're interested in joining, sponsoring, or just saying hello, we'd love to hear from you.
            </p>
        </motion.div>
      </section>

      {/* Cards Grid */}
      <section className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
            {/* Instagram / Updates */}
            <SocialCard 
                icon={FaInstagram}
                title="Follow Our Journey"
                description="Stay updated with our latest robots, achievements, competition highlights, and daily team life."
                link="https://www.instagram.com/utra_uoft/"
                label="Follow @utra_uoft"
                gradient="from-pink-500 to-rose-600"
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

            {/* Email / Direct Contact */}
            <SocialCard 
                icon={FaPaperPlane}
                title="Send a Message"
                description="Missed recruitment? Have a sponsorship inquiry? Send us an email directly."
                link="mailto:hello@utra.ca"
                label="hello@utra.ca"
                gradient="from-blue-500 to-cyan-500"
            />

        </motion.div>
      </section>
    </div>
  );
}
