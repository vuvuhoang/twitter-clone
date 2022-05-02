import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Input() {
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
        <img src="https://i.ibb.co/TBsPqCC/profile.jpg" className="h-11 w-11 rounded-full cursor-pointer" />
        <div className="w-full divide-y divide-gray-700">
            <div className={``}>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="2" placeholder="What's happening?" className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"/>

                <div className="relative">
                    <div className="absolute w-8 h-8 bg-[#15181c] hover:bg[#272c26] bg-opacit-75 roudned-full flex items-center justify-center top-1 left-1 cursor-pointer">
                        <XIcon className="text-white h-5" />
                    </div>
                    <img src={selectedFile} className="rounded-2xl max-h-80 object-contain" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Input