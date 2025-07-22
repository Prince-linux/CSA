// src/components/GlobalPartners.js
// import logo1 from "../assets/food-and-drinks.jpeg";
// import logo2 from "../assets/wood-works.jpeg";
// import logo3 from "../assets/barbershop.jpeg";
// import logo4 from "../assets/jewelry.jpeg";
// import logo5 from "../assets/wine-house.jpeg";
// import logo6 from "../assets/design-studio.jpeg";
// import logo7 from "../assets/gmc-logo-off-white.png";
// import logo8 from "../assets/WTCP-Logo-off-white.png";

// const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const GlobalPartners = () => {
  return (
    <div className="bg-[#111] py-16 px-6">
      <h2 className="text-center text-white text-3xl font-extrabold mb-12">
        GLOBAL PARTNERS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {logos.map((logo, index) => (
          <img
            key={index}
            // src={logo}
            alt={`Partner ${index + 1}`}
            className="h-24 w-24 object-contain p-2  rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default GlobalPartners;
