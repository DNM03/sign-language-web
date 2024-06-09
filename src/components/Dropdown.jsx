import React, { useState, useEffect, useRef } from 'react'
import '../css/Dropdown.css'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'

export default function Dropdown({ buttonText, content }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()
  const toggleDropdown = () => setOpen(!open)

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [dropdownRef])
  

  return (
    <div className='dropdown' ref={dropdownRef}>
      <DropdownButton open={open} toggle={toggleDropdown}>
        {buttonText}
      </DropdownButton>
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  )
}
