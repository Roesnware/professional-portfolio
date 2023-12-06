// import typewrite hook 
import { useTypewriter, Cursor } from 'react-simple-typewriter'

// import stylesheet
import './Home.css'

// hom component
const Home = () => {
    // brackets
    const start = '{ '
    const end = ' }'

    // type writeer hook
    const [typeEffect] = useTypewriter({
        words: ['web developer', 'problem solver', 'anime enthusiast', 'team player'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })

    // return 
    return (
        <div className='body'>
            <div className='blur blur1'></div>
            <div className='blur blur3'></div>
            <div className='content'>
                <div className='avatar'>
                    <div className='memoji'></div>
                </div>
                <div>
                    <div className='introText container2'>
                        <div className='curly'>
                            {start}
                        </div>
                        <div className='text'>
                            <h1>Hi my name is <span className='name'>Trae</span></h1>
                            <h1>I'm a <span className='typewriter'>{typeEffect}</span></h1>
                        </div>
                        <div className='curly'>
                            {end}
                        </div>
                    </div>
                </div>
            </div>
            <div className='blur blur2'></div>
        </div>
    );
}

// export component
export default Home;