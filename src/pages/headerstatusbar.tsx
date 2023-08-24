"use client"
import React, { useEffect, useState } from 'react';
import styles from "./../styles/header.module.css";
import {SignIn, SignOut} from './actions';
import { getServerSession } from 'next-auth';

import {useSession} from "next-auth/react";

export default  function HeaderStatusBar() {
 // const session =  await getServerSession();


  //const [isSession,setSessionState] = useState(false);
  //const [session, setSession] = useState({});
  // useEffect(()=>  {
  //   (async ()=>{
  //      let sessionRes = await getServerSession();
  //      setSession(sessionRes);
  //   })
     
  // },[]);
  
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <h1>USing Security</h1>
        Signed in as {session?.user?.email} <br />
        <SignOut/>
      </>
    )
  } else {
  return (
    <>
      Not signed in <br />
      <SignIn></SignIn>
    </>
  )
}
   

  // return (
  //   <header className={styles.signedInStatus}>
  //     <div className={styles.loaded}>
  //       {session?.user ? (
  //         <>
  //           {session.user.image && (
  //             <span
  //               style={{ backgroundImage: `url('${session.user.image}')` }}
  //               className={styles.avatar}
  //             />
  //           )}
  //           <span className={styles.signedInText}>
  //             <small>Signed in as</small>
  //             <br />
  //             <strong>{session.user.email ?? session.user.name}</strong>
  //           </span>
  //           <SignOut />
  //         </>
  //       ) : (
  //         <>
  //           <span className={styles.notSignedInText}>
  //             You are not signed in
  //           </span>
  //           <SignIn />
  //         </>
  //       )}
  //     </div>
  //   </header>
  // )
}

 
