import NavButton from '../NavButton/NavButton';
//import NavBar, { showNav } from '../NavBar/NavBar';
import './styles.css';

const Header = ({ setShowNav, showNav }) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return (
        <div className="header">
            <NavButton setShowNav={setShowNav} showNav={showNav} />
            <div className="header-content">
            <h1>To-Do Tracker</h1>
                <div className="time-info">
                    <h4>{date.toLocaleDateString("en-US")}</h4>
                    <h4>{(hours > 12 ? hours - 12 : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + (hours > 11 ? " PM" : " AM")}</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;