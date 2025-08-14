// import { Route, Routes } from 'react-router'
// import './App.css'
// import HomePage from './pages/HomePage'
// import TeamMemberDetail from './pages/TeamMember'
// import DonatePage from './pages/DonationPage'
// import Register from './pages/Register'
// import { routes } from './helpers/routes'
// import MembersList from "./pages/MembersList";
// import PaymentCallback from './pages/PaymentCallback';
// import RegistrationSuccess from './pages/RegistrationSuccess';
// import RegistrationFailed from './pages/RegistrationFailed';





// function App() {

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/members" element={<MembersList />} />
//         {/* <Route path={routes[0].path} element={<HomePage />}></Route>
//         <Route path={routes[5].path} element={<TeamMemberDetail />} />
//         <Route path={routes[6].path} element={<Register />} />
//         <Route path={routes[7].path} element={<DonatePage />} /> */}
//         <Route path="/members" element={<MembersList />} />
//         <Route path="/payment-callback" element={<PaymentCallback />} />
//         <Route path="/registration-success" element={<RegistrationSuccess />} />
//         <Route path="/registration-failed" element={<RegistrationFailed />} />


//       </Routes>
//     </>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import MembersList from "./pages/MembersList";
import PaymentCallback from './pages/PaymentCallback';
import RegistrationSuccess from './pages/RegistrationSuccess';
import RegistrationFailed from './pages/RegistrationFailed';

function App() {
  return (
    <Routes>
      <Route index element={<Register />} /> {/* For root path */}
      <Route path="/members" element={<MembersList />} />
      <Route path="/payment-callback" element={<PaymentCallback />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
      <Route path="/registration-failed" element={<RegistrationFailed />} />
      <Route path="*" element={<Register />} /> {/* Catch-all route */}
    </Routes>
  )
}

export default App;