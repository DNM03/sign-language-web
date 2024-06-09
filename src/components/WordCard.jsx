import React from 'react'
import { FaAward } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import '../css/WordCard.css'
import { useAuth } from '../AuthContext'

export default function WordCard({ word, topic, onClick, isLiked }) {
  const { isAuthenticated } = useAuth()
  return (
    <div onClick={onClick}>
      <img
        style={{ width: '100%', height: 200, marginBottom: 10, borderRadius: 5 }}
        alt=''
        src='https://static.vecteezy.com/system/resources/thumbnails/003/025/884/small/topic-concept-with-wooden-block-on-wooden-table-background-free-photo.jpg'
      />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* topic and icon for award and like */}
        <div style={{ background: '#7f32fd', padding: 5, borderRadius: 10, color: 'white' }}>{(topic?topic:"")||(word.topic?word.topic:"")}</div>
        {isAuthenticated && <div>
          {/* {word.process == 100 ? <FaAward color='#f1c232' size={25} /> : <FaAward color='#bcbcbc' size={25} />} */}
          {isLiked ? (
            <FaHeart color='#cc0000' size={25} style={{ marginLeft: 10 }} />
          ) : (
            <FaHeart color='#bcbcbc' size={25} style={{ marginLeft: 10 }} />
          )}
        </div>}
      </div>
      <div style={{ color: 'black', fontSize: 25 }}>
        {/* name */}
        {word.name}
      </div>
      <div>
        {/* name of contributor */}
        Views: {word.viewers}
      </div>
      
      <div>
        {/* rating */}
        {word.rating!=undefined && ([...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          return (
            <label key={i}>
              {ratingValue <= word.rating ? (
                <FaStar color='#ffc107' size={20} style={{ marginRight: 5, cursor: 'pointer' }} />
              ) : ratingValue - 0.5 <= word.rating ? (
                <FaStarHalfAlt color='#ffc107' size={20} style={{ marginRight: 5, cursor: 'pointer' }} />
              ) : (
                <FaStar color='#e4e5e9' size={20} style={{ marginRight: 5, cursor: 'pointer' }} />
              )}
            </label>
          )
        }))}
      </div>
    </div>
  )
}
