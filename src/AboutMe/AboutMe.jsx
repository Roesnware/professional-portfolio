// import stylesheet
import './AboutMe.css'

// about me component
const AboutMe = () => {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
        scrollers.forEach((scroller) => {

            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    // return 
    return (
        <div className='aboutMe'>
            <div className='blur blur4'></div>
            <div>
                <h1 className='aboutMeText'>About Me</h1>
                <div className='flex'>
                    <p>Hey there, I am a motivated web developer, who enjoys creating innovative and beautiful solutions to problems. I am pursuing a Computer Science Bachelors Degree, I also recently graduated from a Fullstack web development bootcamp. I love developing and learning new technologies with a little anime on the side.</p>
                </div>
                <h1 className='skills'>Skills</h1>
            </div>
            <div>
                <br />
                <div className='skillsCont'>
                    <div className='frontCont'>
                        <h2 className='textCent textUnder'>Front End</h2>
                        <div className="scroller" data-direction="left" data-speed="slow">
                            <ul className="tag-list scroller__inner">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Handlebars</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>JQuery</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className='textCent textUnder'>Back End</h2>
                        <div className="scroller" data-direction="right" data-speed="slow">
                            <ul className="tag-list scroller__inner">
                                <li>mySQL</li>
                                <li>GraphQL</li>
                                <li>MongoDB</li>
                                <li>RESTful API</li>
                                <li>Mongoose</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Sequelize</li>
                                <li>Axios</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blur blur5'></div>
        </div>
    );
}

// export component
export default AboutMe;