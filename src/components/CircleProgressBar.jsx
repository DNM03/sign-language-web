import React from 'react'

const gradientId = 'gradient'
const linearGradient = (
  <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='0%'>
    <stop offset='10%' style={{ stopColor: '#7f32fd', stopOpacity: 1 }} />
    <stop offset='100%' style={{ stopColor: '#b937df', stopOpacity: 1 }} />
  </linearGradient>
)

export default function CircleProgressBar({ percentage, circleWidth }) {
  const radius = 85
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100
  return (
    <div style={{ position: 'relative' }}>
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`} style={{position: 'absolute', left: '30%', top: '140px'}}>
        <defs>{linearGradient}</defs>
        <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth='15px' r={radius} className='circle-background' />
      </svg>
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`} style={{position: 'absolute', left: '30%', top: '140px'}}>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth='15px'
          r={radius}
          className='circle-progress'
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke={`url(#${gradientId})`}
        />
      </svg>
      <text x='50%' y='50%' dy='0.3em' textAnchor='middle' className='circle-text login-text' fill={`url(#${gradientId})`} style={{position: 'absolute', left: '45%', top: '220px'}}>
        {percentage}%
      </text>
    </div>
  )
}
