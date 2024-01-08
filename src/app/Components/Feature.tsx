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

        <div className="flex w-full h-full justify-center gap-14">
          <div className="w-3/12">
            <p className="text-center text-2xl font-semibold">3 POINT TECH</p>
            <p className="text-center text-sm">
              Teknik yang dikembangkan dari berbagai teknik umum dengan
              experience 3 tahun
            </p>
          </div>

          <div className="w-3/12">
            <p className="text-center text-2xl font-semibold">GOLDEN VIP</p>
            <p className="text-center text-sm">
              Signal khusus pair XAUUD/GOLD dengan tingkat winrate yang tinggi
            </p>
          </div>

          <div className="w-3/12">
            <p className="text-center text-2xl font-semibold">EDUKASI</p>
            <p className="text-center text-sm">
              E-Learning all teknikal analysis trading forex
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
