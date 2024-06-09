import React from 'react'

export default function TopicCard({ topic, onClick}) {
  const handleClick = () => {
    onClick();
  }
  return (
    <div onClick={handleClick} style={{display: 'flex', paddingTop: 5, width: 200, justifyContent: 'center', height: 100}}>
      {/* <img style={{width: '100%', height: 200, marginBottom: 10, borderRadius: 5}} alt='' src='https://static.vecteezy.com/system/resources/thumbnails/003/025/884/small/topic-concept-with-wooden-block-on-wooden-table-background-free-photo.jpg'/> */}
      <h4 className='login-text'>{topic.name}</h4>
    </div>
  )
}
