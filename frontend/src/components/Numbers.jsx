import { useInView } from 'react-intersection-observer';
import numbersData from '../helpers/NumbersData';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Numbers = () => {

    const {ref, inView } = useInView({threshold: 0.5,triggerOnce: true})  

    return (
        <div id='numbers' className="w-full bg-black pt-12 pb-28 px-4">
            <div className="h-full max-w-[1280px] mx-auto grid grid-rows-[1fr_1.3fr]">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14">
                    <h1 style={{ fontFamily: "Oswald" }} className="text-green-800 text-4xl font-normal leading-loose">
                        BEHIND THE NUMBERS
                    </h1>
                    <div className="w-[1px] h-[50%] bg-red-600 hidden md:block"></div>
                    <div className="h-[1px] w-[50%] bg-red-600 block md:hidden"></div>
                    <div className="text-white italic text-center md:text-start">
                        <span>The </span>
                        <span className="text-green-800 font-bold">
                            African Growth and Opportunity Act (AGOA)
                        </span>{" "}
                        <span>
                            provides preferential access <br /> to the US market for eligible African countries.
                        </span>
                    </div>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
                    {numbersData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] grid grid-rows-[1fr_1fr_1.4fr] px-7 py-4"
                        >
                            <h3 style={{ fontFamily: "Fira Sans" }} className="text-5xl font-extrabold text-white">
                                ${inView?<CountUp end={item.amount} duration={3} /> : 0} <motion.span initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 2}}>Billion</motion.span>
                            </h3>
                            <div className="mb-2">
                                <p className="text-green-700 text-sm font-bold">{item.label}</p>
                                <p className="text-white text-sm italic">{item.source}</p>
                            </div>
                            <div className="text-zinc-500 text-sm">
                                {item.description()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Numbers;