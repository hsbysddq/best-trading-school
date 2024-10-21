import TradingViewWidget from "./../Components/Widget/TradingViewWidget"

const ForexCalender = () => {
  return (
    <div>
      <div className="bg-gray-200 w-screen">
        <div>
          <p className="text-gray-700 text-center pt-10 pb-2 xl:pt-12 text-2xl xl:text-4xl font-bold xl:font-semibold">
            GROW WITH US
          </p>
          <p className="text-center text-gray-700 px-24 pt-[-4px] xl:pt-1 pb-6 xl:pb-8 mx-4 xl:mx-20">
            Follow our trading signals and be a winner of Forex trading. its a
            perfect option fot those who wants to earn massive income with
            monthly of 10% - 20% profit from your trading account with very low
            risk.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-10/12 h-[540px] xl:h-[460px] flex justify-center pb-10">
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForexCalender
