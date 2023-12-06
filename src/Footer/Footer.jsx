// imporet stylesheet
import './Footer.css'

// header component 
const Footer = () => {
    return (
        <footer>
            <ul className='footer'>
                <li><a href="https://github.com/Roesnware">
                    <i class="fa-brands fa-github"></i>
                </a></li>
                <li><a href="https://www.linkedin.com/in/trae-roy-815a02244/">
                    <i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="mailto:bubwub04@gmail.com">
                    <i class="fa-solid fa-envelope"></i></a></li>
            </ul>
        </footer>
    );
};

// export header
export default Footer;
