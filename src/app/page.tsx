import Carousels from "./Components/Carousels"
import { Feature } from "./Components/Feature"
import Nav from "./Components/Nav"
import "bootstrap/dist/css/bootstrap.min.css"
import TradingView from "./Components/TradingView"
import Pricing from "./Components/Pricing"
import ForexCalender from "./Components/ForexCalender"
import Testimonial from "./Components/Testimonial"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Carousels />
      <Feature />
      <TradingView />
      <Pricing />
      <ForexCalender />
      <Testimonial />
      <Footer />
    </div>
  )
}
