import { useMoralis } from 'react-moralis'
import signOutStyle from '../styles/SignOut.module.css'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
//import ReactFullpage from '@fullpage/react-fullpage';
import { FullPage, Slide } from 'react-full-page'

export const SignOut = () => {
  const { logout, Moralis, user } = useMoralis()
  const [balance, setBalance] = useState(0)
  const fetchBalance = async () => {
    try {
      const options = { chain: Moralis.Chains.ETH_ROPSTEN }
      const balance = await Moralis.Web3API.account.getNativeBalance(options)
      setBalance(balance.balance / 10 ** 18)
    } catch {}
  }
  useEffect(() => {
    fetchBalance()
  }, [])

  const handleTransfer = async () => {
    try {
      await Moralis.transfer({
        amount: Moralis.Units.ETH('0.1'),
        receiver: '0x41F165acDDd14d9345D4aD7F44b549853Da69C52',
        type: 'native',
      }).then(e => {
        alert('sucesfully transfered')
      })
      await fetchBalance()
    } catch {}
  }

  return (
    <div>
      <div className={signOutStyle.glassCard}>
        <h1>Fanber에 오신 것을 환영합니다!</h1>
        <h2>생성된 지갑 주소:</h2>
        <h3>{user.attributes.accounts}</h3>
        <p>Torus 지갑이 생성되셨습니다.</p>
        <CopyToClipboard
          //options={{ debug: props.debug, message: "" }}
          text={user.attributes.accounts}
          //onCopy={() => setCopied(true)}
        >
          <button className={signOutStyle.Button}>지갑 주소 복사하기</button>
        </CopyToClipboard>
      </div>

      <div className={signOutStyle.glassCard}>
        <h2>ARTIST_NAME</h2>
        <p>아티스트 소개</p>
        <a href="">링크</a>
        <p>
          fanber_ARTIST-NAME_GOLD NFT:
          <br />
          아티스트 인스타 팔로우하고 @fanber_official로 지갑주소 DM보내시면
          모두에에게 보내 드립니다
        </p>
        <a href="">음원 NFT 소개</a>
        <a href="">Opensea에서 구매하기</a>
      </div>
      <div className={signOutStyle.glassCard}>
        <h2>ARTIST_NAME</h2>
        <p>아티스트 소개</p>
        <a href="">링크</a>
        <p>
          fanber_ARTIST-NAME_GOLD NFT:
          <br />
          아티스트 인스타 팔로우하고 @fanber_official로 지갑주소 DM보내시면
          모두에에게 보내 드립니다
        </p>
        <a href="">음원 NFT 소개</a>
        <a href="">Opensea에서 구매하기</a>
      </div>
      <div className={signOutStyle.glassCard}>
        <h2>ARTIST_NAME</h2>
        <p>아티스트 소개</p>
        <a href="">링크</a>
        <p>
          fanber_ARTIST-NAME_GOLD NFT:
          <br />
          아티스트 인스타 팔로우하고 @fanber_official로 지갑주소 DM보내시면
          모두에에게 보내 드립니다
        </p>
        <a href="">음원 NFT 소개</a>
        <a href="">Opensea에서 구매하기</a>
      </div>

      <button className={signOutStyle.Button} onClick={logout}>
        로그아웃
      </button>
    </div>
  )
}
