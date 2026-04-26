'use client'
import ClickWhatsapp from '@/app/product/_components/clickWhatsapp'
import Form from '@/app/product/_components/form'
import React, { useRef } from 'react'
import { FaRegHandshake } from 'react-icons/fa'
import { IoMdStar } from 'react-icons/io'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { VscVerified } from 'react-icons/vsc'

const page = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className='w-full h-screen bg-white absolute top-0 left-0 ' dir='ltr' onClick={scrollToSection}>
      <ClickWhatsapp product={{ title: "radcoDigradi" }} />
      <img src="/leading/image1.svg" alt="" className='w-full' />
      <div className='w-full p-4  flex flex-col items-center bg-green-50'>
        <div className='mt-4'>
          <button className='bg-[#c9ff19] text-[1.5rem] font-semibold px-11 rounded-xl py-2 '>اطلب الان</button>
        </div>
        <div className='mt-4 '>
          {/* <img src="/leading/product/d1.jpg" className='rounded-xl' alt="" /> */}
          <img src="/productGif/cafiaGif1.gif" className='rounded-xl ' alt="" />
          {/* <video src="/productGif/cafiaGif1.gif"></video> */}
        </div>
      </div>
      <img src="/leading/image2.svg" alt="" className='w-full' />
      <div className='w-full ' ref={sectionRef} >

        <div className="flex flex-row justify-between gap-1 px-3 mt-4 font-semibold text-green-600 "  >
          <div className="flex items-center gap-1 ">
            <LiaShippingFastSolid />
            <p className="text-[1rem]">شحن مجاني</p>
          </div>
          <div className="flex items-center gap-1">
            <VscVerified />
            <p className="text-[1rem]">جودة و الضمان</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegHandshake />
            <p className="text-[1rem]">دفع عند استلام</p>
          </div>
        </div>
        <div className='flex gap-1 text-[2.5rem] font-semibold justify-center my-4  text-orange-400'>
          <p>درهم</p>
          <p dir=''> 219</p>
        </div>

      </div>
      <img src="/leading/image3.svg" alt="" className='w-full' />
      <div className='w-full '>
        {/* <Form  /> */}
        <Form qty={1} product="digradi" priceProduct="219" thumbnail="/leading/product/d1.jpg" />

      </div>

      <div className='p-4 '>
        <img src="/productGif/cafiaGif2.gif" alt="" className='  rounded-xl' />
      </div>

      <div className='w-full bg-green-50'>
        <div>
          <img src="" alt="" className='w-full' />
        </div>
      </div>
      <div className='relative h-[1150px]'>
        <div>
          <div className='absolute top-0 z-0'>
            {/* <img src="/leading/background.svg" alt="" /> */}
          </div>
          <div className='absolute z-10 top-0 w-full'>
            <p className='text-[2rem] text-center mt-4'>✨ كافيا بالعلاقة الويز  ✨ </p>
            <div className='flex p-4 gap-4'>
              <div>
                <img src="/images/cafia2.png" className='w-[60rem] rounded-xl' alt="" />
              </div>
              <p className='text-[1.3rem] ' dir='rtl'>طقم الاكتر شعبية في المغرب
                كنقدموا ليكم طقم كافيا بالعلاقة الويز لي كيجي بالسنسلة والكورميط و فيها طابع ديال ذهب
                وبالطبع حلقات كهدية في كل طلبية ايه الآلة.
              </p>
            </div>
            <div className='grid grid-cols-1 p-4 gap-4 '>
              <img src="/images/cafia1.png" alt="" className='rounded-xl' />

            </div>
            <div className='flex flex-col  gap-2 text-[1.5rem]  p-4' dir='rtl'>
              <p>
                🚨 بغيتي إطلالة فخمة بثمن مناسب؟
                هاد الطقم كيعطيك لمعان وأناقة تدوم!
              </p>
              <div>
                {/* <p>💧 مقاوم للماء والعطر</p> */}
                <p>💎 بريق فاخر</p>
                <p>🔥 جودة قوية</p>
              </div>
              <div>
                <p>🚚 التوصيل مجاني</p>
                <p>💰 ما تخلصي حتى تقلّبي</p>
              </div>
              <p>
                الكمية محدودة — سارعي بالطلب الآن 👇
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='p-4 pt-0 flex flex-col gap-4'>
        <img src="/images/cafia3.png" alt="" className='rounded-xl' />
        <img src="/productGif/cafiaGif3.gif" alt="" className='rounded-xl' />
        <img src="/productGif/cafiaGif4.gif" alt="" className='rounded-xl' />
      </div>

      <img src="/leading/image5.svg" alt="" className='w-full' />
      <div className='w-full '>

        <div className="flex flex-row justify-between gap-1 px-3 mt-4 font-semibold text-green-600 "  >
          <div className="flex items-center gap-1 ">
            <LiaShippingFastSolid />
            <p className="text-[1rem]">شحن مجاني</p>
          </div>
          <div className="flex items-center gap-1">
            <VscVerified />
            <p className="text-[1rem]">جودة و الضمان</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegHandshake />
            <p className="text-[1rem]">دفع عند استلام</p>
          </div>
        </div>
        <div className='flex gap-1 text-[2.5rem] font-semibold justify-center my-4  text-orange-400'>
          <p>درهم</p>
          <p dir=''> 219</p>
        </div>

      </div>
      <img src="/leading/image3.svg" alt="" className='w-full' />
      <div className='w-full '>
        <Form qty={1} product="digradi" priceProduct="219" thumbnail="/leading/product/d1.jpg" />

      </div>

      <img src="/leading/image4.svg" alt="" className='w-full' />

      <div className="mx-2 my-6">
        <hr className="my-4" />

        <h1 className="text-[1.6rem] font-bold text-right mb-4">
          آراء الزبائن
        </h1>

        <div className='flex flex-col gap-4'>
          <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 flex items-center justify-center text-white text-lg font-bold">
                🎧
              </div>
              <div className="text-right flex-1">
                <p className="text-lg font-semibold">رأي الزبون 1</p>
                <p className="text-sm text-gray-500">استمع للرأي الصوتي</p>
              </div>
            </div>

            <audio controls className="w-full rounded-lg">
              <source src="/audio/audio1.ogg" type="audio/ogg" />
              المتصفح لا يدعم تشغيل الصوت
            </audio>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 flex items-center justify-center text-white text-lg font-bold">
                🎧
              </div>
              <div className="text-right flex-1">
                <p className="text-lg font-semibold">رأي الزبون 2</p>
                <p className="text-sm text-gray-500">استمع للرأي الصوتي</p>
              </div>
            </div>

            <audio controls className="w-full rounded-lg">
              <source src="/audio/audio2.ogg" type="audio/ogg" />
              المتصفح لا يدعم تشغيل الصوت
            </audio>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 flex items-center justify-center text-white text-lg font-bold">
                🎧
              </div>
              <div className="text-right flex-1">
                <p className="text-lg font-semibold">رأي الزبون 3</p>
                <p className="text-sm text-gray-500">استمع للرأي الصوتي</p>
              </div>
            </div>

            <audio controls className="w-full rounded-lg">
              <source src="/audio/audio3.ogg" type="audio/ogg" />
              المتصفح لا يدعم تشغيل الصوت
            </audio>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 flex items-center justify-center text-white text-lg font-bold">
                🎧
              </div>
              <div className="text-right flex-1">
                <p className="text-lg font-semibold">رأي الزبون 4</p>
                <p className="text-sm text-gray-500">استمع للرأي الصوتي</p>
              </div>
            </div>

            <audio controls className="w-full rounded-lg">
              <source src="/audio/audio4.ogg" type="audio/ogg" />
              المتصفح لا يدعم تشغيل الصوت
            </audio>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 flex items-center justify-center text-white text-lg font-bold">
                🎧
              </div>
              <div className="text-right flex-1">
                <p className="text-lg font-semibold">رأي الزبون 5</p>
                <p className="text-sm text-gray-500">استمع للرأي الصوتي</p>
              </div>
            </div>

            <audio controls className="w-full rounded-lg">
              <source src="/audio/audio5.ogg" type="audio/ogg" />
              المتصفح لا يدعم تشغيل الصوت
            </audio>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 flex items-center justify-center text-white text-lg font-bold">
                🎧
              </div>
              <div className="text-right flex-1">
                <p className="text-lg font-semibold">رأي الزبون 6</p>
                <p className="text-sm text-gray-500">استمع للرأي الصوتي</p>
              </div>
            </div>

            <audio controls className="w-full rounded-lg">
              <source src="/audio/audio6.ogg" type="audio/ogg" />
              المتصفح لا يدعم تشغيل الصوت
            </audio>
          </div>


        </div>



        <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300">

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <img src="/whatsapp/whatsapp1.jpeg" className="rounded-xl shadow-sm object-cover" alt="" />
            <img src="/whatsapp/whatsapp2.jpeg" className="rounded-xl shadow-sm object-cover" alt="" />
            <img src="/whatsapp/whatsapp3.jpeg" className="rounded-xl shadow-sm object-cover" alt="" />
            <img src="/whatsapp/whatsapp4.jpeg" className="rounded-xl shadow-sm object-cover" alt="" />
            <img src="/whatsapp/whatsapp5.jpeg" className="rounded-xl shadow-sm object-cover" alt="" />
          </div>

        </div>








      </div>

      <img src="/leading/image5.svg" alt="" className='w-full' />
      <div className='w-full '>

        <div className="flex flex-row justify-between gap-1 px-3 mt-4 font-semibold text-green-600 "  >
          <div className="flex items-center gap-1 ">
            <LiaShippingFastSolid />
            <p className="text-[1rem]">شحن مجاني</p>
          </div>
          <div className="flex items-center gap-1">
            <VscVerified />
            <p className="text-[1rem]">جودة و الضمان</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegHandshake />
            <p className="text-[1rem]">دفع عند استلام</p>
          </div>
        </div>
        <div className='flex gap-1 text-[2.5rem] font-semibold justify-center my-4  text-orange-400'>
          <p>درهم</p>
          <p dir=''> 219</p>
        </div>

      </div>
      <img src="/leading/image3.svg" alt="" className='w-full' />
      <div className='w-full '>
        <Form qty={1} product="digradi" priceProduct="219" thumbnail="/leading/product/d1.jpg" />

      </div>

      <img src="/leading/image6.svg" alt="" className='w-full' />

      <div className='w-full h-[100px] bg-white'></div>
    </div>
  )
}

export default page
