import { IoLogoWhatsapp } from "react-icons/io"

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
      <div className="bg-gray-200 w-screen h-screen">
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
      </div>
    </div>
  )
}

export default Testimonial
