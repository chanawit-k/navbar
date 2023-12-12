import React, { useRef, useState } from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
const Navbar = ({ Links, social }) => {
  const [showLists, setShowLists] = useState(false)
  const linkContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleShowLinks = () => {
    setShowLists(!showLists)
  }

  const linkStyles = {
    height: showLists
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle">
            <FaBars onClick={toggleShowLinks} />
          </button>
        </div>
        <div
          className="links-container"
          style={linkStyles}
          ref={linkContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {Links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            console.log(icon)
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
