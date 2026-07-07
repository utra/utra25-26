import { motion } from "framer-motion";
import bgGradient from "../assets/images/graphics/background_gradient.png";

export const sponsors = [
  {
    name: "AMD",
    link: "https://www.amd.com/en.html",
    img: new URL("../assets/images/logo_sponsors/amd-logo.png", import.meta.url)
      .href,
  },
  {
    name: "DigiKey",
    link: "https://www.digikey.ca/",
    img: new URL("../assets/images/logo_sponsors/digikey.jpg", import.meta.url)
      .href,
  },
  {
    name: "SendCutSend",
    link: "https://sendcutsend.com/",
    img: new URL(
      "../assets/images/logo_sponsors/sendcutsend.svg",
      import.meta.url,
    ).href,
  },
  {
    name: "Pololu",
    link: "https://www.pololu.com/",
    img: new URL("../assets/images/logo_sponsors/pololu.png", import.meta.url)
      .href,
  },
  {
    name: "FingerTech Robotics",
    link: "https://www.fingertechrobotics.com/",
    img: new URL(
      "../assets/images/logo_sponsors/fingertech.png",
      import.meta.url,
    ).href,
  },
  {
    name: "Altium",
    link: "https://www.altium.com/",
    img: new URL("../assets/images/logo_sponsors/altium.png", import.meta.url)
      .href,
  },
  {
    name: "Just Cuz Robotics",
    link: "https://justcuzrobotics.com/",
    img: new URL(
      "../assets/images/logo_sponsors/justcuzrobotics.webp",
      import.meta.url,
    ).href,
  },
  {
    name: "Mouser Electronics",
    link: "https://www.mouser.ca/",
    img: new URL("../assets/images/logo_sponsors/mouser.webp", import.meta.url)
      .href,
  },
  {
    name: "Universal Solder",
    link: "https://www.universal-solder.ca/",
    img: new URL(
      "../assets/images/logo_sponsors/universal-solder.webp",
      import.meta.url,
    ).href,
  },
  {
    name: "PCBWay",
    link: "https://www.pcbway.com/",
    img: new URL("../assets/images/logo_sponsors/pcbway.png", import.meta.url)
      .href,
  },
  {
    name: "Prusa Research",
    link: "https://www.prusa3d.com/",
    img: new URL("../assets/images/logo_sponsors/prusa.svg", import.meta.url)
      .href,
  },
  {
    name: "Skule SEF",
    link: "https://skule.ca/finances/SEF.html",
    img: new URL("../assets/images/logo_sponsors/skule.png", import.meta.url)
      .href,
  },
];

const past_sponsors = [
  {
    name: "3M Canada",
    img: "https://www.3mcanada.ca/3m_theme_assets/themes/3MTheme/assets/images/unicorn/Logo.svg",
  },
  {
    name: "Atmel",
    img: "https://www.microchip.com/en-us/about/corporate-overview/acquisitions/atmel/_jcr_content/root/responsivegrid/isolatedimage/image.coreimg.png/1716788933716/atmel.png",
  },
  {
    name: "Dremel DigiLab",
    img: "https://www.dremel.com/images/dremel_w340-png--16fe15ef3de449c0a6662896569f4483.png?imgWidth=680&imgHeight=222&scale=1",
  },
  {
    name: "FDM Group",
    img: "https://www.fdmgroup.com/wp-content/themes/fdm/assets/images/footer-logo.svg",
  },
  {
    name: "Google",
    img: "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
  },
  {
    name: "iRobot",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/13/IRobot_Green_logo.png",
  },
  {
    name: "Particle",
    img: "https://cdn.prod.website-files.com/62b0e6308cc691625470b227/63dbfb82fe48e34176e1e936_B8xN79zj_Cwlb9Nfs0wJwqzZomHTftu9efQK6mfo2wk.png",
  },
  {
    name: "Qualcomm",
    img: "https://cdn.cookielaw.org/logos/b0a5f2cc-0b29-4907-89bf-3f6b380a03c8/0814c8dd-07ff-41eb-a1b0-ee0294137c9a/9ca69c31-5e86-432d-950c-cfa7fcaa3cc8/1280px-Qualcomm-Logo.svg.png",
  },
  {
    name: "SolidWorks",
    img: "https://cdn.prod.website-files.com/619c5a34100fe677d0c61e04/67dc551670971682b3c7054d_SOLIDWORKS%20logo.png",
  },
  {
    name: "STMicroelectronics",
    img: "https://efp-data.s3.amazonaws.com/expos/aweusa2022/data/exhibitors/151134/media/stmicroelectronics.png",
  },
];

const sponsorCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function SponsorCard({ name, logo, companyUrl }) {
  return (
    <motion.div
      variants={sponsorCardVariants}
      className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 sm:p-8 h-36 sm:h-48 w-full hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[rgba(163,160,243,0.35)] transition-all duration-300"
    >
      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full flex items-center justify-center group"
      >
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </a>
    </motion.div>
  );
}

function ScrollingCarousel() {
  return (
    <div className="">
      <div className="scroll-container">
        <div className="scroll-content items-center space-x-8 sm:space-x-20">
          {[...past_sponsors, ...past_sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 h-24 w-36 sm:h-40 sm:w-60 flex items-center justify-center rounded-lg p-4 sm:p-6 shadow-sm"
            >
              <img
                src={sponsor.img}
                alt={`${sponsor.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <main className="relative min-h-[1200px] sm:min-h-[1525px]">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${bgGradient})`,
        }}
      />
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:pt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-[36px] sm:text-[50px] font-extrabold gradient-purple-blue [font-family:'ProximaNova',sans-serif] mb-3 sm:mb-4 text-center pt-4 sm:pt-8 leading-tight">
            Sponsors & Partners
          </h1>
          <p className="text-gray-300 text-center font-light leading-6 sm:leading-7 text-sm sm:text-base max-w-5xl mx-auto px-2 [font-family:'ProximaNova',sans-serif]">
            UTRA is supported by a strong network of educational and
            professional institutions, and individuals within the University of
            Toronto, but it also relies heavily on the generous corporate donors
            that make its work possible. In addition to immeasurable benefits
            gained by students, corporate sponsors are given the opportunity to
            collaborate with one of the leading universities in world, and have
            its title represented within the community and internationally.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-4 pb-8 sm:pb-16 relative z-10">
        <motion.div
          className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.07 },
            },
          }}
        >
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.name}
              name={sponsor.name}
              logo={sponsor.img}
              companyUrl={sponsor.link}
            />
          ))}
        </motion.div>
      </div>

      <hr className="h-[1px] mt-10 max-w-screen-2xl mx-auto border-0 bg-gradient-to-r from-transparent via-utra-gray to-transparent relative z-10" />
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <ScrollingCarousel />
      </div>
      <hr className="h-[1px] mb-0 max-w-screen-2xl mx-auto border-0 bg-gradient-to-r from-transparent via-utra-gray to-transparent relative z-10" />
      <div className="h-16 sm:h-0"></div>
    </main>
  );
}
