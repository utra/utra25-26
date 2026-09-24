import bgGradient from "../../assets/images/graphics/background_gradient.png";

// ==================== SUBTEAM-SPECIFIC DATA ====================
// Modify the values below to customize for each subteam

const teamName = "Research and Development";

const teamTagline = "Exploring new and emerging areas of robotics research.";

const heroImage = new URL(
  "../../assets/images/subteams/researchanddevelopment/RandDheader.jpg",
  import.meta.url,
).href;

const aboutTitle = "About R&D";

const aboutDescription = "The Research and Development team explores new and emerging areas of robotics research alongside professors. Students get hands-on experience designing, building and testing new technologies, and develop the technical skills to contribute to projects at the forefront of the field";

const featureImage = new URL(
  "../../assets/images/subteams/researchanddevelopment/RandDfeature.jpg",
  import.meta.url,
).href;

const skills = [
  "Computer Vision & Tracking",
  "VR & Teleoperation",
  "Data Analytics & ML",
];

const projects = [
  {
    title: "Three-arm Teleoperated Robotic System VR Interface",
    description:
      "Control three Franka robotic arms through VR for surgery-inspired tasks using motion mapping and inverse kinematics.",
    lead: {
      name: "Professor Kahrs",
      role: "",
      bio: "",
      img: new URL(
        "../../assets/images/headshots/ProfKahrs.png",
        import.meta.url,
      ).href,
      linkedin: "",
    },
  },
  {
    title: "Computer Vision-based Rover Tracking and Analytics System",
    description:
      "Track and analyze rover performance in real time using computer vision, data collection, and analytics.",
    lead: {
      name: "Professor Colic",
      role: "",
      bio: "",
      img: new URL(
        "../../assets/images/headshots/ProfColic.png",
        import.meta.url,
      ).href,
      linkedin: "",
    },
  },
];

export default function ResearchandDevelopmentPage() {
  function SkillTag({ skill }) {
    return (
      <div className="flex flex-row items-center transition-transform duration-300 hover:translate-x-1.5">
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

  function TeamMemberCard({ name, role, bio, img, linkedin }) {
    return (
      <div className="flex flex-col items-center">
        <a
          href={linkedin || undefined}
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

  function ProjectColumn({ title, description, lead }) {
    return (
      <div className="w-full max-w-[600px] flex flex-col">
        <h3 className="[font-family:'ProximaNova',sans-serif] font-bold text-[24px] sm:text-[28px] md:text-[32px] mb-[10px] text-white leading-[1.2]">
          {title}
        </h3>
        <p className="text-white [font-family:'ProximaNova',sans-serif] text-[16px] sm:text-[20px] md:text-[23px] leading-[1.5]">
          {description}
        </p>
        <div className="mt-auto pt-[30px] sm:pt-[40px]">
          <TeamMemberCard {...lead} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)]">
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
          <div className="animate-hero justify-center h-auto sm:h-[150px] w-full md:w-[600px]">
            <h1 className="text-white [font-family:'Afacad',sans-serif] font-bold text-[56px] sm:text-[80px] md:text-[100px] leading-[0.95]">
              {teamName}
            </h1>
            <p className="text-white [font-family:'ProximaNova',sans-serif] pt-[30px] sm:pt-[20px] text-[18px] sm:text-[24px]">
              {teamTagline}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-[-20px] pt-[40px] sm:pt-[230px] pb-[60px] sm:pb-[120px] flex flex-col items-center">
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
              className="w-full h-full object-cover rounded-[10px] drop-shadow-[1px_1px_4px_rgba(191,197,255,0.3)] transition-transform duration-500 ease-out hover:scale-[1.02]"
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
                className="w-full h-full object-cover rounded-[10px] drop-shadow-[1px_1px_4px_rgba(191,197,255,0.3)] transition-transform duration-500 ease-out hover:scale-[1.02]"
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

        <div className="relative flex flex-col items-center pt-[60px] sm:pt-[130px] w-full px-6 sm:px-12 md:px-0">
          <h2 className="[font-family:'ProximaNova',sans-serif] font-bold text-[32px] sm:text-[42px] md:text-[50px] mb-[20px] sm:mb-[30px] text-white">
            Current Projects
          </h2>

          <div className="flex flex-col md:flex-row md:items-stretch justify-center gap-[50px] sm:gap-[60px] md:gap-[125px]">
            {projects.map((project) => (
              <ProjectColumn
                key={project.title}
                title={project.title}
                description={project.description}
                lead={project.lead}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
