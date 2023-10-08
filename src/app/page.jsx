import React from 'react'
import './app.css'
import ChatUi from '../../components/chatUi/ChatUi'
import Navbar from '../../components/navbar/Navbar'
const page = () => {
  return (
    <div className='app_container'>
        <Navbar/>
        <ChatUi/>
        </div>
  )
}

export default page