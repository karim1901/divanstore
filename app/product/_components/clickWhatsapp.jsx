"use client"
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ClickWhatsapp = ({product}) => {

    const phoneNumber = "212774848821"

    const message = ` ${product.title} مرحبًا، أنا مهتم  https://divanstore.vercel.app/products/${product.title}`

    const handleClick = () => {



        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        if (typeof window != "undefined") {
            window.open(url, '_blank');
        }
    };



    return (
        <div  className="fixed z-[40] bottom-[5rem] right-[50px] bg-green-500 w-[4rem] h-[4rem] flex items-center justify-center rounded-full border-2 border-green-500 " onClick={handleClick}>
            <FaWhatsapp
                style={{ fontSize: '50px', color: 'white', cursor: 'pointer' }}
            />
        </div>

    )
}

export default ClickWhatsapp
