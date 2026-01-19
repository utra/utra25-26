import bgGradient from "../../assets/images/graphics/background_gradient.png";

// ==================== SUBTEAM-SPECIFIC DATA ====================
// Modify the values below to customize for each subteam

const teamName = "Marketing";

const teamTagline = "Promoting UTRA's projects, events, and initiatives.";

const heroImage = new URL(
  "../../assets/images/subteams/marketing/marketing_b1.jpg",
  import.meta.url,
).href;

const aboutTitle = "About Marketing";

const aboutDescription = `The Marketing Team at UTRA is responsible for promoting and showcasing the club through various channels. The team manages UTRA's social media and designs graphical material to spread the word about UTRA's activities, events, and more. By supporting the numerous subteams at UTRA, the team maintains brand identity and presence in the robotics community.`;

const featureImage = new URL(
  "../../assets/images/subteams/marketing/marketingicon.jpg",
  import.meta.url,
).href;

const skills = [
  "Graphic Design",
  "Communication",
  "Teamwork/Collaboration",
  "Creativity and Attention-to-Detail",
];

const team_leadership = [
  {
    name: "Sarah Hira",
    role: "Director",
    bio: "Bioinformatics + Chemistry, A&S 2T7",
    img: new URL(
      "../../assets/images/logo/utraLogoWhiteMobile.png",
      import.meta.url,
    ).href,
    linkedin: "",
  },
  {
    name: "Maggie Zhao",
    role: "Director",
    bio: "CIV 2T7",
    img: "https://drive.google.com/thumbnail?id=1B_f-D5xagnXBNoxREY_yuJB0A6oMFSpZ",
    linkedin: "",
  },
  {
    name: "Sabaa Rashid",
    role: "Associate",
    bio: "EngSci 2T9 + PEY",
    img: "https://drive.google.com/thumbnail?id=1l7SO-uzHV9hh1FYZ4uIXKKOU2Q4YnRRr",
    linkedin: "https://www.linkedin.com/in/sabaa-a-rashid/",
  },
  {
    name: "Jalilya Zhaxybayeva",
    role: "Associate",
    bio: "MECH 2T8",
    img: "https://lh3.googleusercontent.com/d/1vIj3kgqI5UwEoWxREWLyabYqanuqSvXD=s220?authuser=0",
    linkedin: "https://www.linkedin.com/in/jalilya-zhaxybayeva-269089348",
  },
];

export default function MarketingPage() {
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
        <p className="[font-family:'ProximaNova',sans-serif] text-[18spx] text-[#a3a0f3] font-semibold uppercase tracking-wider">
          {role}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[1825px] h-screen">
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

      <div className="relative w-full h-[1625px] mt-[-20px] pt-[230px] flex flex-col items-center">
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
            {/* <h2
              className="[font-family:'ProximaNova',sans-serif] font-bold text-[55px] mb-[10px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(112deg, #f5d9ff 0%, #b8e0ff 99%)",
              }}
            > */}
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

        <div className="relative flex flex-col justify-center items-center pt-[100px] w-full">
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
        </div>
      </div>
    </div>
  );
}
