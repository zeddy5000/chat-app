import React from 'react'
import './message.css'
const Message = ({own}) => {
  return (
    <div className={own ? 'message_box own':'message_box'}>
        <div className="message_top">
            <img src='' alt='' className='msg_img'/>
            <p className={own ? 'message_text own':'message_text'}>Lorem ipsum dolor sit.
                 Autem laudantium quo qui provident 
                eos adipisci perferendis quod, necessitatibus</p>
        </div>
        <div className="message_bottom">
            1 hour ago
        </div>
    </div>
  )
}

export default Message