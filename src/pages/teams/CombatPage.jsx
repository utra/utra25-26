import bgGradient from "../../assets/images/graphics/background_gradient.png";
import combatphoto from "../../assets/images/subteams/combat/annie.jpg";

export default function CombatPage() {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 max-h-[700px] bg-[linear-gradient(180deg,rgba(170,165,190,1)_0%,rgba(190,185,210,1)_20%,rgba(175,170,200,1)_34%,rgba(145,150,200,1)_98%)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-90"
          style={{
            backgroundImage: `url('${combatphoto}')`,
            backgroundPosition: "center 20%",
          }}
        />
      </div>

      <div className="">
        <div
          className="absolute top-[700px] left-0 right-0 bottom-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <div className="relative top-[150px] h-[300px] w-[700px] bg-[rgba(60,60,60,0.52)] rounded-3xl flex items-center">
            {/* Foreground "Combat" text in Afacad font - stacked on top */}
            <p className="text-white [font-family:'Afacad',sans-serif] font-bold text-[100px] relative z-10 left-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Combat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
