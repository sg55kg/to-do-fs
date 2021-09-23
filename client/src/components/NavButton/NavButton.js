import './styles.css';

const NavButton = ({ setShowNav, showNav }) => {

    function openNavBar() {
        
        // const nav = document.querySelector('.nav-bar');
        // const container = document.querySelector('.container');

        // nav.style.display = 'inline-flex';
        // container.style.marginLeft = '17.4em';
        setShowNav(true);
    }


    return (
        <button className="nav-button" onClick={openNavBar}>Test navbtn</button>
    )
}

export default NavButton;