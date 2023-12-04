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
            <div>
                <ul className="navList">
                    <li><a href="" className="navListItem">.home()</a></li>
                    <li><a href="" className="navListItem">.aboutMe()</a></li>
                    <li><a href="" className="navListItem">.portfolio()</a></li>
                    <li><a href="" className="navListItem">.contactMe()</a></li>
                    <li><a href="" className="navListItem resume-btn">.resume()</a></li>
                </ul>
            </div>
        </div>

    );
}

// export navigation
export default Navigation;