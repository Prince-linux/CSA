import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import heroBG from "../assets/african-port2.jpg";
import teamMembers from "./data/teamMembers";

const TeamMemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const memberRefs = useRef({});

  useEffect(() => {
    const memberId = parseInt(id);
    const el = memberRefs.current[memberId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [id]);

  return (
    <div className="relative">
      <Navbar />

      <div
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "0%",
        }}
        className="w-full h-[60vh] pt-24 relative"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 transition-opacity duration-1000"></div>
        <Hero />
      </div>

      <div className="w-full text-center mt-10 px-4">
        <h2 className="text-black text-3xl sm:text-4xl font-extrabold">
          Meet Our Professional Team
        </h2>
      </div>

      <div className="w-full flex justify-center mt-6">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/team");
            }
          }}
          className="bg-[#21b573] hover:bg-[#1da262] text-white font-medium px-6 py-2 rounded-md transition duration-200 text-sm sm:text-base"
        >
          ← Back to Team
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 mb-50">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            ref={(el) => (memberRefs.current[member.id] = el)}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start scroll-mt-24"
          >
            <div>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {member.name}
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#c0463b] mb-4">
                {member.position}
              </p>
               <div className="text-gray-700 text-base leading-normal break-words whitespace-normal">
              {member.description}
            </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TeamMemberDetail;
