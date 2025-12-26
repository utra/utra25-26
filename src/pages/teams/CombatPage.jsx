import bgGradient from "../../assets/images/graphics/background_gradient.png";
import combatphoto from "../../assets/images/subteams/combat/annie.jpg";
import artphoto from "../../assets/images/subteams/art/art_sunset.jpg";

export const skills = {
  MECHANICAL_ENGINEERING: "Mechanical Engineering",
  POWER_ELECTRONICS: "Power Electronics",
  CONTROL_SYSTEMS: "Control Systems",
};

export const highlights = [
  {
    title: "Robobrawl Success",
    description:
      "Annie the Annihilator placed 7th internationally at UIUC Robobrawl 2019.",
  },
  {
    title: "Global Experience",
    description:
      "A veteran team competing at RoboGames, the world's largest robotics event.",
  },
  {
    title: "Rapid Expansion",
    description:
      "Surging membership led to the launch of a second dedicated combat squad.",
  },
];

export const team_images = [
  {
    name: "combat1",
    img: new URL(
      "../../assets/images/subteams/combat/annie.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat3",
    img: new URL(
      "../../assets/images/subteams/combat/combat.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat4",
    img: new URL(
      "../../assets/images/subteams/combat/Cover Photo.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat5",
    img: new URL(
      "../../assets/images/subteams/combat/Kludge.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat6",
    img: new URL(
      "../../assets/images/subteams/combat/yellowmouse.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat1",
    img: new URL(
      "../../assets/images/subteams/combat/annie.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat3",
    img: new URL(
      "../../assets/images/subteams/combat/combat.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat4",
    img: new URL(
      "../../assets/images/subteams/combat/Cover Photo.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat5",
    img: new URL(
      "../../assets/images/subteams/combat/Kludge.jpg",
      import.meta.url
    ).href,
  },
  {
    name: "combat6",
    img: new URL(
      "../../assets/images/subteams/combat/yellowmouse.jpg",
      import.meta.url
    ).href,
  },
  // Add more images here without importing them individually
];

export const team_leadership = [
  {
    name: "Jane Doe",
    role: "Combat PM",
    bio: "ECE 2T8",
    img: "https://headshots-inc.com/wp-content/uploads/2021/04/linkedin-Headshots.png",
  },
  {
    name: "Jane Doe",
    role: "Combat PM",
    bio: "ECE 2T8",
    img: "https://headshots-inc.com/wp-content/uploads/2021/04/linkedin-Headshots.png",
  },
  {
    name: "Jane Doe",
    role: "Combat PM",
    bio: "ECE 2T8",
    img: "https://headshots-inc.com/wp-content/uploads/2021/04/linkedin-Headshots.png",
  },
  {
    name: "Jane Doe",
    role: "Combat PM",
    bio: "ECE 2T8",
    img: "https://headshots-inc.com/wp-content/uploads/2021/04/linkedin-Headshots.png",
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
      const scrollAmount = 520; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-8">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-2 top-[calc(50%-8px)] -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-200 ${
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
          className="w-6 h-6"
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
        className={`absolute right-2 top-[calc(50%-8px)] -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-200 ${
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
          className="w-6 h-6"
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
        className="flex gap-8 overflow-x-scroll overflow-y-hidden pb-4 px-12 scrollbar-hide"
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
    <div className="group relative h-[250px] w-[400px] min-w-[400px] flex-shrink-0 overflow-hidden rounded-[15px] shadow-lg">
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
          className="w-[335px] h-[35px] flex items-center rounded-r-[5px] relative overflow-hidden"
          style={{ background: "rgba(156, 163, 175, 0.3)" }}
        >
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] font-semibold ml-[10px] relative z-10">
            {skill}
          </p>
        </div>
      </div>
    );
  }

  function HighlightCard({ title, description }) {
    return (
      <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[370px] flex items-center text-center flex-col">
        <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[30px] gradient-purple-blue">
          {title}
        </h3>
        <p className="text-white [font-family:'ProximaNova',sans-serif] text-[22px] w-[340px]">
          {description}
        </p>
      </div>
    );
  }

  function TeamMemberCard({ name, role, img, bio }) {
    return (
      <div className="bg-black bg-opacity-40 rounded-xl w-[300px] flex flex-col items-center p-4">
        <img
          src={img}
          alt={`${name} photo`}
          className="w-[250px] h-[250px] object-cover rounded-full mb-4"
        />
        <h3 className="[font-family:'ProximaNova',sans-serif] font-bold text-[24px] text-gray-100">
          {role}
        </h3>
        <p className="text-gray-300 [font-family:'ProximaNova',sans-serif] text-[18px] mb-2">
          {name}
        </p>
        <p className="text-gray-300 [font-family:'ProximaNova',sans-serif] text-[16px] text-center">
          {bio}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[2600px] h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-90 fade-bottom max-h-[600px]"
        style={{
          backgroundImage: `url('${combatphoto}')`,
          backgroundPosition: "center 15%",
        }}
      />

      <div className="relative flex flex-col pt-[150px] w-full px-[350px]">
        <div className="justify-center h-[150px] w-[600px]">
          <h1 className="text-white [font-family:'Afacad',sans-serif] font-bold text-[100px]">
            Combat
          </h1>
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px]">
            {" "}
            High power robots built for competitive clashes.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[2400px] mt-[-20px] pt-[230px] flex flex-col items-center">
        <div
          className="absolute inset-0 bg-cover h-full fade-top pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />

        <div className="relative flex flex-row items-center justify-center pt-[100px] gap-[125px]">
          <div className="w-[600px] h-[500px]">
            <img
              src={artphoto}
              className="w-full h-full object-cover rounded-[10px] drop-shadow-[1px_1px_4px_rgba(191,197,255,0.3)]"
              alt=""
            />
          </div>

          <div className="w-[600px]">
            {/* <h2
              className="[font-family:'ProximaNova',sans-serif] font-bold text-[55px] mb-[10px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(112deg, #f5d9ff 0%, #b8e0ff 99%)",
              }}
            > */}
            <h2 className="[font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[10px] text-white">
              About Combat
            </h2>
            <p className="text-white [font-family:'ProximaNova',sans-serif] text-[23px] leading-[1.5]">
              Combat robotics challenges students to design, build, and pilot
              remote-controlled machines—ranging from under a pound to over 200
              lbs—with the sole purpose of neutralizing opponents. Through
              prototyping specialized weaponry and robust chassis, team members
              gain hands-on experience in mechanical design, electronics, and
              advanced manufacturing.
            </p>

            <div className="mt-[25px] flex flex-col gap-[20px]">
              {Object.values(skills).map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center pt-[130px]">
          {/* <h2 className="gradient-purple-blue [font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[10px]"> */}
          <h2 className="text-gray-100 [font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[10px]">
            Highlights
          </h2>

          <div className="relative flex flex-row justify-between gap-[50px] mt-[15px]">
            {highlights.map((highlight) => (
              <HighlightCard
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-[30px]">
          <HorizontalScrollCarousel />
        </div>

        <div className="relative flex flex-col justify-center items-center pt-[100px] w-full">
          <h2 className="text-gray-200 [font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[10px]">
            Team Leadership
          </h2>
          <div className="flex flex-row gap-[50px] overflow-x-auto scrollbar-hide px-4 py-2">
            {team_leadership.map((leader) => (
              <TeamMemberCard
                key={leader.name}
                name={leader.name}
                role={leader.role}
                img={leader.img}
                bio={leader.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
