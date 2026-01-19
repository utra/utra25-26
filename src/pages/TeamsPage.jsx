import { Link } from "react-router-dom";
import bgGradient from "../assets/images/graphics/background_gradient.png";
import utraArt from "../assets/images/photoshoot/utra_art.png";
import classroom from "../assets/images/robonars/Robonars Workshop.jpg";

// ==================== PAGE DATA ====================
const pageInfo = {
  title: "Our Teams",
  subtitle: "Find Your Place in Robotics",
  description: `UTRA is home to six specialized subteams, each offering unique opportunities to learn, build, and compete. Whether you're a complete beginner or an experienced engineer, there's a team for you. Join us and be part of building the future of robotics.`,
};

const teams = [
  {
    name: "SUMO",
    tagline: "Battle it out in the ring. Perfect for beginners.",
    path: "/teams/sumo",
    img: new URL(
      "../assets/images/subteams/sumo/teamPage Photos/good2.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "ART",
    tagline: "Autonomous rovers that explore, navigate and sense the world.",
    path: "/teams/art",
    img: new URL("../assets/images/subteams/art/Art robot.jpg", import.meta.url)
      .href,
  },
  {
    name: "Combat",
    tagline: "High power robots built for competitive clashes.",
    path: "/teams/combat",
    img: new URL("../assets/images/subteams/combat/annie.jpg", import.meta.url)
      .href,
  },
  {
    name: "RoboSoccer",
    tagline: "Humanoid robots that compete in real world soccer games.",
    path: "/teams/robosoccer",
    img: new URL(
      "../assets/images/subteams/robosoccer/robosoccerRobot.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "6IX-PAC",
    tagline: "Pac-Man inspired robots built for maze navigation.",
    path: "/teams/6ixpac",
    img: new URL(
      "../assets/images/subteams/6ix-pac/pacbot.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "Robonars",
    tagline: "Technical workshops and seminar speaker series.",
    path: "/teams/robonars",
    img: new URL(
      "../assets/images/robonars/Robonars Workshop.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "Web",
    tagline: "Designing and maintaining UTRA's online presence.",
    path: "/teams/web",
    img: new URL("../assets/images/subteams/web/webicon.jpg", import.meta.url)
      .href,
  },
  {
    name: "Marketing",
    tagline: "Promoting UTRA's projects and events.",
    path: "/teams/marketing",
    img: new URL(
      "../assets/images/subteams/marketing/marketingicon.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "UTRAHacks",
    tagline: "Organizing UTRA Hacks and other events.",
    path: "https://hackathon.utra.ca/",
    img: new URL(
      "../assets/images/subteams/hackathon/hackathonicon.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "Outreach",
    tagline: "Connecting UTRA with the community.",
    path: "/teams/outreach",
    img: new URL(
      "../assets/images/subteams/outreach/IndustryRoundtable.jpg",
      import.meta.url,
    ).href,
  },
];

const carouselImages = [
  {
    name: "robosoccer1",
    img: new URL(
      "../assets/images/subteams/robosoccer/2022_3.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "team1",
    img: new URL(
      "../assets/images/photoshoot/exec_photoshoot.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat1",
    img: new URL(
      "../assets/images/subteams/combat/IMG_3306.jpeg",
      import.meta.url,
    ).href,
  },
  {
    name: "art1",
    img: new URL(
      "../assets/images/subteams/art/20230602_205628.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "robonars1",
    img: new URL(
      "../assets/images/robonars/Robonars Workshop.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "sumo1",
    img: new URL(
      "../assets/images/subteams/sumo/teamPage Photos/good2.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "pacbot1",
    img: new URL(
      "../assets/images/subteams/6ix-pac/IMG_3781.jpeg",
      import.meta.url,
    ).href,
  },
  {
    name: "team2",
    img: new URL("../assets/images/subteams/combat/combat.jpg", import.meta.url)
      .href,
  },
  {
    name: "robonars2",
    img: new URL("../assets/images/robonars/IMG_6649.jpeg", import.meta.url)
      .href,
  },
  {
    name: "team3",
    img: new URL("../assets/images/subteams/art/IMG_7084.jpg", import.meta.url)
      .href,
  },
  {
    name: "robosoccer2",
    img: new URL(
      "../assets/images/subteams/robosoccer/robosoccerRobot.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "team4",
    img: new URL(
      "../assets/images/subteams/sumo/teamPage Photos/IMG_6860.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "combat2",
    img: new URL("../assets/images/subteams/combat/Kludge.jpg", import.meta.url)
      .href,
  },
  {
    name: "pacbot2",
    img: new URL(
      "../assets/images/subteams/6ix-pac/pacbot.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "team5",
    img: new URL(
      "../assets/images/subteams/robosoccer/2018 robocup/DSC01735.JPG",
      import.meta.url,
    ).href,
  },
  {
    name: "art2",
    img: new URL("../assets/images/subteams/art/Art robot.jpg", import.meta.url)
      .href,
  },
  {
    name: "robonars3",
    img: new URL("../assets/images/robonars/IMG_7131.jpeg", import.meta.url)
      .href,
  },
  {
    name: "team6",
    img: new URL(
      "../assets/images/subteams/6ix-pac/20240425_220952.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "sumo2",
    img: new URL(
      "../assets/images/subteams/sumo/teamPage Photos/IMG_6843.jpg",
      import.meta.url,
    ).href,
  },
  {
    name: "team7",
    img: new URL("../assets/images/photoshoot/IMG28632.JPG", import.meta.url)
      .href,
  },
  {
    name: "team8",
    img: new URL(
      "../assets/images/subteams/combat/Cover Photo.jpg",
      import.meta.url,
    ).href,
  },
];

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
      const scrollAmount = 520;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-8">
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
        {carouselImages.map((card, index) => (
          <div
            key={`${card.name}-${index}`}
            className="group relative h-[250px] w-[400px] min-w-[400px] flex-shrink-0 overflow-hidden rounded-[15px] shadow-lg"
          >
            <div
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

function TeamCard({ name, tagline, path, img }) {
  const isExternal = path.startsWith("http");
  const Component = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href: path, target: "_blank", rel: "noopener noreferrer" }
    : { to: path };

  return (
    <Component {...linkProps} className="group">
      <div className="relative bg-black bg-opacity-40 rounded-xl w-[335px] h-[280px] flex flex-col items-center overflow-hidden transition-all duration-300 group-hover:bg-opacity-50 group-hover:scale-105">
        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
          <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue text-center">
            {name}
          </h3>
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[20px] w-[280px] text-center mt-2">
            {tagline}
          </p>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[#a3a0f3] [font-family:'ProximaNova',sans-serif] text-[16px] font-semibold">
              Learn More →
            </span>
          </div>
        </div>
      </div>
    </Component>
  );
}

export default function TeamsPage() {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[2400px]">
      {/* Hero Section - Title Screen */}
      <div className="relative w-full h-[85vh] flex flex-col items-start justify-center px-[200px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-70 fade-bottom"
          style={{
            backgroundImage: `url('${classroom}')`,
          }}
        />
        <div className="relative z-10 flex flex-col items-start">
          <h1 className="text-white [font-family:'Afacad',sans-serif] font-bold text-[120px] leading-none">
            {pageInfo.title}
          </h1>
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[32px] mt-4 ml-4">
            {pageInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Content Section - Below the fold */}
      <div className="relative h-[2200px] w-full pt-[100px] flex flex-col items-center">
        <div
          className="absolute inset-0 bg-cover h-full fade-top pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />

        <div className="relative z-10 w-[1100px]">
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] leading-[1.6] mb-[60px] text-center">
            {pageInfo.description}
          </p>

          <h2 className="text-gray-100 [font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[30px] text-center">
            Explore Our Teams
          </h2>

          <div className="flex flex-wrap justify-center gap-[30px]">
            {teams.map((team) => (
              <TeamCard
                key={team.name}
                name={team.name}
                tagline={team.tagline}
                path={team.path}
                img={team.img}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full mt-[100px]">
          <h2 className="text-gray-100 [font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[10px] text-center">
            Our Community
          </h2>
          <div className="max-w-[1400px] mx-auto">
            <HorizontalScrollCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
