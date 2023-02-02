import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateMessagesList } from "../../../../redux/actions/actionCreator"
import { IoSendSharp } from "react-icons/io5"
import { BsPaperclip } from "react-icons/bs"
import { IoMdImage } from "react-icons/io"
import { light24 } from "../../../../react-iconsStyles"
import { socket } from "../../../../socket"
import "./SendMessage.scss"
import { useEffect } from "react"

const SendMessage = () => {
    const dispatch = useDispatch()

    const [msgText, setMsgText] = useState('');

    const { name, lastname, avatar, userID } = useSelector(state => state.userData);
    const selectedDialog = useSelector(state => state.userDialog);


    const handleTyping = (e) => {

        if (e.keyCode !== 13) {
            socket.emit('typing', {
                senderID: userID,
                recipientID: selectedDialog.userID,
                text: `${name} ${lastname} is typing...`,
            })
        }
    };



    const sendMessage = (e) => {
        e.preventDefault();

        const date = new Date(Date.now())
        const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()

        if (msgText.trim()) {

            const msgData = {
                userName: `${name} ${lastname}`,
                msgText: msgText,
                time: date.getHours() + ":" + minutes,
                senderID: userID,
                senderAvatar: avatar,
                recipientID: selectedDialog.userID,
            };

            socket.emit('send_message', msgData);
        }

        setMsgText('');
        socket.emit('typing', {
            senderID: userID,
            recipientID: selectedDialog.userID,
            text: '',
        });
    }

    useEffect(() => {
        socket.on("receive_message", data => {
            dispatch(updateMessagesList(data))
        });

        socket.on('new_message', (data) => {
            dispatch(updateMessagesList(data))
        });
    }, [])

    useEffect(() => {
        socket.on('group_message', (data) => {
            console.log(data);
            dispatch(updateMessagesList(data))
        })
    }, [])



    return (
        <div className="send-message">
            <div className="send-message-wrapper">
                <div className="pin-btns">

                    <div className="icon">
                        <BsPaperclip style={{ transform: "rotate(90deg)" }} {...light24} />
                    </div>

                    <div className="icon">
                        <IoMdImage {...light24} />
                    </div>

                </div>
                <form className="send-message-form" onSubmit={sendMessage}>
                    <input
                        type="text"
                        className="msg-input"
                        placeholder="Type Message"
                        value={msgText}
                        onChange={e => { setMsgText(e.target.value) }}
                        onKeyDown={handleTyping}
                        disabled={selectedDialog.userName ? false : true}
                    />
                    <button type="submit" className="msg-btn">
                        <IoSendSharp size={24} color="3b60f6" />
                    </button>
                </form>
            </div>

        </div>
    )
}

export default SendMessage