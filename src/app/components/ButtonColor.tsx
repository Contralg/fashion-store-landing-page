'use client'

interface ButtonColorProps {
    text: string,
}

export default function ButtonColor({text}: ButtonColorProps) {
    return (
        <button type='button' onClick={() => {console.log(text)}} className='cursor-pointer rounded-full bg-gradient-to-tr from-rose-500 to-teal-400 font-bold px-6 py-2 text-gray-100 transition-all ease-in-out delay-100 duration-300 shadow-md shadow-rose-400/30 hover:shadow-lg  hover:-translate-y-1'>{text}</button>
    )
}