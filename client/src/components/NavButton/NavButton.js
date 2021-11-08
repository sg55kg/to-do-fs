import './styles.css';
import { BsList } from 'react-icons/bs';

const NavButton = ({ setShowNav, showNav }) => {

    function openNavBar() {
        setShowNav(true);
    }


    return (
        <button className="nav-button" onClick={openNavBar}><BsList style={{ height: '3em', width: '3em', color: 'white'}} /></button>
    )
}

export default NavButton;