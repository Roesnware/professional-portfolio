// import lib
import { Link } from 'react-router-dom';

// import style sheet
import './Navigation.css'

// navigation component
const Navigation = () => {
    // return nav bar 
    return (
        <div className='navContainer'>
            <div className='icon'>
                <figure></figure>
            </div>
            <div><h1 className='psuedoName'>Roesnware</h1></div>
            <div>
                <ul className="navList">
                    <li><Link to="/"><a href="" className="navListItem">.home()</a></Link></li>
                    <li><Link to="/about-me"><a href="" className="navListItem">.aboutMe()</a></Link></li>
                    <li><Link to="/projects"><a href="" className="navListItem">.projects()</a></Link></li>
                    <li><Link to="/contact-me"><a href="" className="navListItem">.contactMe()</a></Link></li>
                    <li><Link to="/resume"><a href="" className="navListItem">.resume()</a></Link></li>
                </ul>
            </div>
        </div>

    );
}

// export navigation
export default Navigation;