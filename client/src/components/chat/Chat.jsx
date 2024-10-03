import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const[chat, setChat] = useState(1);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet cojsfaskj sfjhsajfkdh asf js jkhsf
            kjsadhfdj kjh as fkjdsah jdf djnsectetur adipisicing
          </p>
        </div>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            soluta!
          </p>
        </div>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            soluta!
          </p>
        </div>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            soluta!
          </p>
        </div>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            soluta!
          </p>
        </div>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            soluta!
          </p>
        </div>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            soluta!
          </p>
        </div>
        <div className="messageBox">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profilePic"
          />
          <span className="userName">John Doe</span>
          <p className="message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            soluta!
          </p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="img"
              />
              <span className="userName">John Doe</span>
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
