import Image from "next/image"
import React from "react"

export const Feature = () => {
  return (
    <div>
      <div className="bg-[#F6D365] w-screen h-screen">
        <div>
          <h1 className="text-gray-700 text-center pt-12 text-4xl">
            BEST TRADING SCHOOL BEKERJA UNTUK ANDA
          </h1>
          <p className="text-center text-gray-700">
            Kami memiliki kemampuan untuk memprediksi
            <span className="text-gray-700 font-bold"> KAPAN</span> harga akan
            berubah arah.
            <br /> Hindari KERUGIAN & Raih KEUNTUNGAN bersama Best Trading
            School
          </p>
        </div>

        <div>
          <div style={{ backgroundImage: `url($)` }} className=""></div>

          <div>
            <Image src="" alt="" />
          </div>

          <div>
            <Image src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
