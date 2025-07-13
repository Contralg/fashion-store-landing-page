'use client'

import React, { useState } from "react"

interface CardComponentProps {
    content: React.ReactNode
}

export default function CardComponent({content}: CardComponentProps) {

    const [isHover, setIsHover] = useState<boolean>(false)
    const handleHoverCard = () => {
        setIsHover(true)
    }
    const handleLeaveCard = () => {
        setIsHover(false)
    }

    return (
        <div className="flex relative max-w-[440px] min-h-56 bg-zinc-800 p-8 rounded-3xl overflow-hidden hover:shadow-xl shadow-red-500/30" onMouseEnter={handleHoverCard} onMouseLeave={handleLeaveCard}>
            <div className={`z-1 absolute bg-white blur-2xl opacity-45 h-full w-8 top-0 transition-all ease-in-out delay-75 duration-[1.5s] ${isHover? 'translate-x-200' : '-translate-x-40'} `}></div>
            <div className="z-2">
                {content}
            </div>
        </div>
    )
}