import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import '../css/Dropdown.css'

export default function DropdownButton({ children, open, toggle }) {
  return (
    <div className={`dropdown-btn ${open ? "button-open" : null}`} onClick={toggle}> 
      {children}
      <span className='toggle-icon' >
        {open ? <FaChevronUp />:<FaChevronDown /> }
      </span>
    </div>
  )
}
