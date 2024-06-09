import React, {useState} from 'react'
import '../css/SearchBar.css'
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function SearchBar({onSubmit, onChange, value}) {
  const [showSearch, setShowSearch] = useState(false);
  const showSearchBar = () => {
    setShowSearch(!showSearch);
  }
  return (
    <div>
      <form className={'_search ' + (showSearch ? 'show-search' : '')} id='search-bar' onSubmit={onSubmit}>
        <input type='search' placeholder='Type Something...' name='q' className='search__input' value={value} onChange={onChange}/>
        <div className='search__button' id='search-button' onClick={showSearchBar}>
          <FiSearch className='search__icon' />
          <IoClose className='search__close'/>
        </div>
      </form>
    </div>
  )
}
