import React from 'react'
import { Link,useHistory} from 'react-router-dom'
import styles from "./worklyf.module.css";
// import home from "../../../../public/home.png"
function Home() {
    return (
        <>
          {/* <div className={styles.worklyf_section} styles={{ backgroundImage:`url(${home})` }}> */}
            <div className={styles.worklyf_section}>
            <div className="">
              <h4 className={styles.upper_p}>jobs . co-work . learn</h4>
              <h1 className={styles.below_p}>{'<worklyf>'}</h1>
            </div>
    ​
            <div className={styles.lower_div}>
              <button className={styles.btn_signup}><Link to="/register">Sing Up</Link></button>
              <button className={styles.btn_login}><Link to="/login">Login</Link></button>
              <div className={styles.skip_p}>
                <p>Skip it for Now &rarr; </p>
              </div>
            </div>
          </div>
        </>
      );
}

export default Home
