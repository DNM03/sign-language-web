import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";

export default function MyWordCard({word, onClick}) {
  return (
    <div onClick={onClick}>
      <img
        style={{ width: '100%', height: 200, marginBottom: 10, borderRadius: 5 }}
        alt=''
        src='https://static.vecteezy.com/system/resources/thumbnails/003/025/884/small/topic-concept-with-wooden-block-on-wooden-table-background-free-photo.jpg'
      />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* topic and icon for award and like */}
        <div style={{background: '#7f32fd', padding: 5, borderRadius: 10, color: 'white'}}>topic</div>
        {word.status=="2" ? <PiSealCheckFill  size={25} color='#3d85c6'/> : <PiSealCheckFill  size={25} color='#bcbcbc'/>}
      </div>
      <div style={{color: 'black', fontSize: 35, marginBottom: 10, marginTop: 10}}>
        {/* name */}
        {word.name}
      </div>

      <div>
        Status: {word.status=="0"?"Pending":word.status=="1"?"Publishing":word.status=="2"?"Approved":"Rejected"}
      </div>
      
    </div>
  )
}
