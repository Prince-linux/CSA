import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import axiosInstance from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetcher } from "../api/fetcher";
import { endpoints } from "../api/endpoints";
import Hero from "../components/Hero";

const MembersList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null); // ✅ Only one open at a time

  useEffect(() => {
    fetcher(endpoints.registration.get)
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching members:", err);
        setLoading(false);
      });
  }, []);

  const toggleExpanded = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    fetcher(endpoints.registration.get)
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching members:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-10 mb-70">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Registered Members
        </h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : members.length === 0 ? (
          <p className="text-center text-gray-500">
            No members registered yet.
          </p>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="overflow-x-auto hidden md:block">
              <table className="min-w-full text-sm text-left border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Photo</th>
                    <th className="p-2 border">Full Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Phone</th>
                    <th className="p-2 border">Emergency Contact</th>
                    <th className="p-2 border">Date of Birth</th>
                    <th className="p-2 border">Address</th>
                    <th className="p-2 border">Course</th>
                    <th className="p-2 border">Device</th>
                    <th className="p-2 border">Gender</th>
                    <th className="p-2 border">Registered On</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 border text-center">
                        <div className="flex justify-center items-center">
                          {member.image ? (
                            <img
                              src={`${axiosInstance.defaults.baseURL}${member.image}`}
                              alt={member.full_name}
                              className="w-20 h-20 rounded object-cover cursor-pointer"
                              onClick={() =>
                                setSelectedImage(
                                  `${axiosInstance.defaults.baseURL}${member.image}`
                                )
                              }
                            />
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </div>
                      </td>
                      <td className="p-2 border">{member.full_name}</td>
                      <td className="p-2 border">{member.email}</td>
                      <td className="p-2 border">{member.phone_number}</td>
                      <td className="p-2 border">{member.emergency_contact}</td>
                      <td className="p-2 border">{member.date_of_birth}</td>
                      <td className="p-2 border">{member.address}</td>
                      <td className="p-2 border">{member.interested_course}</td>
                      <td className="p-2 border">{member.device}</td>
                      <td className="p-2 border">{member.gender}</td>
                      <td className="p-2 border">
                        {new Date(member.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden flex flex-col gap-6">
              {members.map((member) => {
                const isExpanded = expandedCardId === member.id;

                return (
                  <motion.div
                    key={member.id}
                    layout
                    className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-5 border border-black transition hover:shadow-2xl"
                  >
                    <div className="flex items-center gap-5 mb-4">
                      {member.image ? (
                        <motion.img
                          whileTap={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          src={`${axiosInstance.defaults.baseURL}${member.image}`}
                          alt={member.full_name}
                          className="w-20 h-20 rounded-xl object-cover border border-gray-300 cursor-pointer"
                          onClick={() =>
                            setSelectedImage(
                              `${axiosInstance.defaults.baseURL}${member.image}`
                            )
                          }
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">
                          {member.full_name}
                        </h3>
                        <p className="text-sm text-gray-500">{member.email}</p>
                        <p className="text-sm text-gray-500">
                          {member.phone_number}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpanded(member.id)}
                      className="flex items-center gap-2 text-red-600 rounded-full px-3 py-1.5 text-sm font-semibold mt-2 hover:text-red-700 transition duration-200"
                      style={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      {isExpanded ? "Hide Details" : "View Details"}
                      {isExpanded ? (
                        <ChevronUpIcon className="w-4 h-4 text-red-600" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4 text-red-600" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 text-sm text-gray-700 overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-2">
                            <p>
                              <span className="font-semibold text-gray-600">
                                Emergency Contact:
                              </span>{" "}
                              {member.emergency_contact}
                            </p>
                            <p>
                              <span className="font-semibold text-gray-600">
                                Date of Birth:
                              </span>{" "}
                              {member.date_of_birth}
                            </p>
                            <p>
                              <span className="font-semibold text-gray-600">
                                Address:
                              </span>{" "}
                              {member.address}
                            </p>
                            <p>
                              <span className="font-semibold text-gray-600">
                                Course:
                              </span>{" "}
                              {member.interested_course}
                            </p>
                            <p>
                              <span className="font-semibold text-gray-600">
                                Device:
                              </span>{" "}
                              {member.device}
                            </p>
                            <p>
                              <span className="font-semibold text-gray-600">
                                Gender:
                              </span>{" "}
                              {member.gender}
                            </p>
                            <p>
                              <span className="font-semibold text-gray-600">
                                Registered:
                              </span>{" "}
                              {new Date(member.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white p-4 rounded shadow-xl max-w-3xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // prevent modal from closing on image click
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MembersList;
