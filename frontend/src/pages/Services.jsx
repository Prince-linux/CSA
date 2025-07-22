import { useState } from "react";
// import serviceImg from "../assets/service.png";

const serviceSlides = [

  {
    title: "",
    tag: "Tailored Support - Ways of Doing Business",
    description: `- Personalized support for U.S. SMEs and African enterprises  
- Step-by-step guidance navigating "how to do business" in key markets  
- Policy alignment & local engagement strategies
- Public-Private Sector Engagement`,
  },
  {
    title: "",
    tag: "What We Deliver",
    description: `- Mutually beneficial partnerships for African & U.S. businesses  
- Identifying key industries for collaboration  
- Facilitating investment into African economies  
- U.S. market entry strategy for African enterprises  
- Cross-sectoral opportunities`,
  },
  {
    title: "",
    tag: "Research",
    description: `- Pre-feasibility studies & market research  
- Due diligence & risk assessment  
- Economic & cultural exchange insights  
- Legal frameworks & national security compliance  
- Dedicated analysts & proprietary data tools`,
  },
  {
    title: "",
    tag: "Our Expertise & Group Capabilities",
    description: `Strong government relationships in:  
- West Africa (Sub-Saharan)  
- East Africa & The Horn of Africa  
- Southern Africa  
- Central Africa  
- North Africa & The Sahel`,
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const current = serviceSlides[currentSlide - 1];

  const handlePrev = () => {
    if (currentSlide > 1) setCurrentSlide((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentSlide < serviceSlides.length)
      setCurrentSlide((prev) => prev + 1);
  };

  return (
    <div
      id="services"
      className="w-full bg-[#f7f7f7] py-20 px-6 md:px-24 overflow-x-clip"
    >
      <div className="space-y-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-start gap-4 md:gap-6 w-full">
          <div className="w-0.5 h-20 bg-[#c0463b] rounded-sm mt-1 block md:hidden"></div>
          <div>
            <h4 className="text-sm text-[#c0463b] uppercase tracking-wider mb-2">
              Services
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              What Can USATA Do for Me?
            </h2>
          </div>
          <div className="hidden md:block w-0.5 h-20 bg-[#c0463b] rounded-sm mt-1 ml-[275px]"></div>
        </div>

        {/* Desktop carousel */}
        <div className="relative hidden md:flex">
          {/* Image */}
          <div className="w-[785px] h-[509px] relative z-10">
            <img
              src={serviceImg}
              alt="Service"
              className="w-full h-full object-cover rounded-md shadow"
            />
          </div>

          {/* Slide Content Box */}
          <div className="absolute top-1/2 left-[480px] z-20 translate-y-[-50%] bg-white p-8 shadow-xl w-[600px] h-[380px] rounded-md flex flex-col justify-between border border-gray-200">
            <div>
              <h5 className="text-xs text-[#c0463b] font-semibold uppercase mb-2 tracking-wider">
                {current.tag}
              </h5>
              <h4 className="text-xl font-bold mb-3 leading-tight">
                {current.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {current.description}
              </p>
            </div>

            {/* Buttons in bottom right */}
            <div className="flex justify-end items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className={`w-10 h-10 flex items-center justify-center rounded-full border text-base font-bold transition duration-200 ${
                  currentSlide > 1
                    ? "border-[#c0463b] text-[#c0463b] hover:bg-[#c0463b] hover:text-white"
                    : "border-gray-300 text-gray-400 cursor-not-allowed"
                }`}
                disabled={currentSlide === 1}
              >
                &lt;
              </button>

              <span className="text-sm text-gray-700">
                {currentSlide} / {serviceSlides.length}
              </span>

              <button
                onClick={handleNext}
                className={`w-10 h-10 flex items-center justify-center rounded-full border text-base font-bold transition duration-200 ${
                  currentSlide < serviceSlides.length
                    ? "border-[#c0463b] text-[#c0463b] hover:bg-[#c0463b] hover:text-white"
                    : "border-gray-300 text-gray-400 cursor-not-allowed"
                }`}
                disabled={currentSlide === serviceSlides.length}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="block md:hidden space-y-6">
          <img
            src={serviceImg}
            alt="Service"
            className="w-full h-auto rounded-md shadow"
          />

          <div className="bg-white p-6 rounded-md shadow border border-gray-200 flex flex-col justify-between">
            <div>
              <h5 className="text-xs text-[#c0463b] font-semibold uppercase mb-2 tracking-wider">
                {current.tag}
              </h5>
              <h4 className="text-lg font-bold mb-3 leading-tight">
                {current.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {current.description}
              </p>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className={`w-10 h-10 flex items-center justify-center rounded-full border text-base font-bold transition duration-200 ${
                  currentSlide > 1
                    ? "border-[#c0463b] text-[#c0463b] hover:bg-[#c0463b] hover:text-white"
                    : "border-gray-300 text-gray-400 cursor-not-allowed"
                }`}
                disabled={currentSlide === 1}
              >
                &lt;
              </button>

              <span className="text-sm text-gray-700">
                {currentSlide} / {serviceSlides.length}
              </span>

              <button
                onClick={handleNext}
                className={`w-10 h-10 flex items-center justify-center rounded-full border text-base font-bold transition duration-200 ${
                  currentSlide < serviceSlides.length
                    ? "border-[#c0463b] text-[#c0463b] hover:bg-[#c0463b] hover:text-white"
                    : "border-gray-300 text-gray-400 cursor-not-allowed"
                }`}
                disabled={currentSlide === serviceSlides.length}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
