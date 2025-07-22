import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// import about1 from '../assets/about1.jpg';
// import about2 from '../assets/about2.png';
// import about3 from '../assets/about3.png';
// import about4 from '../assets/about4.jpg';
// import about5 from '../assets/about5.jpg';

const AboutUs = () => {
  return (
    <div id='about' className="w-full bg-[#f7f7f7] py-20 px-6 md:px-24">
  <div className="max-w-7xl mx-auto">
    <div className="md:flex md:gap-12">
      
      {/* Left Text Column */}
      <div className="md:max-w-xl md:flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-0.5 h-20 bg-[#c0463b] rounded-sm"></div>
          <h4 className="text-sm text-[#c0463b] uppercase tracking-wider">
            About Us
          </h4>
        </div>

        <h2 className="text-4xl font-extrabold leading-snug mb-3">
          Bridging Trade Between the U.S. & Africa
        </h2>

        <p className="text-gray-700 italic mb-5 text-sm">
          Usata is committed to fostering impactful trade and investment partnerships between the United States and Africa.
        </p>

        <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
          We work to empower communities, support inclusive economic growth, and drive sustainable development across both regions. 
          Whether you're exploring opportunities, seeking collaboration, or looking to stay informed — we're here to help you navigate 
          the future of US–Africa trade.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Unlock Africa’s Opportunity with USATA
        </h3>
        <p className="text-lg text-[#c0463b] font-semibold mb-4">
          Invest. Connect. Transform.
        </p>

        <p className="text-gray-600 text-[15px] mb-4 leading-relaxed">
          The U.S. African Trade Alliance (USATA) empowers U.S. SMEs to access high-growth markets across Africa by facilitating strategic investment matchmaking and unlocking cross-sectoral opportunities. As Africa undergoes a powerful wave of modernization with rapid growth in infrastructure, energy, digital technology, and sustainable development, USATA connects U.S. private sector innovation with African public sector needs.
        </p>
      </div>

      {/* Right Image Carousel */}
      <div className="flex justify-center md:shrink-0 mt-10 md:mt-0">
        <div className="md:w-[600px] lg:w-[720px] h-[625px] rounded-md shadow-md overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="w-full h-full"
          >
            {[about1, about2, about3, about4, about5].map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>

    {/* Horizontal Paragraphs Under the Carousel */}
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      <p className="text-gray-600 text-[15px] leading-relaxed">
        We help SMEs navigate the complexities of "doing business" in Africa through direct engagement, targeted trade and investment events, and hands-on ‘tailored and curated’ support. This includes guidance through the World Bank procurement process via upcoming webinars hosted by USATA in partnership with the World Trade Center of Philadelphia with invited guest speakers from the World Bank. The webinar series is designed to build readiness for public-private partnerships.
      </p>

      <p className="text-gray-600 text-[15px] leading-relaxed">
        Launching in October, our Trade & Investment Matchmaking Series will create a pipeline for potential deals between African governments and U.S. businesses across Finance & Capital Markets, Energy & Infrastructure Development, Technology & Artificial Intelligence, Critical Minerals & Mining, and beyond. With Africa’s youthful population and expanding digital economy, the continent offers unmatched potential for scalable, impact-driven growth.
      </p>

      <p className="text-gray-600 text-[15px] leading-relaxed">
        USATA stands ready to help SMEs seize this moment by unlocking growth, driving modernization, and delivering sustainable investment returns in one of the world’s fastest-growing regions.
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutUs;


