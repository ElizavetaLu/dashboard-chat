import { BiMenu, BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";
import { MdLocationOn, MdFace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { light24 } from "../../react-iconsStyles";
import './Header.scss'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='burger-menu'>
                <div className="icon">
                    <BiMenu size={26} color='#c5cad9' />
                </div>
                <div className='title'>Constructor</div>
            </div>

            <div className='info-navigation'>
                <div className='item'>About Us</div>
                <div className='item'>News</div>
                <div className='item'>User Policy</div>
                <div className='item'>Contacts</div>
            </div>


            <div className='nav-belt'>
                <div className='nav fill'>
                    <div className="icon">
                        <AiOutlineSearch {...light24} />
                    </div>
                    <input className="search-input" type="text" placeholder='Search ...' />
                </div>

                <div className='nav location'>
                    <div className="icon">
                        <MdLocationOn {...light24} />
                    </div>
                    <div className='nav-title'>New York</div>
                    <div className="icon">
                        <BiChevronDown {...light24} />
                    </div>
                </div>

                <div className='nav user'>
                    <div className="icon">
                        <MdFace {...light24} />
                    </div>
                    <div className='nav-title'>Adrian Nader</div>
                </div>

            </div>

            <div className='close-icon' onClick={() => navigate('/dashboard-chat/build/')}>
                <div className="icon">
                    <AiFillCloseCircle {...light24} />
                </div>
            </div>
        </div>
    )
}

export default Header