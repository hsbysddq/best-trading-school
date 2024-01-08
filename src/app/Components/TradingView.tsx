import React from "react"
import TradingViewWidget from "./../Components/Widget/TradingViewWidget"

const TradingView = () => {
  return (
    <div>
      <div className="bg-[#333333] w-screen">
        <div className="">
          <p className="text-slate-200 text-center pt-12 text-4xl font-semibold">
            FOREX LIVE RATE & CALCULATOR
          </p>
          <div className="">
            <p className="text-center text-slate-200">
              You can relay on our amazing features list and also our costumer
              services <br /> will be great experince for you without doubt and
              in no-time and with <br /> great quality for design.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-10/12 flex justify-center pb-10">
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingView
