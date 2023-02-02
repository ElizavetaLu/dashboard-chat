import { useSelector } from "react-redux"
import "./Message.scss"


const Message = ({ sentTime, userName, msgText, id, avatar }) => {

    const currentUserId = useSelector(state => state.userData.userID);
    const msgType = currentUserId === id ? 'sent' : 'received';

    return (
        <div className={`message ${msgType}`}>
            <div className="data">
                <div className="message-header">
                    <div className="time">{sentTime}</div>
                    <div className="name">{userName}</div>
                </div>

                <div className="message-text">{msgText}</div>
            </div>

            <div className="user-icon">
                <img src={`/dashboard-chat/build//images/avatars/${avatar}.png`} alt="icon" />
            </div>
        </div>
    )
}

export default Message