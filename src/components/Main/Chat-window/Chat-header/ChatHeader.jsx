import { useSelector } from "react-redux";
import { BsCameraVideoFill, BsThreeDotsVertical } from "react-icons/bs";
import { CgExpand } from "react-icons/cg";
import { HiPhone } from "react-icons/hi";
import { light24 } from "../../../../react-iconsStyles";
import "./ChatHeader.scss"


const ChatHeader = () => {

    const userName = useSelector(state => state.userDialog.userName);

    return (
        <div className="selected-chat-header">
            <div className="chat-header-wrapper">
                <div className="call-btns">
                    <div className="icon">
                        <HiPhone {...light24} />
                    </div>
                    <div className="icon">
                        <BsCameraVideoFill {...light24} />
                    </div>
                </div>

                {userName &&
                    <div className="selected-chat-name">
                        <div className="circle" style={{ backgroundColor: "#63ca4f" }}></div>
                        <div>{userName}</div>
                    </div>
                }


                <div className="tools">
                    <div className="icon">
                        <CgExpand {...light24} />
                    </div>
                    <div className="icon">
                        <BsThreeDotsVertical {...light24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader