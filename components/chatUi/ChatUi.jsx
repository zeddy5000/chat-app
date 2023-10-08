import React from 'react'
import './chatui.css'
import Conversation from '../conversation/Conversation'
import Message from '../message/Message'

const ChatUi = () => {
  return (
    <div className='chat_window_container'>
        <div className="chat_menu">
            <div className="chat_menu_wrapper">
                <input placeholder='search friends' className='search_chat'/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>

        </div>
        <div className="chat_box">
            <div className="chat_box_wrapper">
                <div className="chat_box_top">
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                </div>
                <div className="chat_box_bottom">
                    <div className="chat_bottom_wrapper">
                    <textarea placeholder='type message' className='chat_msg_input'></textarea>
                    <button className='chatSubmit_button'>Send</button>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="online_menu">
            <div className="online_menu_wrapper">Online</div>
        </div>
    </div>
  )
}

export default ChatUi