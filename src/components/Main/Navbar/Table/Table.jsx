import { TbTool } from "react-icons/tb";
import { AiFillFile, AiFillCloud, AiFillFire } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import "./Table.scss";



const Table = () => {

    return (
        <table className="table">
            <tbody className="tbody">
                <tr className="row">
                    <th className="row-item">
                        <button className="nav-button" disabled>

                            <div className="icon">
                                <BsFillGrid1X2Fill size={22} />
                            </div>

                            <div className="title">Dashboard</div>
                        </button>
                    </th>
                    <th className="row-item">
                        <button className="nav-button active" disabled>
                            <div className="icon">
                                <IoMdChatbubbles size={26} />
                            </div>
                            <div className="title">Messenger</div>
                        </button>
                    </th>
                </tr>

                <tr className="row">
                    <th className="row-item">
                        <button className="nav-button" disabled>
                            <div className="icon">
                                <AiFillFile size={26} />
                            </div>
                            <div className="title">Invoice</div>
                        </button>
                    </th>
                    <th className="row-item">
                        <button className="nav-button" disabled>
                            <div className="icon">
                                <AiFillCloud size={26} />
                            </div>
                            <div className="title">Files</div>
                        </button>
                    </th>
                </tr>

                <tr className="row">
                    <th className="row-item">
                        <button className="nav-button" disabled>
                            <div className="icon">
                                <AiFillFire size={26} />
                            </div>
                            <div className="title">Events</div>
                        </button>
                    </th>
                    <th className="row-item">
                        <button className="nav-button" disabled>
                            <div className="icon">
                                <FaUsers size={26} />
                            </div>
                            <div className="title">Teams</div>
                        </button>
                    </th>
                </tr>

                <tr className="row">
                    <th className="row-item">
                        <button className="nav-button" disabled>
                            <div className="icon">
                                <IoMdChatbubbles size={26} />
                            </div>
                            <div className="title">Message</div>
                        </button>
                    </th>
                    <th className="row-item">
                        <button className="nav-button" disabled>
                            <div className="icon">
                                <TbTool size={26} />
                            </div>
                            <div className="title">Settings</div>
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default Table