import { useState, useEffect } from 'react'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Numbers from "../components/Numbers"
import Deliver from "../components/Deliver"
import News from "../components/News"
import Footer from "../components/Footer"
import AboutUs from "./AboutUs"
import Services from "./Services"
import TeamSection from "./TeamSection"
import GlobalPartners from "./GlobalPartners"

import heroBG1 from '../assets/CSA-logo.png'
import heroBG2 from '../assets/CSA-logo.png'
import heroBG3 from '../assets/CSA-logo.png'

const bgImages = [heroBG1, heroBG2, heroBG3]

const HomePage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length)
        }, 9000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative">
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${bgImages[currentImageIndex]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 1s ease-in-out'
                }}
                className='w-full h-[90vh] pt-24 relative'
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 transition-opacity duration-1000"></div>
                <Hero />
            </div>
            <AboutUs />
            <Services />
            <Numbers />
            <Deliver />
            <TeamSection />
            <GlobalPartners />
            <News />
            <Footer />
        </div>
    )
}

export default HomePage
