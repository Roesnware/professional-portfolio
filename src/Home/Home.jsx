import './Home.css'

const Home = () => {
    const text = 'Im a web developer';
    return (
        <div className='content'>
            <div className='avatar'>
                <div className='itachi'></div>
            </div>
            <div className='introText'>
                <h1>Hi my name is <span className='name'>Trae</span></h1>
            </div>
        </div>
    );
}

export default Home;