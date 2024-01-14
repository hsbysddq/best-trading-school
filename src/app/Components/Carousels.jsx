"use client"
import { useState } from "react"
import { items } from "../../../public/Items.json"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import styles from "../styles/Bootstrap.module.css"
import Image from "next/image"

const Carousels = () => {
  const { bootstrap } = items
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item) => (
          <Carousel.Item
            key={item.id}
            className="w-screen h-screen "
            interval={4000}
          >
            <div className="relative w-screen h-screen">
              <Image src={item.imageUrl} fill alt="slides" objectFit="cover" />
            </div>

            <Carousel.Caption className="">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {/* <button className="btn btn-danger">Visit Docs</button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Carousels
