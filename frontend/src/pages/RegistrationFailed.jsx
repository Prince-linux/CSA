// src/pages/RegistrationFailed.js
import { Link } from 'react-router-dom';

const RegistrationFailed = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Payment Failed</h2>
        <p className="mb-4">There was an issue processing your payment.</p>
        <Link to="/register" className="text-blue-600 hover:underline">
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default RegistrationFailed;