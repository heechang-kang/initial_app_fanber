import { useMoralis } from "react-moralis";
import signOutStyle from "../styles/SignOut.module.css";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

import {CopyToClipboard} from 'react-copy-to-clipboard';


export const SignOut = () => {
  const { logout, Moralis, user } = useMoralis();
  const [balance, setBalance] = useState(0);
  const fetchBalance = async () => {
    try {
      const options = { chain: Moralis.Chains.ETH_ROPSTEN };
      const balance = await Moralis.Web3API.account.getNativeBalance(options);
      setBalance(balance.balance / 10 ** 18);
    } catch {}
  };
  useEffect(() => {
    fetchBalance();
  }, []);

  const handleTransfer = async () => {
    try {
      await Moralis.transfer({
        amount: Moralis.Units.ETH("0.1"),
        receiver: "0x41F165acDDd14d9345D4aD7F44b549853Da69C52",
        type: "native",
      }).then((e) => {
        alert("sucesfully transfered");
      });
      await fetchBalance();
    } catch {}
  };

  return (
    <div>
    <div className={signOutStyle.signOutCard}>
      <h4>Fanber에 오신 것을 환영합니다!</h4>
      {/* <button className={`${signOutStyle.refresh}`} onClick={fetchBalance}>
        Refresh
      </button> */}
      {/* <p className={signOutStyle.subHeader}>Details:</p> */}

      <div className={signOutStyle.subHeader}>
        <div>
          <h5>지갑 주소:</h5>
          <p>{user.attributes.accounts}</p>
          <CopyToClipboard
            //options={{ debug: props.debug, message: "" }}
            text={user.attributes.accounts}
            //onCopy={() => setCopied(true)}
          >
            <button>지갑 주소 복사하기</button>
          </CopyToClipboard>
        </div>
        {/* <div>
          <h5>Balance (Eth)</h5>
          <p>{balance} </p>
        </div> */}
      </div>

      <div className={signOutStyle.fotter}>
        {/* <button className={styles.loginButton} onClick={handleTransfer}>
          Test Transfer
        </button> */}
        <button className={styles.loginButton} onClick={logout}>
          로그아웃 하기
        </button>
      </div>
    </div>

    </div>
  );
};
