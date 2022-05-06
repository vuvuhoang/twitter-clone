import React from 'react';
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login({providers}) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
            <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
        />
        <div>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    {/* https://devdojo.com/tailwindcss/buttons#_ */}
                    <button href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group" onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br bg-[#1d9bf0] group-hover:opacity-100"></span>
                    {/* <!-- Top glass gradient --> */}
                    <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    {/* <!-- Bottom gradient --> */}
                    <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    {/* <!-- Left gradient --> */}
                    <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    {/* <!-- Right gradient --> */}
                    <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span class="relative">Sign in with {provider.name} </span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}