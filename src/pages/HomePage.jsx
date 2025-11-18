import bgGradient from "../assets/images/graphics/background_gradient.png";
import utraLogo from "../assets/images/logo/utraLogoWhiteBlueAccent.png";
import photoshoot from "../assets/images/photoshoot/IMG28632.JPG";
import utraArt from "../assets/images/photoshoot/utra_art.png";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[3000px] h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-60 fade-bottom"
        style={{
          backgroundImage: `url('${utraArt}')`,
        }}
      />

      <div className="relative flex flex-col items-center">
        <img
          src={utraLogo}
          className="w-[250px] mt-[102px] filter drop-shadow-[4px_4px_10px_rgba(191,197,255,0.3)]"
          alt="Utra logo"
        />
        <h1 className="text-white [font-family:'Afacad',sans-serif] font-bold mt-[20px] text-[80px] w-[853px] text-center leading-[75px]">
          University of Toronto Robotics Association
        </h1>
        <p className="[font-family:'BeautySalon',sans-serif] text-[80px] mt-[20px] px-1 gradient-purple-lightblue">
          Design. Build. Inspire.
        </p>
      </div>

      <div className="mt-[28rem] flex gap-[55px] items-center">
        <div>
          <h2 className="gradient-purple-blue [font-family:'ProximaNova',sans-serif] font-extrabold text-[150px] leading-none">
            UTRA
          </h2>
          <p className="text-white [font-family:'ProximaNova',sans-serif] w-[435px] text-[28px] leading-[1.3]">
            Established in 2004, the University of Toronto Robotics Association
            is the premier robotics student group at the University of Toronto.
            Here at UTRA, we innovate the future of robotics.
          </p>
        </div>
        <div>
          <img
            src={photoshoot}
            alt="UTRA photoshoot"
            className="rounded-[10px] w-[538px] shadow-[0px_10px_20px_-10px_rgba(255,255,255,0.25)]"
          />
        </div>
      </div>

      <div className="relative w-full h-[1800px] mt-[-20px] pt-[200px] flex flex-col items-center h-[1280px]">
        <div
          className="absolute inset-0 bg-cover h-full fade-top pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />

        <div className="relative z-10 w-[1040px]">
          <h1 className="text-white text-[70px] [font-family:'ProximaNova',sans-serif] font-extrabold">
            Achivements
          </h1>
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[28px]">
            UTRA actively participates in competitions worldwide, achieving
            excellence on the global stage.
          </p>

          <div className="mt-6 flex justify-between">
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue">
                Top 5 Finish
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[262px]">
                UIUC iRobotics Pacbot Compeititon 2024, Illinois, United States
              </p>
            </div>
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue-reversed">
                5th in Design
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[280px]">
                Intelligent Ground Vehicle Competition (IGVC) 2024, Michigan,
                United States
              </p>
            </div>
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue">
                4th Place
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[262px]">
                University of Bordeaux RoboCup 2023, Bordeaux, France
              </p>
            </div>
          </div>

          <h1 className="mt-[130px] text-white text-[70px] [font-family:'ProximaNova',sans-serif] font-extrabold">
            Our Teams
          </h1>
          <p className="text-white [font-family:'ProximaNova',sans-serif] text-[28px]">
            UTRA has 5 different subteams for all experience levels.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue">
                SUMO
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[262px]">
                Build a compact bot and battle it out in the ring. Perfect for
                beginners.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue-reversed">
                Combat
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[290px]">
                High speed & high power robots built for competitive clashes.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue">
                ART
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[262px]">
                Rovers that navigate, sense, and explore, fully autonomous.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue">
                RoboSoccer
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[262px]">
                Humanoid robots playing fast-paced, fully autonomous soccer.
              </p>
            </div>
            <div className="bg-black bg-opacity-40 py-4 rounded-xl w-[335px] flex items-center text-center flex-col">
              <h3 className="[font-family:'ProximaNova',sans-serif] font-extrabold text-[40px] gradient-purple-blue-reversed">
                6IX-PAC
              </h3>
              <p className="text-white [font-family:'ProximaNova',sans-serif] text-[24px] w-[300px]">
                Pac-Man inspired robots built for quick, autonomous
                maze-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
