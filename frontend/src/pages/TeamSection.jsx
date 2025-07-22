import { Link } from "react-router-dom";
// import teamBg from "../assets/team-bg.png";
// import boardIcon from "../assets/logo-green.png";
import teamMembers from './data/teamMembers';
import { routes } from "../helpers/routes";

const TeamSection = () => {
  return (
    <div id="board" className="w-full bg-[#f7f7f7]">
      {/* Header Banner */}
      <div
        className="w-full bg-cover bg-center h-[400px] relative"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="text-center absolute inset-0 flex flex-col justify-start items-center pt-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src={boardIcon}
              alt="Board Icon"
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-[#21b573] uppercase text-sm font-semibold tracking-wide">
              The Board
            </h3>
          </div>
          <h2 className="text-white text-4xl font-extrabold">
            Meet Our Professional Team
          </h2>
        </div>
      </div>

      {/* Grid Layout for Members */}
      <div className="relative z-10 -mt-40 px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <Link
              to={`${routes[12].path}${encodeURIComponent(member.id)}`}
              key={index}
              className="w-full max-w-[280px] flex flex-col items-center"
            >
              <div className="w-full h-[320px] overflow-hidden rounded-t-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="w-full bg-white text-center px-4 py-10 -mt-10 z-10 shadow-lg"
                style={{
                  clipPath: "polygon(0 0%, 100% 20%, 100% 100%, 0% 100%)",
                }}
              >
                <h4 className="text-base font-bold uppercase text-black">
                  {member.name}
                </h4>
                <p className="text-sm text-[#c0463b] font-medium mt-1">
                  {member.position}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
