// imporet stylesheet
import './Footer.css'

// footer component 
const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='footerCont'>
                <li><a href="https://github.com/Roesnware">
                    <i className="fa-brands fa-github"></i>
                </a></li>
                <li><a href="https://www.linkedin.com/in/trae-roy-815a02244/">
                    <i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="mailto:bubwub04@gmail.com">
                    <i className="fa-solid fa-envelope"></i></a></li>
            </ul>
        </footer>
    );
};

// export footer
export default Footer;
