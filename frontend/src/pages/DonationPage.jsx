import { FaHeart } from "react-icons/fa";

const DonatePage = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#314153] text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Impact</h1>
          {/* <p className="text-lg text-gray-200">
            Your donation helps us continue our mission to empower communities through education,
            healthcare, technology, and sustainability.
          </p> */}
        </div>
      </section>

      {/* Donation Details */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#314153] mb-4">Why Donate?</h2>
          {/* <p className="text-gray-700 mb-10">
            Every contribution goes directly toward life-changing initiatives—from upgrading rural schools to supporting local entrepreneurs.
            Help us reach more lives today.
          </p> */}

          <a
            href="https://your-payment-link.com" // Replace with Stripe/PayPal/etc.
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            <FaHeart className="text-white" />
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
