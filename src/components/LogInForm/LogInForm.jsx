import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanUpDialog, setUserData } from "../../redux/actions/actionCreator";
import { socket } from "../../socket";
import "./LogInForm.scss"


const iconsList = ['bear', 'cat', 'dog', 'rabbit']

const LogInForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [nameExistError, setNameExistError] = useState('')

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        avatar: 'dum',
        userID: '',
    });

    const usersList = useSelector(state => state.usersList)

    const onLogIn = (e) => {
        e.preventDefault();
        const enteredName = (`${user.name} ${user.lastname}`).toLowerCase()

        const exist = usersList.find(userElem => userElem.userName.trim().toLowerCase() === enteredName)

        if (exist) {
            return setNameExistError('A user with this name already exists')
        }

        const fullName = (user.name + user.lastname).trim()
        if (fullName) {

            socket.emit('new_user', {
                userName: `${user.name} ${user.lastname}`,
                userID: user.userID,
                avatar: user.avatar,
            });

            dispatch(cleanUpDialog());
            dispatch(setUserData(user));
            navigate('/dashboard-chat/build/main');
        }
    }


    useEffect(() => {
        socket.emit('on_connect');
        socket.on('user_id', (id) => setUser({ ...user, userID: id, socketID: socket.id }));
    }, []);

    const inputBorderColor = nameExistError ? '#d91717e3' : '#7f35f6'


    return (
        <div className="log-container">

            <form className="logIn-form" onSubmit={onLogIn}>
                <div className="text">Tittle</div>

                <div className="nameExistError">{nameExistError}</div>

                <input
                    type="text"
                    placeholder="Enter your Name..."
                    className="log-input"
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                    style={{ borderColor: inputBorderColor }}
                    onKeyDown={() => setNameExistError()}
                    required
                />

                <input
                    type="text"
                    placeholder="Enter your Lastname..."
                    className="log-input"
                    value={user.lastname}
                    onChange={e => setUser({ ...user, lastname: e.target.value })}
                    style={{ borderColor: inputBorderColor }}
                    required
                    onKeyDown={() => setNameExistError()}
                />

                <div className="select-avatar">
                    <div className="select-tittle">Choose your avatar</div>

                    <div className="avatar-list">

                        {iconsList.map(icon => (
                            <div key={icon} className="icon" onClick={() => setUser({ ...user, avatar: icon })}>
                                <img
                                    className={user.avatar === icon ? 'user-icon active' : 'user-icon'}
                                    src={`/dashboard-chat/build//images/avatars/${icon}.png`}
                                    alt="icon"
                                />
                            </div>
                        ))}

                    </div>
                </div>

                <button type="submit" className="log-btn">Log In</button>

            </form>
        </div>
    )
}

export default LogInForm