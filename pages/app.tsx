import { useState } from 'react'
import Head from 'next/head'
import { useWeb3 } from '../hooks/useWeb3'
import Wallet from '../components/app/Wallet'
import { WalletDetail } from '../common/types'

export default function App() {
  const { web3 } = useWeb3()
  const [loading, setLoading] = useState(false)
  const [walletDetails, setWalletDetails] = useState([] as WalletDetail[])

  function handleConnect() {
    setLoading(true)
    web3.eth
      .getAccounts()
      .then(data => {
        const walletDetails: WalletDetail[] = data.map(row => {
          return {
            addr: row,
            balanceInEth: null
          }
        })
        setWalletDetails(walletDetails)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleWallet(walletDetail: WalletDetail) {
    setLoading(true)
    web3.eth
      .getBalance(walletDetail.addr)
      .then(data => {
        const ethValue = web3.utils.fromWei(data)

        const modifiedWalletDetail: WalletDetail = walletDetails.find(
          existingWalletDetail =>
            existingWalletDetail.addr === walletDetail.addr
        )
        modifiedWalletDetail.balanceInEth = ethValue

        const oldWalletDetails = walletDetails.filter(
          existingWalletDetail =>
            existingWalletDetail.addr !== walletDetail.addr
        )
        setWalletDetails([...oldWalletDetails, modifiedWalletDetail])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <Head>
        <title>Next Web3.js</title>
      </Head>
      <header className="max-w-screen-lg mx-auto">
        <div className="border-b border-gray-200 py-6 mb-16">
          <div className="text-gray-600 font-medium text-base">
            Next Web3.js
          </div>
        </div>
        <div>
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
            Your Next Web3.js app.
          </h1>
          <p className="max-w-screen-lg text-2xl font-medium text-gray-600 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum
            explicabo aut, nobis velit quibusdam cumque necessitatibus quam
            laboriosam aliquid molestias, cupiditate obcaecati recusandae enim.
            Error, aspernatur optio. Nesciunt, quam.
          </p>
        </div>
        <div>
          <button
            className="font-bold rounded-lg bg-blue-500 text-white py-3 px-3 text-center cursor-pointer"
            onClick={handleConnect}
          >
            Connect Wallet
          </button>
        </div>
      </header>
      <main className="py-16">
        <section className="max-w-screen-lg mx-auto">
          <h2 className="text-6xl font-bold text-gray-400 mb-6">
            Your Wallets
          </h2>
          {loading && <div>Loading</div>}
          {!loading &&
            walletDetails.map(walletDetail => (
              <Wallet
                key={walletDetail.addr}
                walletDetail={walletDetail}
                onClick={() => handleWallet(walletDetail)}
              />
            ))}
        </section>
      </main>
    </div>
  )
}
