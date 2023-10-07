import React from 'react'
import './chatui.css'

const ChatUi = () => {
  return (
    <div className='chat_window_container'>
        <div className="chat_menu">
            <div className="chat_menu_wrapper">
                <input placeholder='search friends' className='search_chat'/>
            </div>
        </div>
        <div className="chat_box">
            <div className="chat_box_wrapper">Box</div>
        </div>
        <div className="online_menu">
            <div className="online_menu_wrapper">Online</div>
        </div>
    </div>
  )
}

export default ChatUi