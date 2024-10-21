import React from "react"
import SubcribePlan from "./Pricing/SubcribePlan"

const Pricing = () => {
  return (
    <div>
      <div className="bg-[#F6D365] w-screen">
        <div>
          <p className="text-gray-700 text-xl font-bold xl:text-4xl xl:font-semibold text-center pt-10 xl:pt-12">
            SIMPLE PRICING PLAN
          </p>
          {/* <p className="text-center text-gray-700 px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            atque aperiam libero nisi. Eligendi ab est veniam voluptas unde
            aliquid.
          </p> */}
        </div>
        <div className="">
          <SubcribePlan />
        </div>
      </div>
    </div>
  )
}

export default Pricing
