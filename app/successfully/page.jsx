"use client"


import { useRouter } from 'next/navigation';
import React from 'react'
import { MdOutlineVerified } from "react-icons/md";



const page = () => {
    const router = useRouter()
  return (
    <div  className="flex items-center justify-center h-screen">
      <div>
        
      </div>
        <div className="flex flex-col items-center text-green-600">
            <MdOutlineVerified className="text-[3rem]"/>
            <p className='text-[1.5rem] '>تمت العملية بنجاح</p>
            <p className='text-[1.5rem] font-semibold text-center'>سيتم اتصال بكم لتأكيد الطلبية لكي تصلكم في أقرب وقت المرجو ترك الهاتف بالقرب منكم </p>
        
            <h1 onClick={()=>router.back()} className="text-primary cursor-pointer underline ">عودة الى الصفحة</h1>


        </div>
    </div>
  )
}

export default page
