import React from "react"
import CalculatorTrading from "./../Components/Widget/CalculatorTrading"

const TradingView = () => {
  return (
    <div>
      <div className="bg-[#333333] w-screen">
        <div className="mb-12">
          <p className="text-lg font-bold text-slate-200 text-center pt-12 xl:text-4xl xl:font-semibold">
            FOREX LIVE RATE & CALCULATOR
          </p>
          {/* <div className="">
            <p className="text-center text-slate-200 mb-8 px-8 xl:px-28 xl:pt-4 xl:mb-12">
              You can relay on our amazing features list and also our costumer
              services will be great experince for you without doubt and in
              no-time and with great quality for design.
            </p>
          </div> */}
        </div>
        <div className="flex justify-center">
          <div className="w-10/12 h-[460px] flex justify-center pb-8 xl:pb-10">
            <CalculatorTrading />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingView
