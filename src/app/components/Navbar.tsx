'use client'

import ButtonColor from './ButtonColor'
import TextNavbar from './TextNavbar'

interface NavbarProps {
    section_ref : {
        collections_ref: React.RefObject<HTMLDivElement | null>,
        about_ref: React.RefObject<HTMLDivElement | null>,
        contact_ref: React.RefObject<HTMLDivElement | null> 
    }
}

export default function Navbar({section_ref}: NavbarProps) {

    return (
        <div className="z-10 w-full fixed top-0 left-0 flex flex-row justify-between p-4 md:px-20 items-center bg-zinc-950 border-b-1 border-gray-500">
            <img src="/portofolio1/your_logo.svg" alt='your logo' className='w-50'></img>
            <div className='hidden md:flex lg:flex flex-row justify-center gap-8'>
                <TextNavbar 
                    page_name='Collections'
                    target_ref={section_ref.collections_ref}
                />
                <TextNavbar 
                    page_name='About'
                    target_ref={section_ref.about_ref}
                />
                <TextNavbar 
                    page_name='Contact'
                    target_ref={section_ref.contact_ref}
                />
            </div>
            <ButtonColor 
              text="Shop Now"
            />
        </div>
    )
}