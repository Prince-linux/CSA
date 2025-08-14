// src/pages/RegistrationSuccess.js
import { Link } from 'react-router-dom';

const RegistrationSuccess = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <p className="mb-4">Thank you for your payment and registration.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;