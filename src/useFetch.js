import { useState, useEffect } from 'react'
import paginate from './utils'
const url =
  "https://api.thedogapi.com/v1/images/search?limit=99&page=1&order=Desc";

// const API_KEY = "3f2e8da7-ddff-4140-bd03-b5b5478aaa2a";
export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(paginate(data));
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
