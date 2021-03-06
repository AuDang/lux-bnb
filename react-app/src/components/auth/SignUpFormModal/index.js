import React, {useState} from 'react';
import {Modal} from '../../../context/Modal'
import SignUpForm from './SignUpForm';
import './SignupForm.css'

function SignUpFormModal() {
   const [showModal, setShowModal] = useState(false);

   return (
      <div className= 'nav-signup-container'>
         <button className='nav-signup-button' onClick={() => setShowModal(true)}>Sign Up</button>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <SignUpForm />
            </Modal>
         )}
      </div>
   )
}

export default SignUpFormModal;