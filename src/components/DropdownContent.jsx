import React from 'react'
import '../css/Dropdown.css'

export default function DropdownContent({ children, open }) {
  return (
    <div className={`dropdown-content ${open ? 'content-open' : null}`}>
      {children}
    </div>
  )
}
