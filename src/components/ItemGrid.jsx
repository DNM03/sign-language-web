import React from 'react'

const ItemGrid = ({ items, renderItem }) => {
  return (
    <div className='item-grid'>
      {items.map((item, index) => (
        <div key={index} className='item-item'>
           {renderItem(item)}
        </div>
      ))}
    </div>
  )
}

export default ItemGrid
