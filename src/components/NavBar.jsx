import { AiOutlineSave, AiOutlineDownload } from 'react-icons/ai'
import { RiLiveLine } from 'react-icons/ri'

function NavBar() {
    return (
        <div className="bg-zinc-950 h-[50px] flex justify-stretch space-x-5 items-center">
            {/* Section Logo Title  */}
            <div className=" px-2">
                <h1 className="text-gray-200 text-2xl font-semibold">HCJ-Code</h1>
            </div>

            {/* Button Operations  */}
            <div className=" text-gray-200 bg-zinc-700 px-4 py-1 rounded-lg inline-flex space-x-2 items-center">
                <AiOutlineSave />
                <button
                >Save</button>
            </div>
            <div className=" text-gray-200 bg-zinc-700 px-4 py-1 rounded-lg inline-flex space-x-2 items-center">
                <RiLiveLine />
                <button
                >Live</button>
            </div>
            <div className=" text-gray-200 bg-zinc-700 px-4 py-1 rounded-lg inline-flex space-x-2 items-center">
                <AiOutlineDownload />
                <button
                >Download</button>
            </div>
        </div>
    )
}
export default NavBar   