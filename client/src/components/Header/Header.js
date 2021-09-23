import NavButton from '../NavButton/NavButton';
//import NavBar, { showNav } from '../NavBar/NavBar';
import './styles.css';

const Header = ({ setShowNav, showNav }) => {

    return (
        <div className="header">
            <NavButton setShowNav={setShowNav} showNav={showNav} />
            <h1>Test Header</h1>
        </div>
    )
}

export default Header;