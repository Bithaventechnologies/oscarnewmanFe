import sec1 from "../assets/sec1.png"
import sec2 from "../assets/sec2.png"
import sec3 from "../assets/sec3.png"
import sec4 from "../assets/sec4.png"
import sec5 from "../assets/sec5.png"

const SecurityPartners = () => {
  return (
    <div className="h-auto w-[90%]  border-b pb-12 mx-auto px-8 place-items-center">
         <h3 className="text-[#fd7904] mb-8 text-center py-4 font-semibold text-[20px] max-md:text-lg">OUR SECURITY PARTNERS FOR GUARDING</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <div className="flex flex-col gap-2 items-center"><img src={sec1} alt="" className="h-full border border-gray-300 object-cover shadow-lg p-4"/>
            <span className="font-semibold">Nigerian Army</span></div>
            <div className="flex flex-col gap-2 items-center"><img src={sec2} alt="" className="h-full border border-gray-300 object-cover shadow-lg p-4"/>
            <span className="font-semibold">NSCDC</span></div>
            <div className="flex flex-col gap-2 items-center"><img src={sec3} alt="" className="h-full border border-gray-300 object-cover shadow-lg p-4"/>
            <span className="font-semibold">Nigerian Police Force</span></div>
            <div className="flex flex-col gap-2 items-center"><img src={sec4} alt="" className="h-full border border-gray-300 object-cover shadow-lg p-4"/>
            <span className="font-semibold">Nigerian Legion</span></div>
            <div className="flex flex-col gap-2 items-center"><img src={sec5} alt="" className="h-full border border-gray-300 object-cover shadow-lg p-4"/>
            <span className="font-semibold">VGN</span></div>
         </div>
         
        </div>
  )
}

export default SecurityPartners