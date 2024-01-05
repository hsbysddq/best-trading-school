import React from "react"
import SubcribePlan from "./Pricing/SubcribePlan"

const Pricing = () => {
  return (
    <div>
      <div className="bg-[#F6D365] w-screen h-screen">
        <div>
          <p className="text-gray-700 text-4xl font-semibold text-center pt-6">
            SIMPLE PRICING PLAN
          </p>
          <p className="text-center text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Doloribus atque aperiam libero nisi. Eligendi ab est veniam voluptas
            unde aliquid.
          </p>
        </div>
        <div>
          <SubcribePlan />
        </div>
      </div>
    </div>
  )
}

export default Pricing
