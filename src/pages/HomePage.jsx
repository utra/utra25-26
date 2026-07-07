import { motion } from "framer-motion";
import bgGradient from "../assets/images/graphics/background_gradient.png";
import utraLogo from "../assets/images/logo/utraLogoWhiteBlueAccent.png";
import photoshoot from "../assets/images/photoshoot/IMG28632.JPG";
import utraArt from "../assets/images/photoshoot/utra_art.png";

// Animation variants
const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
};

const achievements = [
  {
    title: "Top 5 Finish",
    description: "UIUC iRobotics Pacbot Compeititon 2024, Illinois, United States",
    gradient: "gradient-purple-blue",
    maxWidth: "max-w-[262px]",
  },
  {
    title: "5th in Design",
    description:
      "Intelligent Ground Vehicle Competition (IGVC) 2024, Michigan, United States",
    gradient: "gradient-purple-blue-reversed",
    maxWidth: "max-w-[280px]",
  },
  {
    title: "4th Place",
    description: "University of Bordeaux RoboCup 2023, Bordeaux, France",
    gradient: "gradient-purple-blue",
    maxWidth: "max-w-[262px]",
  },
];

const teams = [
  {
    title: "SUMO",
    description: "Battle it out in the ring. Perfect for beginners.",
    gradient: "gradient-purple-blue",
    maxWidth: "max-w-[262px]",
  },
  {
    title: "ART",
    description: "Autonomous rovers that explore, navigate and sense the world.",
    gradient: "gradient-purple-blue",
    maxWidth: "max-w-[262px]",
  },
  {
    title: "Combat",
    description: "High power robots built for competitive clashes.",
    gradient: "gradient-purple-blue-reversed",
    maxWidth: "max-w-[290px]",
  },
  {
    title: "RoboSoccer",
    description: "Humanoid robots that compete in real world soccer games.",
    gradient: "gradient-purple-blue",
    maxWidth: "max-w-[262px]",
  },
  {
    title: "6IX-PAC",
    description:
      "Pac-Man inspired robots built for quick and efficient maze solving.",
    gradient: "gradient-purple-blue-reversed",
    maxWidth: "max-w-[300px]",
  },
  {
    title: "Robonars",
    description: "Technical Workshop and Seminar Speaker Series",
    gradient: "gradient-purple-blue-reversed",
    maxWidth: "max-w-[300px]",
  },
  {
    title: "UTRAHacks",
    description:
      "Organizing UTRAHacks, North America's largest robotics hackathon.",
    gradient: "gradient-purple-blue-reversed",
    maxWidth: "max-w-[300px]",
  },
];

function InfoCard({ title, description, gradient, maxWidth }) {
  return (
    <motion.div
      variants={cardVariants}
      className="card-hover bg-black bg-opacity-40 backdrop-blur-sm py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
    >
      <h3
        className={`[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] ${gradient}`}
      >
        {title}
      </h3>
      <p
        className={`text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] ${maxWidth}`}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-60 fade-bottom"
        style={{
          backgroundImage: `url('${utraArt}')`,
        }}
      />

      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center px-4 md:px-0 min-h-[calc(100vh-84px)] md:min-h-0 justify-center md:justify-start"
        initial="hidden"
        animate="visible"
        variants={heroStagger}
      >
        <motion.img
          src={utraLogo}
          className="animate-float w-[150px] md:w-[250px] md:mt-[102px] filter drop-shadow-[4px_4px_10px_rgba(191,197,255,0.3)]"
          alt="Utra logo"
          variants={heroItem}
        />
        <motion.h1
          className="text-white [font-family:'Afacad',sans-serif] font-bold mt-[15px] md:mt-[20px] text-[36px] sm:text-[50px] md:text-[80px] w-full max-w-[853px] text-center leading-[1.1] md:leading-[75px] px-4"
          variants={heroItem}
        >
          University of Toronto Robotics Association
        </motion.h1>
        <motion.p
          className="[font-family:'BeautySalon',sans-serif] text-[40px] sm:text-[55px] md:text-[80px] mt-[15px] md:mt-[20px] px-1 gradient-purple-lightblue text-center"
          variants={heroItem}
        >
          Design. Build. Inspire.
        </motion.p>
        <motion.div
          variants={heroItem}
          className="mt-8 md:mt-12 text-white/70"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="animate-bounce-slow w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="mt-[3rem] sm:mt-[16rem] md:mt-[24rem] flex flex-col lg:flex-row gap-8 lg:gap-[55px] items-center px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center lg:text-left" variants={fadeInUp}>
          <h2 className="gradient-purple-blue [font-family:'ProximaNova',sans-serif] font-extrabold text-[80px] sm:text-[110px] md:text-[150px] leading-none">
            UTRA
          </h2>
          <p className="text-white [font-family:'ProximaNova',sans-serif] w-full max-w-[435px] text-[18px] sm:text-[22px] md:text-[28px] leading-[1.3] mx-auto lg:mx-0">
            Established in 2004, the University of Toronto Robotics Association
            is the premier robotics student group at the University of Toronto.
            Here at UTRA, we innovate the future of robotics.
          </p>
        </motion.div>
        <motion.div
          className="w-full max-w-[538px] group overflow-hidden rounded-[10px] shadow-[0px_10px_20px_-10px_rgba(255,255,255,0.25)]"
          variants={fadeInUp}
        >
          <img
            src={photoshoot}
            alt="UTRA photoshoot"
            className="rounded-[10px] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
      </motion.div>

      {/* Achievements & Teams Section */}
      <div className="relative w-full mt-[60px] md:mt-[-40px] pt-[40px] md:pt-[200px] pb-[80px] md:pb-[120px] flex flex-col items-center px-4">
        <div
          className="absolute inset-0 bg-cover h-full fade-top pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />

        <div className="relative z-10 w-full max-w-[1040px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h1 className="text-white text-[40px] sm:text-[55px] md:text-[70px] [font-family:'ProximaNova',sans-serif] font-extrabold text-center md:text-left">
              Achievements
            </h1>
            <p className="text-white [font-family:'ProximaNova',sans-serif] text-[18px] sm:text-[22px] md:text-[28px] text-center md:text-left">
              UTRA actively participates in competitions worldwide, achieving
              excellence on the global stage.
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {achievements.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h1 className="mt-[60px] md:mt-[130px] text-white text-[40px] sm:text-[55px] md:text-[70px] [font-family:'ProximaNova',sans-serif] font-extrabold text-center md:text-left">
              Our Teams
            </h1>
            <p className="text-white [font-family:'ProximaNova',sans-serif] text-[18px] sm:text-[22px] md:text-[28px] text-center md:text-left">
              UTRA has 7 different subteams for all experience levels.
            </p>
          </motion.div>

          {/* Team Cards */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {teams.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
