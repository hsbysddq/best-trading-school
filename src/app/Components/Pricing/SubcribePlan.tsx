import { IoIosCheckmarkCircle } from "react-icons/io"
import { IoIosCloseCircle } from "react-icons/io"

const SubcribePlan = () => {
  return (
    <div>
      <div className="flex flex-row justify-center mt-10">
        <div className="mx-4 flex flex-wrap flex-col items-stretch mb-8 w-80 rounded-md p-6 bg-white ">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#3A3A3A]">Basic</span>
            <span className="text-6xl font-bold text-[#3A3A3A]">Free</span>
          </div>
          <p className="my-3 leading-6 text-gray-500">
            Benefit 7-days subscription :
          </p>
          <ul className="mb-6 flex-1 text-gray-500">
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Dashboard Signal</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCloseCircle className="text-red-400 h-6 w-6 mr-3" />
              <span>Email Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCloseCircle className="text-red-400 h-6 w-6 mr-3" />
              <span>SMS Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCloseCircle className="text-red-400 h-6 w-6 mr-3" />
              <span>Telegram Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCloseCircle className="text-red-400 h-6 w-6 mr-3" />
              <span>Phone Consulting</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCloseCircle className="text-red-400 h-6 w-6 mr-3" />
              <span>Support - None </span>
            </li>
          </ul>
          <button
            type="button"
            className="border-none outline-none inline-block rounded-md bg-[#F6D365] px-5 py-3 text-center font-bold tracking-wider text-white"
          >
            Get Started
          </button>
        </div>

        <div className="mx-4 flex flex-wrap flex-col items-stretch mb-8 w-80 rounded-md p-6 bg-white ">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#3A3A3A]">Silver</span>
            <span className="text-6xl font-bold text-[#3A3A3A]">$49</span>
          </div>
          <p className="my-3 leading-6 text-gray-500">
            Benefit 45-days subscription :
          </p>
          <ul className="mb-6 flex-1 text-gray-500">
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Dashboard Signal</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Email Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCloseCircle className="text-red-400 h-6 w-6 mr-3" />
              <span>SMS Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Telegram Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCloseCircle className="text-red-400 h-6 w-6 mr-3" />
              <span>Phone Consulting</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Support - 24 X 7 </span>
            </li>
          </ul>
          <button
            type="button"
            className="border-none outline-none inline-block rounded-md bg-[#F6D365] px-5 py-3 text-center font-bold tracking-wider text-white"
          >
            Get Started
          </button>
        </div>

        <div className="mx-4 flex flex-wrap flex-col items-stretch mb-8 w-80 rounded-md p-6 bg-white ">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#3A3A3A]">Bronze</span>
            <span className="text-6xl font-bold text-[#3A3A3A]">$99</span>
          </div>
          <p className="my-3 leading-6 text-gray-500">
            Benefit 60-days subscription :
          </p>
          <ul className="mb-6 flex-1 text-gray-500">
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Dashboard Signal</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Email Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>SMS Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Telegram Alert</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Phone Consulting</span>
            </li>
            <li className="mb-2 flex ml-2">
              <IoIosCheckmarkCircle className="text-[#F6D365] h-6 w-6 mr-3" />
              <span>Support - Premium </span>
            </li>
          </ul>
          <button
            type="button"
            className="border-none outline-none inline-block rounded-md bg-[#F6D365] px-5 py-3 text-center font-bold tracking-wider text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubcribePlan
