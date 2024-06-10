import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import * as tf from '@tensorflow/tfjs'
import Loading from '../components/Loading'
import { searchWord } from '../util/wordService'
import { getAllTopics } from '../util/topicService'

function Detection() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const accountRef = useRef(null)
  const [openProfile, setOpenProfile] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)
  const [stream, setStream] = useState(null)
  const [model, setModel] = useState(null)
  const [gesture, setGesture] = useState('')
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [labels, setLabels] = useState([])
  const [isPredicting, setIsPredicting] = useState(false)
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
    // Load the model
    const loadModel = async () => {
      try {
        console.log('Load Model')
        const model = await tf.loadLayersModel('/model_tfjs/model.json')
        setModel(model)
        console.log('Model loaded')
      } catch (error) {
        console.error('Error loading the model:', error)
        throw error
      }
    }
    loadModel()
    // Load the labels
    const loadLabels = async () => {
      try {
        const response = await fetch('/label_map.txt')
        const text = await response.text()
        const labelsArray = text
          .split(',')
          .map((label) => label.trim().slice(1, label.length - 1))
          .filter((label) => label)
        console.log(labelsArray)
        setLabels(labelsArray)
      } catch (error) {
        console.error('Error loading the labels:', error)
        throw error
      }
    }
    loadLabels()
  }, [])

  useEffect(() => {
    // Load the model
    const loadModel = async () => {
      try {
        console.log("Load Model");
        const model = await tf.loadLayersModel("/model_tfjs/model.json");
        setModel(model);
      } catch (error) {
        console.error("Error loading the model:", error);
        throw error;
      }
    };
    loadModel();
    // Load the labels
    const loadLabels = async () => {
      try {
        const response = await fetch("/label_map.txt");
        const text = await response.text();
        const labelsArray = text
          .split(",")
          .map((label) => label.trim().slice(1, label.length - 1))
          .filter((label) => label);
        console.log(labelsArray);
        setLabels(labelsArray);
      } catch (error) {
        console.error("Error loading the labels:", error);
        throw error;
      }
    };
    loadLabels();
  }, []);

  useEffect(() => {
    // Set up the webcam
    const setupCamera = async () => {
      if (navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener("loadeddata", () => {
          const loadModel = async () => {
            try {
              console.log("Load Model");
              if (!model) {
                const model = await tf.loadLayersModel("/model_tfjs/model.json");

                setModel(model);
                predictGesture(model);
              } else {
                predictGesture(model);
              }
            } catch (error) {
              console.error("Error loading the model:", error);
              throw error;
            }
          };
          loadModel();
          // predictGesture()
        });
      }
    };
  
      setupCamera();
    
  }, [isPredicting])

  const predictGesture = async (model) => {
    console.log(isPredicting);
    if(isPredicting==false) return;
    const topPredict = new Map();
    if (!model) {
      console.log("Model not loaded yet");
      return;
    }
    console.log("Predicting gesture...");
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const sequenceLength = 30; // Number of frames in each sequence
    const frameSequence = [];

    // Function to preprocess frame
    const preprocessFrame = (ctx, video) => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const tensor = tf.browser
        .fromPixels(imageData)
        .resizeNearestNeighbor([32, 32])
        .toFloat();
      // Resize to 32x32
      const flattened = tensor.reshape([32 * 32 * 3]); // Flatten to 1D vector

      // Dimensionality reduction to match 1662 features
      const reduced = tf.layers
        .dense({ units: 1662, activation: "relu" })
        .apply(flattened.expandDims(0));
      return reduced.squeeze();
    };

    // Continuously capture frames and make predictions
    const predictFrame = async () => {
      if (!model || !videoRef.current) return;

      const frameTensor = preprocessFrame(ctx, video);
      frameSequence.push(frameTensor);
      // console.log("Frame sequence length: ", frameSequence.length);
      if (frameSequence.length > sequenceLength) {
        frameSequence.shift(); // Maintain the sequence length
      }

      if (frameSequence.length === sequenceLength) {
        const sequenceTensor = tf.stack(frameSequence).expandDims(0); // Shape: [1, sequenceLength, 1662]
        const prediction = model.predict(sequenceTensor);
        const predictionData = await prediction.data(); // Get the prediction probabilities
        const predictedIndex = prediction.argMax(-1).dataSync()[0];
        const predictionConfidence = predictionData[predictedIndex];
        // Use labels array to map predicted index to the corresponding gesture
        if (predictionConfidence > 0.8) {
          console.log("label: " + labels);
          console.log("index: " + predictedIndex);
          console.log("word: " + labels[predictedIndex]);
          console.log("confidence: " + predictionConfidence);
          console.log("top predict: ", topPredict);

          let numOfDetect = 0;
          for (let [key, value] of topPredict) {
            numOfDetect += value;
          }
          if (numOfDetect < 20) {
            if (topPredict.has(predictedIndex)) {
              topPredict.set(
                predictedIndex,
                topPredict.get(predictedIndex) + 1
              );
            } else {
              topPredict.set(predictedIndex, 1);
            }
          } else {
            let max = 0;
            let top = 0;
            for (let [key, value] of topPredict) {
              if (value > max) {
                max = value;
                top = key;
              }
            }
            setGesture(labels[top]);
            topPredict.clear();
            setIsPredicting(false);
            tf.dispose([
              sequenceTensor,
              prediction,
              predictionData,
              predictedIndex,
              predictionConfidence,
              frameSequence,
              frameTensor,
            ]);
            return;
          }
        }
      }

      requestAnimationFrame(predictFrame);
    };

    predictFrame();
    
  };

  const handleButtonClick = (event) => {
    event.preventDefault()
    setIsPredicting((prevState) => !prevState)
  }

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
    event.preventDefault();
    try{
      const response = await searchWord({ keyword: gesture })
      console.log(response.result.words[0]);
      const data = { wordData: response.result.words[0], topic: topic.find((topic) => topic._id === response.result.words[0].topic) }
      console.log(data);
      navigate(`/word-detail/${response.result.words[0]._id}`, { state: data })
    }
    catch (error) {
      console.error('Error fetching word:', error.response)
      alert('Cannot find word')
    }
  }

  if (!model) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
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
            <Loading />
          </div>
        </section>
      </motion.div>
    )
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
          <p style={{ fontSize: 20, color: 'black' }}>
            Detected Gesture: <span className='login-text'>{gesture}</span>
          </p>
          <div >
            <button style={{marginRight: 30}} onClick={handleButtonClick} className='btn btn-primary'>
              {isPredicting ? 'Stop Predicting' : 'Start Predicting'}
            </button>
            <button onClick={handleViewDetail} className='btn btn-success'>
              View Detail
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Detection
