// import usataLogo from '../assets/Usata-logo.png'
// import del1 from '../assets/del1.png'
// import del2 from '../assets/del2.png'
// import del3 from '../assets/del3.png'
// import del4 from '../assets/del4.png'

const deliveryData = [
    {
        // img: del1,
        text: 'Market Insight'
    },
    {
        // img: del2,
        text: 'Feasibility Studies'
    },
    {
        // img: del3,
        text: 'Policy Navigation'
    },
    {
        // img: del4,
        text: 'Bus. Development and Investment Matching'
    }
]
const Deliver = () => {
  return (
    <div id='deliver' className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center py-12 px-4">
        <img className='h-[8rem]' src={usataLogo} alt="" />
        <h1 style={{ fontFamily: "Oswald" }} className="text-gray-900 text-5xl font-normal leading-loose">
            WHAT WE DELIVER
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1280px] mt-16'>
            {deliveryData.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center'>
                    <img src={item.img} alt="" />
                    <h3 style={{ fontFamily: "Fira Sans" }} className="text-2xl font-bold text-red-500 mt-4 text-center">{item.text}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Deliver