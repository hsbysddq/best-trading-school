import Image from "next/image"
import logo from "../../../public/logo.png"

const Footer = () => {
  return (
    <div>
      <div className="xl:flex w-screen bg-[#333333]">
        <div className="flex mx-20 mb-8">
          <div className="w-5/12">
            <div className="relative h-36 w-72 mb-12">
              <Image alt="" src={logo} fill className="" />
            </div>

            <p className="text-slate-200 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              minus molestias quia nemo voluptate architecto accusantium? Odit
              sequi officia at asperiores dolorum laborum atque et.
            </p>
          </div>
          <div className="w-7/12 flex ml-40 mt-16 gap-10">
            <div className="w-4/12">
              <p className="text-slate-200 text-2xl font-bold">About</p>
              <div className="w-full text-slate-200 text-lg mt-6">
                <p>History</p>
                <p>Our Team</p>
                <p>Brand Guidelines</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div>
              <p className="text-slate-200 text-2xl font-bold">Services</p>
              <div className="w-full text-slate-200 text-lg mt-6">
                <p>How to Order</p>
                <p>Our Product</p>
                <p>Order Status</p>
                <p>Promo</p>
                <p>Payment Method</p>
              </div>
            </div>
            <div>
              <p className="text-slate-200 text-2xl font-bold">Other</p>
              <div className="w-full text-slate-200 text-lg mt-6">
                <p>Contact Us</p>
                <p>Help</p>
                <p>Privacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
