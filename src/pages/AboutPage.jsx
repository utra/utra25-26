import { motion } from "framer-motion";

// Images
import utraLogo from "../assets/images/logo/utraLogoWhiteMobile.png";
import christopherImg from "../assets/images/headshots/christopher.jpg";
import aaliyahImg from "../assets/images/headshots/aaliyah.jpeg";
import brendanImg from "../assets/images/headshots/brendan.jpeg";
import lesleyImg from "../assets/images/headshots/lesley.png";
import sabaaImg from "../assets/images/headshots/sabaa.jpg";
import stanImg from "../assets/images/headshots/stan.jpg";
import jalilyaImg from "../assets/images/headshots/jalilya.png";
import indeshImg from "../assets/images/headshots/indesh.png";
import zainImg from "../assets/images/headshots/zain.jpg";
import maggieImg from "../assets/images/headshots/maggie.jpg";
import aboutImage from "../assets/images/photoshoot/aboutImage.jpg";
import justinImg from "../assets/images/headshots/justin.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const teamMembers = [
  {
    name: "Brendan J. Lee",
    role: "President",
    program: "Mech 2T7",
    image: brendanImg,
    linkedin: "https://www.linkedin.com/in/brendanjunilee/",
  },
  {
    name: "Stan Li",
    role: "Vice-President Internal",
    program: "ECE 2T7+PEY",
    image: stanImg,
    linkedin: "www.linkedin.com/in/stan-li-06a820250",
  },
  {
    name: "Lesley Ha Tchong",
    role: "Vice-President Partnerships",
    program: "CHEM 2T7 + PEY",
    image: lesleyImg,
    linkedin: "https://www.linkedin.com/in/lesley-ha-tchong-92839b1b9/",
  },
  {
    name: "Rocklen Jeong",
    role: "VP Partnerships",
    program: "ECE 2T7",
    image: utraLogo, // Missing image
    linkedin: "",
  },
  {
    name: "Isabella Tang",
    role: "VP Finance",
    program: "IndE 2T6 + PEY",
    image: utraLogo, // Missing image
    linkedin: "https://www.linkedin.com/in/isabella-tang-0a482a22a/",
  },
  {
    name: "Christopher Lee",
    role: "UTRA Hacks Director",
    program: "ECE 2T8",
    image: christopherImg,
    linkedin: "www.linkedin.com/in/chrislee6466",
  },
  {
    name: "Justin Fang",
    role: "Hackathon Director",
    program: "ECE 2T7",
    image: justinImg, // HEIC format not supported natively
    linkedin: "",
  },
  {
    name: "Sarah Hira",
    role: "Marketing Director",
    program: "Bioinformatics + Chemistry, A&S 2T7",
    image: utraLogo, // Missing image
    linkedin: "",
  },
  {
    name: "Maggie Zhao",
    role: "Marketing Director",
    program: "CIV 2T7",
    image: maggieImg,
    linkedin: "",
  },
  {
    name: "Sabaa Rashid",
    role: "Marketing Associate",
    program: "EngSci 2T9 + PEY",
    image: sabaaImg,
    linkedin: "https://www.linkedin.com/in/sabaa-a-rashid/",
  },
  {
    name: "Jalilya Zhaxybayeva",
    role: "Marketing Associate",
    program: "MECH 2T8",
    image: jalilyaImg,
    linkedin: "https://www.linkedin.com/in/jalilya-zhaxybayeva-269089348",
  },
  {
    name: "Aaliyah Pirani",
    role: "Sumo PM",
    program: "CS ‘28",
    image: aaliyahImg,
    linkedin: "https://www.linkedin.com/in/aaliyahpirani",
  },
  {
    name: "Jennifer Zhang",
    role: "Project Manager",
    program: "EngSci 2T5 + PEY",
    image: utraLogo, // Missing image
    linkedin: "",
  },
  {
    name: "Jinali Dona",
    role: "Executive Director Robosoccer",
    program: "MECH 2T5 +PEY",
    image: utraLogo, // Missing image
    linkedin: "https://www.linkedin.com/in/jinali-dona",
  },
  {
    name: "Patricia Krisanti",
    role: "Project Manager",
    program: "EngSci - BME 2T6 + PEY",
    image: utraLogo, // Missing image
    linkedin: "",
  },
  {
    name: "Indesh",
    role: "UTRA Combat PM",
    program: "MECH 2T7 + PEY",
    image: indeshImg,
    linkedin: "www.linkedin.com/in/indesh-vijayanand",
  },
  {
    name: "Zain Azam",
    role: "Project Manager",
    program: "ECE 2T7",
    image: zainImg,
    linkedin: "https://www.linkedin.com/in/zainyusufazam/",
  },
];

teamMembers.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

const TeamMember = ({ name, role, program, image, linkedin }) => (
  <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
    <a
      href={linkedin ? (linkedin.startsWith("http") ? linkedin : `https://${linkedin}`) : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={!linkedin ? "pointer-events-none" : ""}
    >
      <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-utra-pink/20 group-hover:border-utra-pink transition-colors duration-300 bg-black/40">
        <img
          src={image}
          alt={name}
          className={`relative inset-0 w-full h-full object-cover z-10 ${image === utraLogo ? "bg-black/40 p-6" : ""}`}
        />
      </div>
    </a>
    <h3 className="text-xl font-bold text-white [font-family:'ProximaNova',sans-serif]">{name}</h3>
    <p className="text-utra-light-purple font-bold mb-1 [font-family:'ProximaNova',sans-serif]">{role}</p>
    <p className="text-gray-300 text-sm mb-3 [font-family:'ProximaNova',sans-serif]">{program}</p>
  </motion.div>
);

const Card = ({ title, description }) => (
  <motion.div variants={itemVariants} className="p-8 rounded-xl bg-black bg-opacity-40 flex flex-col items-center text-center">
    <h3 className="text-[32px] font-extrabold gradient-purple-blue mb-4 [font-family:'ProximaNova',sans-serif]">{title}</h3>
    <p className="text-white text-[20px] leading-relaxed [font-family:'ProximaNova',sans-serif]">{description}</p>
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-screen text-white overflow-hidden pb-20 relative">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-0"> {/* Reduced margin bottom from 32 to 0 */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
                <h2 className="text-[50px] md:text-[60px] font-extrabold leading-tight gradient-purple-blue [font-family:'ProximaNova',sans-serif]">
                    Our Mission
                </h2>
                <p className="text-[24px] text-white leading-[1.3] [font-family:'ProximaNova',sans-serif]">
                    UTRA's mission is to foster creativity and innovation while cultivating technology leaders of the future by providing students with opportunities to design and build advanced robotic technologies.
                </p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[10px] overflow-hidden aspect-video bg-utra-indigo shadow-[0px_10px_20px_-10px_rgba(255,255,255,0.25)]"
            >
                {/* Photo Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-utra-blue to-utra-indigo opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">
                  <img src={aboutImage} alt="" className="object-cover h-full" />
                </div>
            </motion.div>
        </div>
      </section>

      {/* Achievements and Goals Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Achievements Column */}
            <div>
              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-10"
              >
                  <h2 className="text-[50px] lg:text-[40px] xl:text-[60px] font-extrabold text-white mb-4 [font-family:'ProximaNova',sans-serif]">Our Achievements</h2>
              </motion.div>
              <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                  transition={{ duration: 0.8 }}
              >
                  <Card 
                      title="2nd Place" 
                      description="at the mid-season PacBot competition at UIUC 2024" 
                  />
                  <Card 
                      title="6th Place" 
                      description="in design competition at the IGVC 2025" 
                  />
                  <Card 
                      title="600+ Applicants" 
                      description="for UTRAHacks 5 (2025), with over 300 paricipants" 
                  />
              </motion.div>
            </div>

            {/* Goals Column */}
            <div>
              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-10"
              >
                  <h2 className="text-[50px]  lg:text-[40px] xl:text-[60px]  font-extrabold text-white mb-4 [font-family:'ProximaNova',sans-serif]">Future Goals</h2>
              </motion.div>

              <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
              >
                  <Card 
                      title="Grow Community" 
                      description="Double hackathon and SUMO participants"
                  />
                   <Card 
                      title="Top Performance" 
                      description="Finish top 4 across all our competitions" 
                  />
                   <Card 
                      title="Education" 
                      description="Host more guest speaker sessions for Robonars" 
                  />
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* Team/Admin Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-[70px] font-extrabold text-white mb-4 [font-family:'ProximaNova',sans-serif]">Meet The Team</h2>
                <p className="text-[24px] text-white [font-family:'ProximaNova',sans-serif]">The brilliant minds behind our robots.</p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            >
                 {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        program={member.program}
                        image={member.image}
                        linkedin={member.linkedin}
                    />
                ))}
            </motion.div>
        </div>
      </section>

    </div>
  );
}
