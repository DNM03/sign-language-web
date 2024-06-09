import React, {useEffect} from 'react'

export default function VideoPlayer() {
  const cloudinaryRef = useRef();
  const videoRef = useRef();
  useEffect(() => {
    if(cloudinaryRef.current) return;
    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: 'demo',
    });
    return () => {
      console.log('VideoPlayer unmounted')
    }
  }, [])
  return (
    <video ref={videoRef}/>
  )
}
