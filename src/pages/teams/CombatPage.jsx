import bgGradient from "../../assets/images/graphics/background_gradient.png";

// ==================== SUBTEAM-SPECIFIC DATA ====================
// Modify the values below to customize for each subteam

const teamName = "Combat";

const teamTagline = "High power robots built for competitive clashes.";

const heroImage = new URL(
  "../../assets/images/subteams/combat/annie.jpg",
  import.meta.url,
).href;

const aboutTitle = "About Combat";

const aboutDescription = `Combat robotics challenges students to design, build, and pilot remote-controlled machines—ranging from under a pound to over 200 lbs—with the sole purpose of neutralizing opponents. Through prototyping specialized weaponry and robust chassis, team members gain hands-on experience in mechanical design, electronics, and advanced manufacturing.`;

const featureImage = new URL(
  "../../assets/images/subteams/combat/IMG_3306.jpeg",
  import.meta.url,
).href;

const skills = [
  "Mechanical Engineering",
  "Power Electronics",
  "Design for Manufacturing",
];

const highlights = [
  {
    title: "International Success",
    description:
      "Our 30lb robot Agent P placed 4th internationally at NHRL, the world's largest robot combat event. Our 3lb robots secured spots in the top 32 out of a field of over one hundred.",
  },
  {
    title: "Combat Opportunities",
    description:
      "We are currently running 6+ beetleweight (3lb) combat robots in our team, competing multiple times a year both domestically and abroad.",
  },
  {
    title: "A Varied Fleet",
    description:
      "Our robots all vary wildly in their designs, something which allows our members to build and work on whatever appeals to them the most.",
  },
];

const team_images = [
  {
    name: "combat1",
    img: new URL(
      "../../assets/images/subteams/combat/annie.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat2",
    img: new URL(
      "../../assets/images/subteams/combat/combat.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat3",
    img: new URL(
      "../../assets/images/subteams/combat/Cover Photo.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat4",
    img: new URL(
      "../../assets/images/subteams/combat/Kludge.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat5",
    img: new URL(
      "../../assets/images/subteams/combat/IMG_3321.jpeg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat6",
    img: new URL(
      "../../assets/images/subteams/combat/IMG_3348.jpeg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat7",
    img: new URL(
      "../../assets/images/subteams/combat/fight.png",
      import.meta.url,
    ).href,
  },
  {
    name: "combat8",
    img: new URL(
      "../../assets/images/subteams/combat/yellowmouse.jpg",
      import.meta.url,
    ).href,
  },
  // Add more images here without importing them individually
];

const team_leadership = [
  {
    name: "Indesh",
    role: "Project Manager",
    bio: "MECH 2T7 + PEY",
    img: new URL("../../assets/images/headshots/indesh.png", import.meta.url)
      .href,
    linkedin: "https://www.linkedin.com/in/indesh-vijayanand",
  },
];

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HorizontalScrollCarousel = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);
      return () =>
        scrollElement.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 520; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-4 sm:py-8">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-1 sm:left-2 top-[calc(50%-8px)] -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-3 transition-all duration-200 ${
          canScrollLeft ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
        disabled={!canScrollLeft}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-1 sm:right-2 top-[calc(50%-8px)] -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-3 transition-all duration-200 ${
          canScrollRight ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
        disabled={!canScrollRight}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-8 overflow-x-scroll overflow-y-hidden pb-4 px-8 sm:px-12 scrollbar-hide"
        style={{
          cursor: "grab",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        {team_images.map((card, index) => {
          return <Card card={card} key={`${card.name}-${index}`} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[180px] w-[260px] min-w-[260px] sm:h-[250px] sm:w-[400px] sm:min-w-[400px] flex-shrink-0 overflow-hidden rounded-[15px] shadow-lg">
      <div
        style={{
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

function ScrollingCarousel() {
  return (
    <div className="">
      <div className="scroll-container">
        <div className="scroll-content-fast items-center space-x-[20px]">
          {[...team_images, ...team_images].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 h-60 w-200 flex items-center justify-center p-6 shadow-sm"
            >
              <img
                src={sponsor.img}
                alt={`${sponsor.name} logo`}
                className="max-h-full max-w-full object-contain rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CombatPage() {
  function SkillTag({ skill }) {
    return (
      <div className="flex flex-row items-center">
        <div className="w-[15px] h-[33px] bg-[rgb(163,160,243)] rounded-l-[5px]"></div>
        <div
          className="w-full max-w-[335px] h-[35px] flex items-center rounded-r-[5px] relative overflow-hidden"
          style={{ background: "rgba(156, 163, 175, 0.3)" }}
        >
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[14px] sm:text-[16px] font-semibold ml-[10px] relative z-10">
            {skill}
          </p>
        </div>
      </div>
    );
  }

  function HighlightCard({ title, description }) {
    return (
      <div className="bg-black bg-opacity-40 py-4 rounded-xl w-full sm:w-[370px] flex items-center text-center flex-col">
        <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[24px] sm:text-[30px] gradient-purple-blue">
          {title}
        </h3>
        <p className="text-white [font-family:'ProximaNova',sans-serif] text-[18px] sm:text-[22px] w-[90%] sm:w-[340px]">
          {description}
        </p>
      </div>
    );
  }

  function TeamMemberCard({ name, role, bio, img, linkedin }) {
    return (
      <div className="flex flex-col items-center">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer"
        >
          <div className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] rounded-full p-[5px] bg-gradient-to-br from-[#7c78b8] to-[#a3a0f3] group-hover:from-[#9490d4] group-hover:to-[#b8b5ff] transition-all duration-300">
            <img
              src={img}
              alt={`${name} photo`}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
        <h3 className="[font-family:'ProximaNova',sans-serif] font-bold text-[22px] sm:text-[26px] text-white mt-5">
          {name}
        </h3>
        <p className="[font-family:'ProximaNova',sans-serif] text-[14px] sm:text-[16px] text-gray-300">
          {bio}
        </p>
        <p className="[font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[18px] text-[#a3a0f3] font-semibold uppercase tracking-wider">
          {role}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[2600px]">
      {/* Hero background image for desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-90 fade-bottom max-h-[600px]"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundPosition: "center 15%",
        }}
      />

      {/* Hero Section - full viewport on mobile */}
      <div className="relative w-full min-h-[calc(100vh-84px)] md:min-h-0 flex flex-col justify-center md:justify-start pb-[84px] md:pb-0">
        {/* Hero background image for mobile */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-90 fade-bottom"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundPosition: "center 15%",
          }}
        />

        <div className="relative flex flex-col pt-[50px] sm:pt-[80px] md:pt-[150px] w-full px-6 sm:px-12 md:px-[350px]">
          <div className="justify-center h-auto sm:h-[150px] w-full md:w-[600px]">
            <h1 className="text-white [font-family:'Afacad',sans-serif] font-bold text-[56px] sm:text-[80px] md:text-[100px] leading-[0.95]">
              {teamName}
            </h1>
            <p className="text-white [font-family:'ProximaNova',sans-serif] pt-[30px] sm:pt-[20px] text-[18px] sm:text-[24px]">
              {teamTagline}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-0 sm:min-h-[2400px] mt-[-20px] pt-[40px] sm:pt-[230px] pb-[40px] sm:pb-0 flex flex-col items-center">
        <div
          className="absolute inset-0 bg-cover h-full fade-top pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />

        <div className="relative flex flex-col md:flex-row items-center justify-center pt-[10px] sm:pt-[100px] gap-[40px] sm:gap-[60px] md:gap-[125px] px-6 sm:px-12 md:px-0">
          {/* Image: shown here on desktop (md+), hidden on mobile */}
          <div className="hidden md:block w-full max-w-[600px] h-[500px]">
            <img
              src={featureImage}
              className="w-full h-full object-cover rounded-[10px] drop-shadow-[1px_1px_4px_rgba(191,197,255,0.3)]"
              alt=""
            />
          </div>

          <div className="w-full max-w-[600px]">
            <h2 className="[font-family:'ProximaNova',sans-serif] font-bold text-[32px] sm:text-[42px] md:text-[50px] mb-[10px] text-white">
              {aboutTitle}
            </h2>
            <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[23px] leading-[1.5]">
              {aboutDescription}
            </p>

            {/* Image: shown here on mobile, hidden on desktop */}
            <div className="block md:hidden w-full max-w-[600px] h-[250px] sm:h-[400px] mt-[20px]">
              <img
                src={featureImage}
                className="w-full h-full object-cover rounded-[10px] drop-shadow-[1px_1px_4px_rgba(191,197,255,0.3)]"
                alt=""
              />
            </div>

            <div className="mt-[30px] sm:mt-[25px] flex flex-col gap-[15px] sm:gap-[20px]">
              {skills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center pt-[60px] sm:pt-[130px] px-6 sm:px-12 md:px-0">
          {/* <h2 className="gradient-purple-blue [font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[10px]"> */}
          <h2 className="text-gray-100 [font-family:'ProximaNova',sans-serif] font-bold text-[32px] sm:text-[42px] md:text-[50px] mb-[10px]">
            Highlights
          </h2>

          <div className="relative flex flex-col sm:flex-row justify-between gap-[20px] sm:gap-[30px] md:gap-[50px] mt-[15px] w-full sm:w-auto">
            {highlights.map((highlight) => (
              <HighlightCard
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto pt-[20px] sm:pt-[30px]">
          <HorizontalScrollCarousel />
        </div>

        <div className="relative flex flex-col justify-center items-center pt-[50px] sm:pt-[100px] w-full px-6 sm:px-0">
          <h2 className="text-white [font-family:'ProximaNova',sans-serif] font-bold text-[32px] sm:text-[42px] md:text-[50px] mb-[20px] sm:mb-[30px]">
            Team Leadership
          </h2>
          <div className="flex flex-wrap justify-center gap-[40px] sm:gap-[60px] py-2">
            {team_leadership.map((leader, index) => (
              <TeamMemberCard
                key={`${leader.name}-${index}`}
                name={leader.name}
                role={leader.role}
                bio={leader.bio}
                img={leader.img}
                linkedin={leader.linkedin}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
