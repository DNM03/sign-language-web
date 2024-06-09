import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  defaults,
  elements
} from 'chart.js'
import { plugins } from 'chart.js'
import react, { useState, useEffect } from 'react'
import { getStatisticIn1Year } from '../util/statisticService'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function LineGraph() {
  const options = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Access By Month'
      }
    }
  }

  const monthlyData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const [statisticData, setStatisticData] = useState([])
  const fetchStatisticData = async () => {
    try {
      const response = await getStatisticIn1Year({year: 2024})
      let formattedData = []
      monthlyData.forEach((month) => {
        const monthData = response.result.result[month]
        if (monthData) {
          const [{ numberOfAccesses }] = monthData
          formattedData.push(numberOfAccesses)
        } else {
          formattedData.push(0)
        }
      })
      setStatisticData(formattedData)
    } catch (error) {
      console.error('Error fetching statistic data:', error)
    }
  }

  useEffect(() => {
    fetchStatisticData()
  }, [])
  const data = {
    labels: monthlyData,
    datasets: [
      {
        label: '2024',
        data: statisticData,
        fill: false,
        backgorundColor: '#7f32fd',
        borderColor: '#7f32fd',
        tension: 0.1
      }
    ]
  }
  return <Line options={options} data={data} />
}
