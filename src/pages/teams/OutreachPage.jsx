import bgGradient from "../../assets/images/graphics/background_gradient.png";

// ==================== SUBTEAM-SPECIFIC DATA ====================
// Modify the values below to customize for each subteam

const teamName = "Outreach";

const teamTagline = "Connecting UTRA with the community and industry.";

const heroImage = new URL(
  "../../assets/images/subteams/hackathon/hackathon_banner.JPG",
  import.meta.url,
).href;

const aboutTitle = "About Outreach";

const aboutDescription = `The Outreach team at UTRA connects our team with the wider community and industry. We are responsible for securing sponsorships, building and maintaining relationships with partners, and promoting UTRA to the public. Through outreach events and media presence, we share our passion for engineering while expanding awareness of our mission. By fostering strong partnerships and meaningful engagement, the Outreach team plays a key role in supporting UTRA's growth and impact.`;

const featureImage = new URL(
  "../../assets/images/subteams/outreach/150thAnniversaryOpenHouse.jpeg",
  import.meta.url,
).href;

const skills = [
  "Sponsorship & Fundraising",
  "Relationship Building",
  "Public Speaking",
  "Event Coordination",
];

const team_leadership = [
  {
    name: "Jane Doe",
    role: "Outreach Lead",
    bio: "ECE 2T8",
    img: new URL(
      "../../assets/images/logo/utraLogoWhiteMobile.png",
      import.meta.url,
    ).href,
    linkedin: "",
  },
];

export default function OutreachPage() {
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

  function TeamMemberCard({ name, role, bio, img, linkedin }) {
    return (
      <div className="flex flex-col items-center">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer"
        >
          <div className="w-[220px] h-[220px] rounded-full p-[5px] bg-gradient-to-br from-[#7c78b8] to-[#a3a0f3] group-hover:from-[#9490d4] group-hover:to-[#b8b5ff] transition-all duration-300">
            <img
              src={img}
              alt={`${name} photo`}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
        <h3 className="[font-family:'ProximaNova',sans-serif] font-bold text-[26px] text-white mt-5">
          {name}
        </h3>
        <p className="[font-family:'ProximaNova',sans-serif] text-[16px] text-gray-300">
          {bio}
        </p>
        <p className="[font-family:'ProximaNova',sans-serif] text-[18px] text-[#a3a0f3] font-semibold uppercase tracking-wider">
          {role}
        </p>
      </div>
    );
  }

  return (
    // <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[1850px] h-screen">
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[1350px] h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-90 fade-bottom max-h-[600px]"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundPosition: "center 15%",
        }}
      />

      <div className="relative flex flex-col pt-[150px] w-full px-[350px]">
        <div className="justify-center h-[150px] w-[1000px]">
          <h1 className="text-white [font-family:'Afacad',sans-serif] font-bold text-[100px]">
            {teamName}
          </h1>
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px]">
            {teamTagline}
          </p>
        </div>
      </div>

      {/* <div className="relative w-full h-[1650px] mt-[-20px] pt-[230px] flex flex-col items-center"> */}
      <div className="relative w-full h-[1150px] mt-[-20px] pt-[230px] flex flex-col items-center">
        <div
          className="absolute inset-0 bg-cover h-full fade-top pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />

        <div className="relative flex flex-row items-center justify-center pt-[100px] gap-[125px]">
          <div className="w-[600px] h-[570px]">
            <img
              src={featureImage}
              className="w-full h-full object-cover rounded-[10px] drop-shadow-[1px_1px_4px_rgba(191,197,255,0.3)]"
              alt=""
            />
          </div>

          <div className="w-[600px]">
            <h2 className="[font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[10px] text-white">
              {aboutTitle}
            </h2>
            <p className="text-white [font-family:'ProximaNova',sans-serif] text-[23px] leading-[1.5]">
              {aboutDescription}
            </p>

            <div className="mt-[25px] flex flex-col gap-[20px]">
              {skills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="relative flex flex-col justify-center items-center pt-[100px] w-full">
          <h2 className="text-white [font-family:'ProximaNova',sans-serif] font-bold text-[50px] mb-[30px]">
            Team Leadership
          </h2>
          <div className="flex flex-row justify-center gap-[60px] py-2">
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
        </div> */}
      </div>
    </div>
  );
}
