import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import styles from '../styles/Home.module.css'
import Logo from './images/Web3Auth.svg'
import { useState } from 'react'

export default function SignIn() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis()

  const handleCustomLogin = async () => {
    await authenticate({
      provider: 'web3Auth',
      clientId:
        'BIdWxd24lokB3QXcAqAVqoAfyLg0wQ4PRdmtOd7D2qxxk0aI3WLIXraHUH3vd7a4x6wH1_wrPbTrv7GcxTxEXKA',
      chainId: Moralis.Chains.ETH_ROPSTEN,
      theme: 'light',
      loginMethodsOrder: ['google', 'kakaotalk', 'facebook'],
    })
  }

  return (
    <div>
      <div className={styles.glassCard}>
        <h1>Fanber</h1>
        <h3>인디 아티스트를 위한 멤버쉽 커뮤니티</h3>
        {/* <Image className={styles.img} src={Logo} width={80} height={80} /> */}
        {isAuthenticating && <p className={styles.green}>Authenticating</p>}
        {authError && (
          <p className={styles.error}>{JSON.stringify(authError.message)}</p>
        )}
        <div className={styles.buttonCard}>
          <button className={styles.loginButton} onClick={handleCustomLogin}>
            로그인/회원가입
          </button>
        </div>
      </div>
    </div>
  )
}
