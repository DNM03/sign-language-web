import React from 'react'
import '../css/Dropdown.css'

export default function DropdownItem({children, onClick, closeDropdown, props}) {
  const handleClick = () => {
    onClick()
  };
  return (
    <div className='dropdown-item' onClick={handleClick}>{children}</div>
  )
}
