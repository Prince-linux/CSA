// // src/components/PaymentCallback.js
// import { useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axios';
// import { endpoints } from '../api/endpoints';

// const PaymentCallback = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const reference = searchParams.get('reference');

//   useEffect(() => {
//     const verifyPayment = async () => {
//       try {
//         const res = await axiosInstance.get(
//           `${endpoints.registration.verifyPayment}?reference=${reference}`
//         );
//         alert(res.data.message);
//         navigate('/registration-success'); // Redirect to success page
//       } catch (error) {
//         alert("Payment verification failed");
//         navigate('/registration-failed'); // Redirect to failure page
//       }
//     };

//     if (reference) {
//       verifyPayment();
//     } else {
//       navigate('/register'); // No reference found, send back to registration
//     }
//   }, [reference, navigate]);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold mb-4">Processing your payment...</h2>
//         <p>Please wait while we verify your transaction.</p>
//       </div>
//     </div>
//   );
// };

// export default PaymentCallback;

import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { endpoints } from "../api/endpoints";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const reference = searchParams.get("reference");
  const [status, setStatus] = useState("processing");
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setStatus("failed");
        setError("No payment reference found");
        return;
      }

      try {
        setStatus("processing");
        const res = await axiosInstance.get(
          endpoints.registration.verifyPayment,
          {
            params: { reference },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.message) {
          setStatus("success");
          setTimeout(() => navigate("/registration-success"), 2000);
        } else {
          setStatus("failed");
          setError(res.data.error || "Payment verification failed");
        }
      } catch (error) {
        setStatus("failed");
        setError(error.response?.data?.error || "Payment verification failed");
        console.error("Payment verification error:", error);
      }
    };

    verifyPayment();
  }, [reference, navigate]);

  if (status === "processing") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Processing your payment...
          </h2>
          <p>Please wait while we verify your transaction.</p>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Payment Failed
          </h2>
          <p className="mb-4">
            {error || "There was an issue processing your payment."}
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default PaymentCallback;
