'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TextButtonProps {
    page_name: string,
    target_ref: React.RefObject<HTMLDivElement | null> 
}

export default function TextButton({page_name, target_ref}: TextButtonProps){

    const Pathname = usePathname()
    const [urlName, setUrlName] = useState<string>('')
    useEffect(() => {
        setUrlName(Pathname.split('/')[2])
    }, [])
    
    
    const [activeButton, setActiveButton] = useState<boolean>(false)
    const enterHoverButton = () => {
        setActiveButton(true)
    }
    const leaveHoverButton = () => {
        setActiveButton(false)
    }
    
    const [isInPath, setIsInPath] = useState<boolean>(false)
    useEffect(() => {
        if(urlName === page_name.toLowerCase()) {
            setIsInPath(true)
        }
    }, [urlName])

    const handleClick = () => {
        target_ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    return(
        <div className='flex flex-col'>
            <button className="text-base font-semibold transition-all ease-in-out delay-150 duration-200 text-white md:text-base lg:text-base" type='button' onMouseEnter={enterHoverButton} onMouseLeave={leaveHoverButton} onClick={handleClick}>{page_name}</button>
            <div className={`w-full h-0.5 origin-left transition-all ease-in-out delay-150 duration-200 ${activeButton || isInPath? 'bg-gradient-to-r from-rose-400 to-teal-400' : 'bg-none -scale-x-0'}`}></div>
        </div>
    )
}