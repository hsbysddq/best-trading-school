/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef } from "react"

const CalculatorTrading = () => {
  const containerRef = useRef()

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      interval: "1m",
      width: "100%",
      isTransparent: false,
      height: "100%",
      symbol: "FX:USDJPY",
      showIntervalTabs: true,
      displayMode: "single",
      locale: "id",
      colorTheme: "light",
    })

    containerRef.current.appendChild(script)

    return () => {
      containerRef.current.removeChild(script)
    }
  }, [])

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://id.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Lacak seluruh pasar di TradingView</span>
        </a>
      </div>
    </div>
  )
}

export default CalculatorTrading
