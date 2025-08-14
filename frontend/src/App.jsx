import { Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/Register';
import MembersList from "./pages/MembersList";
import PaymentCallback from './pages/PaymentCallback';
import RegistrationSuccess from './pages/RegistrationSuccess';
import RegistrationFailed from './pages/RegistrationFailed';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register />} /> {/* For root path */}
      <Route path="/members" element={<MembersList />} />
      <Route path="/payment-callback" element={<PaymentCallback />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
      <Route path="/registration-failed" element={<RegistrationFailed />} />
      <Route path="*" element={<Register />} /> {/* Catch-all route */}
    </Routes>
  )
}

export default App;