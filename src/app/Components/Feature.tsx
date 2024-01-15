import Image from "next/image"
import feature1 from "../../../public/feature.jpeg"
import feature2 from "../../../public/feature-1.jpeg"
import feature3 from "../../../public/feature-2.jpeg"

export const Feature = () => {
  return (
    <div>
      <div className="bg-[#F6D365] w-screen">
        <div className="px-4">
          <h1 className="text-gray-700 text-center pt-8 xl:pt-12 text-sm font-bold xl:font-semibold xl:text-4xl">
            BEST TRADING SCHOOL BEKERJA UNTUK ANDA
          </h1>
          <p className="text-center text-gray-700 text-xs xl:text-xl xl:mx-12 xl:mt-6">
            Kami memiliki kemampuan untuk memprediksi
            <span className="text-gray-700 font-bold"> KAPAN</span> harga akan
            berubah arah. Hindari KERUGIAN & Raih KEUNTUNGAN bersama Best
            Trading School
          </p>
        </div>

        <div className="flex flex-col xl:flex-row w-full justify-center mt-8 xl:mt-16 xl:w-4/12 xl:mx-auto">
          <div className="flex flex-col items-center xl:mr-36">
            <div className="relative w-[240px] h-[220px] mb-3">
              <Image src={feature1} alt="" fill />
            </div>
            <p className="text-center text-xl font-semibold xl:mt-2">
              3 POINT TECH
            </p>
            <p className="text-center text-sm px-8 xl:px-0 mt-[-10px] xl:mt-1 mb-12">
              Teknik yang dikembangkan dari berbagai teknik umum dengan
              experience 3 tahun
            </p>
          </div>

          <div className="flex flex-col items-center xl:w-4/12 xl:mr-44">
            <div className="relative w-[240px] h-[220px] xl:mt-1 mb-3">
              <Image src={feature3} alt="" fill />
            </div>
            <p className="text-center text-xl font-semibold xl:mt-2">
              GOLDEN VIP
            </p>
            <p className="text-center text-sm px-8 xl:px-0 mt-[-10px] mb-12">
              Signal khusus pair XAUUD/GOLD dengan tingkat winrate yang tinggi
            </p>
          </div>

          <div className="flex flex-col items-center xl:w-4/12">
            <div className="relative w-[240px] h-[220px] xl:mt-1 mb-3">
              <Image src={feature2} alt="" fill />
            </div>
            <p className="text-center text-xl font-semibold xl:mt-2">EDUKASI</p>
            <p className="text-center text-sm px-8 xl:px-0 mt-[-10px] mb-12">
              E-Learning all teknikal analysis trading forex
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
