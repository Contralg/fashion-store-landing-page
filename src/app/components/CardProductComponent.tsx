'use client'

import { useState } from "react";
import ButtonColor from "./ButtonColor";

interface CardProductComponentProps{
    image_path: string;
    title: string;
    description: string;
    price: number;
    position: string;
}

export default function CardProductComponent({image_path, title, description, price, position}: CardProductComponentProps) {

    const [isHover, setIsHover] = useState<boolean>(false)
    const handleHoverCard = () => {
        setIsHover(true)
    }
    const leaveHoverCard = () => {
        setIsHover(false)
    }
    const handleClickCard = () => {
        setIsHover(!isHover)
    }

    return (
        <div className="flex flex-col min-w-[360px] max-w-[400px] h-[620px] relative rounded-3xl overflow-hidden bg-zinc-900 transition-all delay-150 duration-300 hover:scale-105 hover:shadow-xl shadow-red-400/30 hover:-translate-y-3" onClick={handleClickCard} onMouseEnter={handleHoverCard} onMouseLeave={leaveHoverCard}>
            <div className={`absolute z-5 w-full h-[347px] bg-zinc-950 transition-all delay-150 duration-300 ${isHover? 'opacity-60' : 'opacity-0'}`}></div>
            <div className={`absolute z-10 w-full h-[347px] top-30 delay-150 duration-300 ${isHover? 'opacity-100' : 'opacity-0'}`}>
                <ButtonColor 
                    text="Shop Collection"
                />
            </div>
            <div className={`overflow-hidden h-[500px] transition-all delay-150 duration-300`}>
                <img src={image_path} className={`${position}`}/>
            </div>
            <div className={`flex flex-col gap-4 text-left text-pretty transition-all delay-150 duration-300 p-10 ${isHover? 'h-90' : 'h-40'}`}>
                <div className="text-2xl font-extrabold">{title}</div>
                <div className={`text-gray-300 transition-all delay-150 duration-300 w-80 ${isHover? 'text-xl opacity-100' : 'text-base opacity-0'}`}>{description}</div>
                <div className={`text-xl text-red-400 font-semibold transition-all delay-150 duration-300 ${isHover? '' : '-translate-y-16'}`}>From ${price}</div>
            </div>
        </div>
    )
}