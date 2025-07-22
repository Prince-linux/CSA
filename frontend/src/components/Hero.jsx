import csaImage from '../assets/csa.jpg';

const Hero = () => {
  return (
    <div
      className="w-full h-[100vh] bg-no-repeat bg-top bg-cover relative pt-24"
      style={{ backgroundImage: `url(${csaImage})` }}
    >
      {/* Remove the dimming overlay by commenting or deleting the dark layer */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div> */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="mt-20 md:mt-90">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Creative Studio Academy</h1>
          <p className="max-w-2xl text-sm md:text-lg leading-relaxed">
            Inspiring the next generation of creatives through community, learning, and professional growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;


