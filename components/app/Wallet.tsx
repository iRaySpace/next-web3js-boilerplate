import React from 'react'
import { WalletDetail } from '../../common/types'

interface WalletComponent {
  walletDetail: WalletDetail
  onClick: () => void
}

export default function Wallet({ walletDetail, onClick }: WalletComponent) {
  return (
    <div className="rounded-lg shadow-lg p-6 cursor-pointer" onClick={onClick}>
      <div className="text-blue-400 text-lg">{walletDetail.addr}</div>
      <div className="text-gray-600">
        Balance (in Ether): {walletDetail.balanceInEth || 'Click to show'}
      </div>
    </div>
  )
}
