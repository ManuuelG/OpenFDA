import { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = 'https://api.fda.gov/drug/label.json?'

const fetchMedicationsData = async (queryName, currentPage, pageSize) => {
  const offset = (currentPage - 1) * pageSize
  const searchQuery = queryName
    ? `search=openfda.generic_name:(${queryName}*)&limit=${pageSize}&skip=${offset}`
    : `search=openfda:*&limit=${pageSize}&skip=${offset}`

  const response = await axios.get(`${baseURL}${searchQuery}`)
  const usMedications = response.data.results
    .filter(item => item.openfda && item.openfda.generic_name)
    .map(item => ({
      id: item.id,
      name: item.openfda.generic_name.join(', '),
    }))

  return {
    medications: usMedications,
    totalCount: response.data.meta.results.total,
  }
}

const useMedications = (queryName, currentPage, pageSize) => {
  const [medications, setMedications] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { medications, totalCount } = await fetchMedicationsData(
          queryName,
          currentPage,
          pageSize
        )
        setMedications(medications)
        setTotalCount(totalCount)
      } catch (error) {
        console.error('Error fetching data from OpenFDA:', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [queryName, currentPage, pageSize])

  return { medications, loading, error, totalCount }
}

export default useMedications
