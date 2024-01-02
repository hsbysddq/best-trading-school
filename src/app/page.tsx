import Carousels from "./Components/Carousels"
import { Feature } from "./Components/Feature"
import Nav from "./Components/Nav"
import "bootstrap/dist/css/bootstrap.min.css"
import TradingView from "./Components/TradingView"

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Carousels />
      <Feature />
      <TradingView />
    </div>
  )
}
