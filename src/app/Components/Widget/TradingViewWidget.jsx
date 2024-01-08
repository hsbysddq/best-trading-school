/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef } from "react"

const TradingViewWidget = () => {
  const containerRef = useRef()

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      width: "1100",
      height: "523",
      defaultColumn: "overview",
      defaultScreen: "top_gainers",
      showToolbar: true,
      locale: "id",
      market: "forex",
      colorTheme: "light",
    })

    containerRef.current.appendChild(script)

    return () => {
      // Cleanup script when the component is unmounted
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

export default TradingViewWidget
