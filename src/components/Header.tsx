import '../style/HomePage.css'; 



const Header = () => {
    return (
        <header>
            <div className='logo_container'><img  className='logo' src="src/assets/logos.png"  alt='logo'/></div>
            
            <nav className="nav__links">
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Culture</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </nav>

            <nav className="nav__links_cta">
                <ul>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <a className='cta'><button>Contact</button></a>
        </header>
    )
}

export default Header
