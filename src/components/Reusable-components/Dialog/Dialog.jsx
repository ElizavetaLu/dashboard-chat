import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDialog } from "../../../redux/actions/actionCreator";
import { socket } from "../../../socket";
import "./Dialog.scss";

const Dialog = ({ userName, userID, avatar, group, groupRoomId, lastMsg }) => {

    const dispatch = useDispatch();
    const usersList = useSelector(state => state.usersList);
    const senderID = useSelector(state => state.userData.userID);

    const [typingStatus, setTypingStatus] = useState(null);


    useEffect(() => {
        socket.on('typing_response', (data) => setTypingStatus(data));
    }, [typingStatus]);


    const onSelect = () => {

        socket.emit('get_selected_dialogData', { senderID, recipientID: userID, groupRoomId });

        socket.on('selected_dialogData', (data) => {

            if (!group) {
                dispatch(selectDialog({ userName, userID, messages: data }))
            } else {
                dispatch(selectDialog({ userName: groupRoomId, messages: data }))
            }
        })
    };

    const shortedArr = usersList ? usersList.slice(0, 3) : null;

    return (
        <div className='dialog' onClick={onSelect}>

            {group ?
                <div className="avatar-list">
                    {shortedArr && shortedArr.map((user, i) => {
                        return (

                            <div className={`test q${i}`} key={user.userID}>
                                <div className="avatar-wrapper">
                                    <div className='user-avatar'>
                                        <img src={`/dashboard-chat/build//images/avatars/${user.avatar}.png`} alt="" />
                                    </div>
                                    <div className="circle" style={{ backgroundColor: "#63ca4f" }}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className="avatar-wrapper">
                    <div className='user-avatar'>
                        <img src={`/dashboard-chat/build//images/avatars/${avatar}.png`} alt="" />
                    </div>

                    {userName === 'Saved messages' ? null :
                        < div className="circle" style={{ backgroundColor: "#63ca4f" }}></div>}
                </div>
            }

            <div className='dialog-data'>
                <div className='dialog-head'>

                    <div className='status-data'>
                        <div className='status'>{group && usersList.length} Online</div>
                        <div className='time'>{lastMsg && lastMsg.time}</div>
                    </div>

                    <div className='user-name'>{group ? "Group chat" : userName}</div>
                </div>
                <div className="typing-status"> {typingStatus?.sender === userID && typingStatus?.text} </div>
            </div>
        </div >
    )
}

export default Dialog