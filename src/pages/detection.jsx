import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import * as tf from '@tensorflow/tfjs'
import Loading from '../components/Loading'
import { searchWord } from '../util/wordService'
import { getAllTopics } from '../util/topicService'
//import { Holistic } from '@mediapipe/holistic'
import * as mp_drawing from '@mediapipe/drawing_utils'
//import { Camera } from '@mediapipe/camera_utils'

function Detection() {
  const navigate = useNavigate()
  const accountRef = useRef(null)
  const [openProfile, setOpenProfile] = useState(false)
  const [holistic, setHolistic] = useState(null)
  const [sentence, setSentence] = useState([])
  const [camera, setCamera] = useState(null)

  const [confidence, setConfidence] = useState(null)
  const topPredict = useRef(new Map())
  const [isCollectingFrames, setIsCollectingFrames] = useState(false)
  const [isDetecting, setIsDetecting] = useState(false)
  let counter = 0
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const cameraRef = useRef(null)
  const actions = ['thanks', 'one', 'doctor', 'mother', 'father', 'game', 'morning', 'noon', 'you', 'bye'] // Replace with actual actions
  const threshold = 0.8
  useEffect(() => {
    const handleScroll = () => {
      if (accountRef.current) {
        const rect = accountRef.current.getBoundingClientRect()
        setPosition({ x: rect.left, y: rect.bottom + window.scrollY })
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [openProfile])

  useEffect(() => {
    localStorage.removeItem('sequence')
    const holisticInstance = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
      }
    })

    holisticInstance.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    })

    holisticInstance.onResults(onResults)

    setHolistic(holisticInstance)

    return () => {
      if (camera) {
        camera.stop()
      }
    }
  }, [])

  const startDetection = () => {
    counter = 0
    if (videoRef.current) {
      const newCamera = new Camera(videoRef.current, {
        onFrame: async () => {
          await holistic.send({ image: videoRef.current })
        },
        width: 1280,
        height: 720
      })
      newCamera.start()
      cameraRef.current = newCamera
      setCamera(newCamera)
      setIsCollectingFrames(true)
    }
  }

  const stopDetection = useCallback(() => {
    console.log('stop3')
    counter = 0;
    if (cameraRef.current) {
      console.log('camera stop')
      let max = 0
      let top = 0
      for (let [key, value] of topPredict.current) {
        if (value > max) {
          max = value
          top = key
        }
      }
      setSentence(actions[top])
      cameraRef.current.stop()
      cameraRef.current = null
      // camera.stop()
      setCamera(null)
      setIsCollectingFrames(false)
      setIsDetecting(false)
    }
  }, [cameraRef])
  const restartDetection = () => {
    counter = 0
    stopDetection()
    localStorage.removeItem('sequence')
    setSentence([])
    // setTopPredict(new Map());
    topPredict.current.clear()
    setIsCollectingFrames(false)
    setIsDetecting(false)
    setConfidence(null)
    startDetection()
  }

  const onResults = async (results) => {
    console.log('Length: ' + sentence.length)
    const canvasElement = canvasRef.current
    const canvasCtx = canvasElement.getContext('2d')

    canvasCtx.save()
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

    mp_drawing.drawLandmarks(canvasCtx, results.poseLandmarks, Holistic.POSE_CONNECTIONS, {
      color: '#00FF00',
      lineWidth: 2
    })
    mp_drawing.drawLandmarks(canvasCtx, results.faceLandmarks, Holistic.FACEMESH_TESSELATION, {
      color: '#FF0000',
      lineWidth: 1
    })
    mp_drawing.drawLandmarks(canvasCtx, results.leftHandLandmarks, Holistic.HAND_CONNECTIONS, {
      color: '#00FFFF',
      lineWidth: 2
    })
    mp_drawing.drawLandmarks(canvasCtx, results.rightHandLandmarks, Holistic.HAND_CONNECTIONS, {
      color: '#FF00FF',
      lineWidth: 2
    })

    canvasCtx.restore()

    const keypoints = extractKeypoints(results)
    const sequence = updateSequence(keypoints)
    if (sequence.length === 30) {
      setIsDetecting(true)
      // setIsCollectingFrames(false)

      console.log('counter: ', counter)
      if (counter >= 10) {
        console.log('stop1')

        stopDetection()
      }

      makePrediction(sequence)
    }
  }

  const extractKeypoints = (results) => {
    const pose = results.poseLandmarks
      ? results.poseLandmarks.flatMap((landmark) => [landmark.x, landmark.y, landmark.z, landmark.visibility])
      : new Array(33 * 4).fill(0)
    const face = results.faceLandmarks
      ? results.faceLandmarks.flatMap((landmark) => [landmark.x, landmark.y, landmark.z])
      : new Array(468 * 3).fill(0)
    const lh = results.leftHandLandmarks
      ? results.leftHandLandmarks.flatMap((landmark) => [landmark.x, landmark.y, landmark.z])
      : new Array(21 * 3).fill(0)
    const rh = results.rightHandLandmarks
      ? results.rightHandLandmarks.flatMap((landmark) => [landmark.x, landmark.y, landmark.z])
      : new Array(21 * 3).fill(0)
    return [...pose, ...face, ...lh, ...rh]
  }

  const updateSequence = (keypoints) => {
    let sequence = JSON.parse(localStorage.getItem('sequence')) || []
    sequence.push(keypoints)
    sequence = sequence.slice(-30)
    localStorage.setItem('sequence', JSON.stringify(sequence))
    return sequence
  }

  const makePrediction = async (sequence) => {
    const model = await tf.loadLayersModel('/model_tfjs/model.json')
    const prediction = model.predict(tf.tensor([sequence]))
    const res = prediction.dataSync()
    const actionIndex = res.indexOf(Math.max(...res))
    const actionConfidence = res[actionIndex]

    setConfidence(actionConfidence)
    console.log('label: ' + actions)
    console.log('index: ' + actionIndex)
    console.log('word: ' + actions[actionIndex])
    console.log('confidence: ' + actionConfidence)
    console.log('top predict: ', topPredict)
    if (actionConfidence > threshold) {
      const action = actions[actionIndex]
      if (topPredict.current.has(actionIndex)) {
        topPredict.current.set(actionIndex, topPredict.current.get(actionIndex) + 1)
      } else {
        topPredict.current.set(actionIndex, 1)
      }
      counter++
    }

    console.log('counter: ', counter)
    if (counter >= 10) {
      console.log('stop2')
      stopDetection()
    }
    setIsCollectingFrames(false)

    tf.dispose(model)
    tf.dispose(prediction)
    tf.dispose(res)
    tf.dispose(actionIndex)
  }

  // const handleButtonClick = (event) => {
  //   event.preventDefault()
  //   setIsPredicting((prevState) => !prevState)
  // }

  const [topic, setTopic] = useState([])
  const fetchTopics = async () => {
    try {
      const response = await getAllTopics({ page: 1, limit: 100 })
      console.log(response.result.topics)
      setTopic(response.result.topics)
    } catch (error) {
      console.error('Error fetching topics:', error)
    } finally {
    }
  }

  useEffect(() => {
    fetchTopics()
  }, [])

  const handleViewDetail = async (event) => {
    event.preventDefault()
    try {
      const response = await searchWord({ keyword: sentence })
      console.log(response.result.words[0])
      const data = {
        wordData: response.result.words[0],
        topic: topic.find((topic) => topic._id === response.result.words[0].topic)
      }
      console.log(data)
      navigate(`/word-detail/${response.result.words[0]._id}`, { state: data })
    } catch (error) {
      console.error('Error fetching word:', error.response)
      alert('Cannot find word')
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <section className='banner-area'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 banner-right'>
              <h1 className='text-white'>Detection</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <a href='index.html'>Home </a>
                  <i className='lnr lnr-arrow-right'></i>
                  <a href='about.html'>Detection</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap'>
        <div
          className='info-container'
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <h2 className='login-text'>Hand Gesture Recognition</h2>
          <video
            ref={videoRef}
            width='640'
            height='480'
            autoPlay
            // style={{ display: cameraActive ? 'block' : 'none' }}
          />
          <canvas ref={canvasRef} width='640' height='480' style={{ display: 'none' }} />
          {confidence !== null && (
            <div style={{ fontSize: 20, color: 'black' }}>
              <strong>Confidence:</strong> <span className='login-text'>{confidence.toFixed(2)}</span>
            </div>
          )}
          <div>
            {isCollectingFrames && <div style={{ fontSize: 20 }}>Collecting frames...</div>}
            {isDetecting && <div style={{ fontSize: 20 }}>Detecting...</div>}
          </div>
          <p style={{ fontSize: 20, color: 'black' }}>
            Detected Gesture: <span className='login-text'>{sentence}</span>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 500
              }}
            >
              <button className='btn btn-primary' onClick={startDetection} disabled={camera !== null}>
                Start Detection
              </button>
              <button className='btn btn-danger' onClick={stopDetection} disabled={camera === null}>
                Stop Detection
              </button>
              <button className='btn btn-info' onClick={restartDetection}>
                Restart Detection
              </button>
            </div>
            <div style={{ marginTop: 20 }}>
              <button className='btn btn-success' onClick={handleViewDetail}>
                View Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Detection
