import { NavLink } from "react-router-dom"
import "./fizo.css"

function Fizo() {
    return (
        <>
            <ul className="fizo_ul">
                <li className="fizo_li">
                    <div className="fizo_div">
                        <NavLink to={"/fizo1"}>
                        <h2 className="fizoh2">Ingalatsiya</h2>

                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        
                        <NavLink to={"/fizo2"}>
                        <h2 className="fizoh2">Igloterapiya</h2>
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                        
                        <NavLink to={"/fizo3"}>
                            <h2 className="fizoh2">Zinda</h2>
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                    <NavLink to={"/fizo4"}>
                            <h2 className="fizoh2">YBR</h2>
                        </NavLink>
                    </div>
                </li>
            </ul>
            <ul className="fizo_ul">
                <li className="fizo_li">
                    <div className="fizo_div">
                    <NavLink to={"/fizo5"}>
                            <h2 className="fizoh2">Elektrofarez</h2>
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                    <div className="fizo_div">
                    <NavLink to={"/fizo6"}>
                            <h2 className="fizoh2">Parafen</h2>
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li"> 
                <div className="fizo_div">
                <NavLink to={"/fizo7"}>
                            <h2 className="fizoh2">Lazer</h2>
                        </NavLink>
                </div></li>
                <li className="fizo_li">
                <div className="fizo_div">
                <NavLink to={"/fizo8"}>
                            <h2 className="fizoh2">kompda Tortish</h2>
                        </NavLink>
                    </div>
                </li>
            </ul> <ul className="fizo_ul">
                <li className="fizo_li">
                <div className="fizo_div">
                <NavLink to={"/fizo9"}>
                            <h2 className="fizoh2">Darsenval</h2>
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                     <div className="fizo_div">
                     <NavLink to={"/fizo10"}>
                            <h2 className="fizoh2">Zuluk</h2>
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                <div className="fizo_div">
                <NavLink to={"/fizo11"}>
                            <h2 className="fizoh2">AmpliPlus</h2>
                        </NavLink>
                    </div>
                </li>
                <li className="fizo_li">
                     <div className="fizo_div">
                     <NavLink to={"/fizo12"}>
                            <h2 className="fizoh2">Xijama</h2>
                        </NavLink>
                    </div>
                </li>
            </ul>
            <ul className="fizo_ul">
                <li className="fizo_li"> <div className="fizo_div">
                <NavLink to={"/fizo13"}>
                            <h2 className="fizoh2">UltraVizik</h2>
                        </NavLink>
                    </div></li>
                <li className="fizo_li">
                     <div className="fizo_div">
                     <NavLink to={"/fizo14"}>
                            <h2 className="fizoh2">ElektroUyuku</h2>
                        </NavLink>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Fizo