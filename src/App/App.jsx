// import components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// import home component
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';

// import stylesheet
import './App.css'

// app component
const App = () => {

  // return 
  return (
    <div className='container'>
      <Header />
      <AboutMe />
      <Footer />
    </div>
  )
};

// export component
export default App
