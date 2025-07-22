import { IoMdCall } from "react-icons/io";
import { MdLocationOn, MdEmail } from "react-icons/md";
import csaLogo from "../assets/CSA-logo.png";
// import usataLogo2 from "../assets/logo2.png";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { routes } from "../helpers/routes";

const footerData = [
  {
    icon: IoMdCall,
    title: "Our Phone",
    text: "+233(0)534-438-2072",
    link: "tel:233534-438-2072",
  },
  {
    icon: MdLocationOn,
    title: "Our Location",
    text: "Creative Studio Academy, 5.678782, -0.262150, Accra",
    link: null,
  },
  {
    icon: MdEmail,
    title: "Email Us",
    text: "info@creativestudioacademy.org",
    link: "mailto:info@creativestudioacademy.org",
  },
];
const Footer = () => {
  return (
    <>
      <div id="footer" className="w-full bg-black pb-12 relative">
        <div className="bg-white w-[60%] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center justify-center">
            {footerData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 text-center px-4 border-r border-zinc-400/20"
                >
                  <Icon size={50} className="text-red-600" />
                  <h5 className="text-xl 2xl:text-2xl font-bold">
                    {item.title}
                  </h5>
                  {item.link ? (
                    <a href={item.link} className="!text-zinc-400 text-sm">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-zinc-400 text-sm">{item.text}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto h-full pt-50 md:pt-28 2xl:pt-20 px-15 lg:px-5 pl-10 md:pl-24 lg:pl-5 grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
          <div>
            <div className=" flex flex-col md:flex-row items-center justify-start mb-5 md:mb-0">
              <img className="h-[5rem] -ml-3" src={csaLogo} alt="" />
            </div>

            <p className="text-zinc-500 text-sm mb-9 w-[80%]">
              Creative Academy is a group of creatives working together to start
              a relaxed environment to inspire the newer generation of
              creatives. Our major goal is to help harness skills of
              up-and-coming photographers. Secondly, establish an environment
              full of quality professional photographers who can express their
              creative potential and foster a healthy community. Our main
              mission is to teach fundamental photography, core skills, and firm
              foundations they'll need to thrive in their field of work.
            </p>

            <div className="flex items-center gap-3 mb-10 lg:mb-0">
              {/* <a
                href="https://x.com/usataofficial?s=21"
                className="bg-[#211F20] rounded-sm flex items-center justify-center w-[2.5rem] h-[2.5rem]"
                target="_blank"
              >
                <BsTwitterX className="text-white" />
              </a> */}
              <a
                href="https://www.instagram.com/creative_studio_academy?igsh=MTM2d3dsZWpibmNrOA=="
                className="bg-[#211F20] rounded-sm flex items-center justify-center w-[2.5rem] h-[2.5rem]"
                target="_blank"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://wa.me/2335344382072"
                className="bg-[#211F20] rounded-sm flex items-center justify-center w-[2.5rem] h-[2.5rem]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>

              {/* <a
                href="https://www.facebook.com/share/18mh9Vk6pm/?mibextid=wwXIfr"
                className="bg-[#211F20] rounded-sm flex items-center justify-center w-[2.5rem] h-[2.5rem]"
                target="_blank"
              >
                <FaFacebookF className="text-white" />
              </a> */}

              {/* <a
                href="https://www.linkedin.com/company/creative-studio-academy/"
                className="bg-[#211F20] rounded-sm flex items-center justify-center w-[2.5rem] h-[2.5rem]"
                target="_blank"
              >
                <FaLinkedinIn className="text-white" />
              </a> */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row text-white gap-10 md:gap-40">
            <div className="flex flex-col gap-3">
              <h5>MENUS</h5>
              <div className="h-[1px] w-[50%] bg-green-400"></div>
              <div className="flex flex-col gap-4 pt-5">
                <a
                  className="!text-zinc-400 hover:!text-white"
                  // href={routes[0].path}
                  href="#"
                >
                  Home
                </a>
                <a
                  className="!text-zinc-400 hover:!text-white"
                  // href={routes[1].path}
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="!text-zinc-400 hover:!text-white"
                  // href={routes[2].path}
                  href="#"
                >
                  Services
                </a>
                <a
                  className="!text-zinc-400 hover:!text-white"
                  // href={routes[3].path}
                  href="#"
                >
                  Board
                </a>
                <a
                  className="!text-zinc-400 hover:!text-white"
                  // href={routes[4].path}
                  href="#"
                >
                  News
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h5>NEWSLETTER</h5>
              <div className="h-[1px] w-[30%] bg-green-400"></div>
              <div className="flex flex-col gap-4 pt-5 items-start">
                <p className="!text-zinc-400 w-[80%] mb-5">
                  Sign up for our mailing list to get the latest updates
                </p>
                <form
                  className="flex items-center border border-zinc-400 justify-start "
                  action=""
                >
                  <input
                    className="bg-[#211F20] py-2 px-4"
                    type="email placeholder-zinc-600"
                    placeholder="Enter your email"
                  />
                  <button className="!bg-green-600 text-white py-2 px-4">
                    <RiSendPlaneFill />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="w-full bg-[#000000] py-5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-10">
          <p className="text-zinc-400 text-sm">
            © 2025 CSA. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
