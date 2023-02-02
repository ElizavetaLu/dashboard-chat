import { FiArrowRight } from "react-icons/fi"
import { IoMdChatbubbles } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { selectDialog } from "../../../redux/actions/actionCreator";
import { socket } from "../../../socket";
import './Chatbar.scss'

const Chatbar = () => {
    const dispatch = useDispatch();

    const senderID = useSelector(state => state.userData.userID);
    const usersList = useSelector(state => state.usersList);
    const newUsersList = usersList.filter(user => user.userID !== senderID);


    const onSelect = (userName, recipientID) => {
        socket.emit('get_selected_dialogData', { senderID, recipientID, groupRoomId: false });
        socket.on('selected_dialogData', (data) => dispatch(selectDialog({ userName, recipientID, messages: data })));
    };

    return (
        <div className='right-panel'>
            <div></div>

            <div className='start-chat-wrapper'>
                <div className='start-chat'>
                    <div className="icon">
                        <IoMdChatbubbles size={24} />
                    </div>
                    <div className="text">Start Chat</div>
                </div>

                <div className='user-icons'>
                    {
                        newUsersList.map(user => <div
                            key={user.userName}
                            className='user'
                            onClick={() => onSelect(user.userName, user.userID)}>

                            <img src={`/dashboard-chat/build//images/avatars/${user.avatar}.png`} alt="icon" />
                        </div>)
                    }
                </div>
            </div>

            <div className="arrow-icon">
                <FiArrowRight size={24} color='#c5cad9' />
            </div>

        </div>
    )
}

export default Chatbar