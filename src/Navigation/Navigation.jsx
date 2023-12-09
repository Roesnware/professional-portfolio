// import lib
import { NavLink } from 'react-router-dom';

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
                    <li><NavLink to="/" exact activeClassName="active"><a href="" className="navListItem">.home()</a></NavLink></li>
                    <li><NavLink activeClassName="active" to="/about-me"><a href="" className="navListItem">.aboutMe()</a></NavLink></li>
                    <li><NavLink activeClassName="active" to="/projects"><a href="" className="navListItem">.projects()</a></NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact-me"><a href="" className="navListItem">.contactMe()</a></NavLink></li>
                    <li><NavLink activeClassName="active" to="/resume"><a href="" className="navListItem">.resume()</a></NavLink></li>
                </ul>
            </div>
        </div>

    );
}

// export navigation
export default Navigation;