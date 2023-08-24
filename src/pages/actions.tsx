"use client"
import {signIn, signOut} from "next-auth/react";

export function SignOut(){
    return (
        <button
          className="btn btn-primary"
          onClick={()=>signOut()}
        >Sign Out</button>
    );
}


export function SignIn(){
    return(<button className='btn btn-success' onClick={() => signIn("github")}>
      Sign in
    </button>);
}