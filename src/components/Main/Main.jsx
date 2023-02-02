import Navbar from "./Navbar/Navbar";
import ChatWindow from "./Chat-window/ChatWindow";
import { useEffect, useState } from "react";
import { socket } from "../../socket";
import Chatbar from "./Chatbar/Chatbar";
import './Main.scss';


const Main = () => {

    const [newMsgData, setNewMsgData] = useState(null);

    useEffect(() => {
        socket.on('new_message', (data) => {
            setNewMsgData(data)
            setTimeout(() => setNewMsgData(null), 7000)
        })
    })

    return (
        <div className="main">
            <Navbar />
            <ChatWindow />
            <Chatbar />

            <div className="newMsg-popUp" style={{ opacity: newMsgData ? 1 : 0 }}>
                <div className="wrapper">
                    <div className="close" onClick={() => setNewMsgData(null)}>+</div>
                    <div className="avatar-icon">
                        <img src={`/dashboard-chat/build//images/avatars/${newMsgData?.senderAvatar}.png`} alt="" />
                    </div>
                    <div className="msg-data">
                        <div className="sender-name">{newMsgData?.userName}</div>
                        <div className="msg-text">{newMsgData?.msgText}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main