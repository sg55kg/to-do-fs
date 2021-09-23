import './styles.css';

const NavButton = () => {

    function openNavBar(e) {
        const nav = document.querySelector('.nav-bar');
        const container = document.querySelector('.container');

        nav.style.display = 'inline-flex';
        container.style.marginLeft = '17.4em';
    
    }


    return (
        <button className="nav-button" onClick={openNavBar}>Test navbtn</button>
    )
}

export default NavButton;