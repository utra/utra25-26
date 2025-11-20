import bgGradient from "../../assets/images/graphics/background_gradient.png";
import combatphoto from "../../assets/images/subteams/combat/annie.jpg";

export default function CombatPage() {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-[2000px] h-screen">
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

      <div className="relative w-full h-[1800px] mt-[-20px] pt-[200px] flex flex-col items-center">
        <div
          className="absolute inset-0 bg-cover h-full fade-top pointer-events-none"
          style={{
            backgroundImage: `url(${bgGradient})`,
          }}
        />
      </div>
    </div>
  );
}
