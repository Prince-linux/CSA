import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import TeamMemberDetail from './pages/TeamMember'
import DonatePage from './pages/DonationPage'
import Register from './pages/Register'
import { routes } from './helpers/routes'
import MembersList from "./pages/MembersList";





function App() {

  return (
    <>
      <Routes>
        <Route path={routes[0].path} element={<HomePage />}></Route>
        <Route path={routes[5].path} element={<TeamMemberDetail />} />
        <Route path={routes[6].path} element={<Register />} />
        <Route path={routes[7].path} element={<DonatePage />} />
        <Route path="/members" element={<MembersList />} />


      </Routes>
    </>
  )
}

export default App
