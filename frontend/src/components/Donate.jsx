import { FaHeart } from "react-icons/fa";

const DonateButton = ({ link = "/donate", text = "Donate Now" }) => {
  return (
    <div className="w-full flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300"
      >
        <FaHeart className="text-white" />
        {text}
      </a>
    </div>
  );
};

export default DonateButton;
