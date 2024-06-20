import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'https://api.fda.gov/drug/label.json'

function useMedicationDetails(drugId) {
  const [medicationDetails, setMedicationDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMedicationDetails = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${baseURL}?search=id:${drugId}`)
        setMedicationDetails(response.data.results[0])
      } catch (error) {
        console.error('Error fetching medication details:', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if (drugId) {
      fetchMedicationDetails()
    }
  }, [drugId])

  return { medicationDetails, loading, error }
}

export default useMedicationDetails
