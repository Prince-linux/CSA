import { useState, useRef } from "react";
import axiosInstance from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollAll from "../helpers/scroll";
import Cropper from "react-easy-crop";
import { endpoints } from "../api/endpoints";

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const Register = () => {
  ScrollAll();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    emergency_contact: "",
    date_of_birth: "",
    address: "",
    interested_course: "",
    device: "",
    gender: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageError, setImageError] = useState("");
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef();

  const getCroppedImg = async () => {
    const image = new Image();
    image.src = previewUrl;
    await image.decode();
    const canvas = document.createElement("canvas");
    const size = Math.min(croppedAreaPixels.width, croppedAreaPixels.height);
    canvas.width = canvas.height = 200;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      200,
      200
    );
    return new Promise((resolve) =>
      canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.7)
    );
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      handleImageDrop(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageDrop = async (file) => {
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type) || file.size > MAX_SIZE) {
      setImageError(
        !ALLOWED_TYPES.includes(file.type)
          ? "Only JPG/PNG/WEBP allowed"
          : "File too large (max 2MB)"
      );
      return;
    }
    setImageError("");
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFormData((f) => ({ ...f, image: file }));
  };

  const handleCropComplete = (_, croppedPixels) =>
    setCroppedAreaPixels(croppedPixels);

  const validate = () => {
    const newErrors = {};
    if (!formData.full_name.trim())
      newErrors.full_name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone_number.trim())
      newErrors.phone_number = "Phone number is required";
    if (!formData.emergency_contact.trim())
      newErrors.emergency_contact = "Emergency contact is required";
    if (!formData.date_of_birth)
      newErrors.date_of_birth = "Date of birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.interested_course)
      newErrors.interested_course = "Select a course";
    if (!formData.device.trim()) newErrors.device = "Device is required";
    if (!formData.gender) newErrors.gender = "Select a gender";
    if (!formData.image) newErrors.image = "Upload an image";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    let blob = await getCroppedImg();
    const compressedFile = new File([blob], "avatar.jpg", {
      type: "image/jpeg",
    });
    const payload = new FormData();
    Object.entries({ ...formData, image: compressedFile }).forEach(([k, v]) =>
      payload.append(k, v)
    );

    try {
      const res = await axiosInstance.post(
        endpoints.registration.submit,
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (e) => setProgress((e.loaded / e.total) * 100),
        }
      );
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    } finally {
      setProgress(0);
    }
  };    

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-md mb-70">
        <h2 className="text-xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="full_name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm">{errors.full_name}</p>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm">{errors.phone_number}</p>
          )}

          <input
            name="emergency_contact"
            placeholder="Emergency Contact"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.emergency_contact && (
            <p className="text-red-500 text-sm">{errors.emergency_contact}</p>
          )}

          <input
            name="date_of_birth"
            type="date"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.date_of_birth && (
            <p className="text-red-500 text-sm">{errors.date_of_birth}</p>
          )}

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}

          <select
            name="interested_course"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Course</option>
            <option value="Photography">Photography</option>
            <option value="Videography">Videography</option>
            <option value="Web Development">Web Development</option>
          </select>
          {errors.interested_course && (
            <p className="text-red-500 text-sm">{errors.interested_course}</p>
          )}

          <input
            name="device"
            placeholder="Device (e.g. Sony A7iv, Macbook Pro)"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.device && (
            <p className="text-red-500 text-sm">{errors.device}</p>
          )}

          <select
            name="gender"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
          {/* DESKTOP Drag & Drop */}
<div
  className="w-full border-2 border-dashed p-4 rounded text-center hover:border-blue-600 cursor-pointer hidden lg:block"
  onClick={() => fileInputRef.current.click()}
  onDragOver={(e) => e.preventDefault()}
  onDrop={(e) => {
    e.preventDefault();
    handleImageDrop(e.dataTransfer.files[0]);
  }}
>
  <input
    hidden
    ref={fileInputRef}
    type="file"
    accept="image/*"
    onChange={(e) => handleImageDrop(e.target.files[0])}
  />
  <p className="text-gray-500">Drag & drop or click to upload passport photo</p>
</div>

{/* MOBILE-Friendly File Input */}
<div className="lg:hidden">
  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Passport Photo</label>
  <input
    type="file"
    name="image"
    accept="image/*"
    onChange={(e) => handleImageDrop(e.target.files[0])}
    className="w-full border px-4 py-2 rounded"
  />
</div>

          {imageError && <p className="text-red-500 text-sm">{imageError}</p>}
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}

          {previewUrl && (
            <div className="relative w-full h-64 bg-gray-100">
              <Cropper
                image={previewUrl}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={handleCropComplete}
              />
            </div>
          )}
          {previewUrl && (
            <button
              type="button"
              onClick={() => {
                setPreviewUrl(null);
                setFormData((f) => ({ ...f, image: null }));
                setImageError("");
              }}
              className="text-red-600 underline text-sm"
            >
              Remove Image
            </button>
          )}

          {progress > 0 && (
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-blue-600 h-2 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
