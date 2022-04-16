import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

import googleIcon from '../assets/svg/googleIcon.svg'

const Oauth = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const onGoogleClick = async() => {
      try {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const user = result.user

        //check if the user already exit && if not add it up with google
        const userRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(userRef)

        //check if user exist in database if not create a new with setDoc
        if(!docSnap.exists()) {
          await setDoc(doc(db, 'users', user.uid), {
            name:  user.displayName,
            email: user.email,
            timestamp: serverTimestamp()
          })
        }
        navigate('/')
        toast.success('Successful')
      } catch (error) {
        toast.error('Could not authorize with google')
      }
    }
  return (
    <div className='socialLogin'>
        <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
        <button className="socialIconDiv" onClick={onGoogleClick}>
          <img src={googleIcon} alt="Google" className="socialIconImg" />
        </button>
    </div>
  )
}

export default Oauth