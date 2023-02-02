import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import useChatScroll from "../../../hooks/useChatScroll";
import Message from "../../Reusable-components/Message/Message";
import Dialog from "../../Reusable-components/Dialog/Dialog";
import SendMessage from "./Chat-footer/SendMessage";
import ChatHeader from "./Chat-header/ChatHeader";

import { setUsersList } from "../../../redux/actions/actionCreator";

import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { light24 } from "../../../react-iconsStyles"

import { socket } from "../../../socket";
import './ChatWindow.scss'



const ChatWindow = () => {

    const dispatch = useDispatch();


    const selectedDialog = useSelector(state => state.userDialog);
    const usersList = useSelector(state => state.usersList);
    const currentUserId = useSelector(state => state.userData.userID);

    const [typingStatus, setTypingStatus] = useState(null);


    useEffect(() => {
        socket.on('typing_response', (data) => setTypingStatus(data));
    }, [typingStatus]);


    useEffect(() => {
        socket.on('new_user_list', (data) => {
            dispatch(setUsersList(data))
        });
    }, [])

    const ref = useChatScroll(selectedDialog.messages);

    const newUsersList = usersList.filter(user => user.userID !== currentUserId);


    return (
        <div className='content'>
            <div className='nav-chat'>
                <div className='chat-search'>
                    <form className="chat-search-form">
                        <button type="submit" className="chat-search-btn">
                            <AiOutlineSearch {...light24} />
                        </button>
                        <input type="search" className="chat-search-input" placeholder="Search in Messages" />
                    </form>
                </div>

                <div className='chat-list'>
                    {usersList.length > 2 && <Dialog group={true} groupRoomId='Group_chat' />}

                    {newUsersList.length > 0 &&
                        newUsersList.map(user => <Dialog key={user.userName} {...user} />)
                    }

                </div>

                <div className="chat-footer">
                    <div className="footer-wrapper">
                        <div className="icon">
                            <FaUsers {...light24} />
                        </div>
                        <div className="icon">
                            <MdMessage size={24} color="3b60f6" />
                        </div>
                        <div className="icon">
                            <HiPhone {...light24} />
                        </div>
                        <div className="icon">
                            <IoSettingsSharp {...light24} />
                        </div>
                    </div>
                </div>
            </div>



            <div className='selected-chat'>

                <ChatHeader />


                <div className="dialog-place" ref={ref}  >

                    {selectedDialog.userName
                        ?
                        <>
                            <div>
                                {selectedDialog.messages.length > 0 &&
                                    selectedDialog.messages.map((item, i) => {

                                        return <Message
                                            key={i}
                                            sentTime={item.time}
                                            userName={item.userName}
                                            msgText={item.msgText}
                                            id={item.senderID}
                                            avatar={item.senderAvatar}
                                        />
                                    })}
                            </div>

                            <div className="typing-status"> {typingStatus?.sender === selectedDialog?.userID && typingStatus?.text} </div>
                        </>


                        : <div className="dum-wrapper">
                            <div className="dum">Select dialog and start the conversation</div>
                        </div>
                    }
                </div>

                <SendMessage />

            </div>
        </div>
    )
}

export default ChatWindow