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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
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
      <div className="relative flex flex-col items-center px-4 md:px-0 min-h-[calc(100vh-84px)] md:min-h-0 justify-center md:justify-start">
        <img
          src={utraLogo}
          className="w-[150px] md:w-[250px] md:mt-[102px] filter drop-shadow-[4px_4px_10px_rgba(191,197,255,0.3)]"
          alt="Utra logo"
        />
        <h1 className="text-white [font-family:'Afacad',sans-serif] font-bold mt-[15px] md:mt-[20px] text-[36px] sm:text-[50px] md:text-[80px] w-full max-w-[853px] text-center leading-[1.1] md:leading-[75px] px-4">
          University of Toronto Robotics Association
        </h1>
        <p className="[font-family:'BeautySalon',sans-serif] text-[40px] sm:text-[55px] md:text-[80px] mt-[15px] md:mt-[20px] px-1 gradient-purple-lightblue text-center">
          Design. Build. Inspire.
        </p>
      </div>

      {/* About Section */}
      <motion.div
        className="mt-[3rem] sm:mt-[16rem] md:mt-[28rem] flex flex-col lg:flex-row gap-8 lg:gap-[55px] items-center px-4 md:px-8"
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
        <motion.div className="w-full max-w-[538px]" variants={fadeInUp}>
          <img
            src={photoshoot}
            alt="UTRA photoshoot"
            className="rounded-[10px] w-full shadow-[0px_10px_20px_-10px_rgba(255,255,255,0.25)]"
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
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue">
                Top 5 Finish
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[262px]">
                UIUC iRobotics Pacbot Compeititon 2024, Illinois, United States
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue-reversed">
                5th in Design
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[280px]">
                Intelligent Ground Vehicle Competition (IGVC) 2024, Michigan,
                United States
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col mx-auto sm:mx-0"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue">
                4th Place
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[262px]">
                University of Bordeaux RoboCup 2023, Bordeaux, France
              </p>
            </motion.div>
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
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue">
                SUMO
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[262px]">
                Battle it out in the ring. Perfect for beginners.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue">
                ART
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[262px]">
                Autonomous rovers that explore, navigate and sense the world.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue-reversed">
                Combat
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[290px]">
                High power robots built for competitive clashes.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue">
                RoboSoccer
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[262px]">
                Humanoid robots that compete in real world soccer games.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue-reversed">
                6IX-PAC
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[300px]">
                Pac-Man inspired robots built for quick and efficient maze
                solving.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue-reversed">
                Robonars
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[300px]">
                Technical Workshop and Seminar Speaker Series
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[calc(50%-8px)] lg:w-[335px] flex items-center text-center flex-col"
            >
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[28px] sm:text-[35px] md:text-[40px] gradient-purple-blue-reversed">
                UTRAHacks
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[24px] w-[90%] max-w-[300px]">
                Organizing UTRAHacks, North America's largest robotics
                hackathon.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
