import { IoLogoWhatsapp } from "react-icons/io"
import Image from "next/image"
import feature3 from "../../../public/feature-2.jpeg"

const Testimonial = () => {
  return (
    <div>
      <div className="bg-yellow-300 w-screen h-44">
        <div className="w-full h-full flex">
          <div className="w-7/12 ml-20 flex flex-col justify-center">
            <p className="text-slate-50 text-3xl font-semibold">
              100% Trusted Forex Trading Signal Provider
            </p>
            <p className="text-slate-50 text-sm">
              We have most experienced Forex Experts. and always analysis charts
              and generate <br /> trading signal to help you to make good
              profit. hello gerate bost halo saya berubah menjadi hhhfashalo
              saya bersama
            </p>
          </div>

          <div className="w-4/12 flex justify-center items-center">
            <div>
              <button className="flex items-center bg-white py-3 px-4 rounded-md text-sm font-semibold">
                <div className="">
                  <IoLogoWhatsapp className="mr-4 font-normal h-6 w-6" />
                </div>
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-screen h-screen">
        <div>
          <p className="text-gray-700 text-center pt-12 text-3xl font-semibold">
            Check What Our Customers Are Saying
          </p>
          <p className="text-center text-gray-700">
            You can relay on our amazing features list and also our customer
            services will be great <br /> experience for you without doubt and
            in no-time
          </p>
        </div>

        <div className="w-full">
          <div className="flex justify-center gap-8 mt-12">
            <div className="w-4/12 bg-white text-center">
              <div className="relative w-32 h-32 mx-auto mt-6">
                <Image alt="" src={feature3} fill className="rounded-full" />
              </div>
              <p className="mx-4 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                voluptatum consequatur beatae quidem officiis quod libero,
                tempora cupiditate perspiciatis deleniti.
              </p>
              <p className="font-semibold">ALEX</p>
              <p className="text-slate-500 mt-[-12px] text-sm font-semibold mb-4">
                WEB DEVELOPER
              </p>
            </div>
            <div className="w-4/12 bg-white text-center">
              <div className="relative w-32 h-32 mx-auto mt-6">
                <Image alt="" src={feature3} fill className="rounded-full" />
              </div>
              <p className="mx-4 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                voluptatum consequatur beatae quidem officiis quod libero,
                tempora cupiditate perspiciatis deleniti.
              </p>
              <p className="font-semibold">PAUL</p>
              <p className="text-slate-500 mt-[-12px] text-sm font-semibold mb-4">
                CUMMINS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
