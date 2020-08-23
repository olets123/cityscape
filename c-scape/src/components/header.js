import React from "react"
import Typical from 'react-typical'

export default function Header() {
  return (
      <Typical 
      steps={['Explore', 2000, 'every city', 3000]}
      loop={Infinity}
      wrapper="H2"
    />
  )
}