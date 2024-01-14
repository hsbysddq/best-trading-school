import TradingViewWidget from "./../Components/Widget/TradingViewWidget"

const ForexCalender = () => {
  return (
    <div>
      <div className="bg-gray-200 w-screen h-screen">
        <div>
          <p className="text-gray-700 text-center pt-12 text-2xl xl:text-4xl font-bold xl:font-semibold">
            GROW WITH US
          </p>
          <p className="text-center text-gray-700 pt-1 pb-8 mx-4">
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
