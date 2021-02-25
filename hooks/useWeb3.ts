import { useEffect, useState } from 'react'
import Web3 from 'web3'

export function useWeb3() {
  const [web3, setWeb3] = useState(null)
  useEffect(() => {
    if (window?.ethereum) {
      setWeb3(new Web3(window?.ethereum))
    }
  }, [])
  return { web3 }
}
