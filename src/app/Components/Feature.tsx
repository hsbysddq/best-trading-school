import Image from "next/image"
import feature1 from "../../../public/feature.jpeg"
import feature2 from "../../../public/feature-1.jpeg"
import feature3 from "../../../public/feature-2.jpeg"

export const Feature = () => {
  return (
    <div>
      <div className="bg-[#F6D365] w-screen">
        <div className="px-4">
          <h1 className="text-gray-700 text-center pt-14 text-sm font-bold xl:text-4xl">
            BEST TRADING SCHOOL BEKERJA UNTUK ANDA
          </h1>
          <p className="text-center text-gray-700 text-xs">
            Kami memiliki kemampuan untuk memprediksi
            <span className="text-gray-700 font-bold"> KAPAN</span> harga akan
            berubah arah. Hindari KERUGIAN & Raih KEUNTUNGAN bersama Best
            Trading School
          </p>
        </div>

        <div className="flex flex-col w-full justify-center mt-16 xl:w-3/12">
          <div className="flex flex-col items-center">
            <div className="relative w-[240px] h-[220px] mb-3">
              <Image src={feature1} alt="" fill />
            </div>
            <p className="text-center text-2xl font-semibold">3 POINT TECH</p>
            <p className="text-center text-sm">
              Teknik yang dikembangkan dari berbagai teknik umum dengan
              experience 3 tahun
            </p>
          </div>

          <div className="flex flex-col items-center xl:w-3/12">
            <div className="relative w-[240px] h-[220px]  mb-3">
              <Image src={feature3} alt="" fill />
            </div>
            <p className="text-center text-2xl font-semibold">GOLDEN VIP</p>
            <p className="text-center text-sm">
              Signal khusus pair XAUUD/GOLD dengan tingkat winrate yang tinggi
            </p>
          </div>

          <div className="flex flex-col items-center xl:w-3/12">
            <div className="relative w-[240px] h-[220px]  mb-3">
              <Image src={feature2} alt="" fill />
            </div>
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
