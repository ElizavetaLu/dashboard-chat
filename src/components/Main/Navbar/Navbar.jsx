import { FiArrowRight } from "react-icons/fi"
import { BsQuestionCircleFill, BsFillPersonFill, BsThreeDots, BsFillChatLeftTextFill } from "react-icons/bs"
import Table from "./Table/Table"
import { useSelector } from "react-redux"
import { light24 } from "../../../react-iconsStyles"
import './Navbar.scss'

const Navbar = () => {

    const user = useSelector(state => state.userData);
    
    return (
        <div className="navbar">
            <div className='nav-header'>
                <div className='head'>
                    <BsFillPersonFill size={20} color='#c5cad9' />
                    <BsThreeDots size={22} color='#c5cad9' />
                </div>

                <div className='user-data'>
                    <div className="photo">
                        <div className="photo-wrap">
                            <img src={`/dashboard-chat/build//images/avatars/${user.avatar}.png`} alt="" />
                        </div>
                    </div>

                    <div className="user-info">
                        <div className="user-name">{`${user.name} ${user.lastname}`}</div>
                        <div className="user-email">jkabnca.erv@gmail.com</div>
                    </div>
                </div>
            </div>

            <Table />

            <div className='nav-footer'>
                <button className="button">
                    <BsFillChatLeftTextFill size={18} color='#c5cad9' />
                    <div className="button-name">Send Feedback</div>
                    <FiArrowRight  {...light24} />
                </button>

                <button className="button">
                    <BsQuestionCircleFill size={18} color='#c5cad9' />
                    <div className="button-name">Knowledge Base</div>
                    <FiArrowRight {...light24} />
                </button>
            </div>

        </div>
    )
}

export default Navbar