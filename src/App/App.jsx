// import header component
import Header from '../Header/Header'

// import home component
import Home from '../Home/Home';

// import stylesheet
import './App.css'

// app component
const App = () => {

  // return 
  return (
    <div className='container'>
      <Header />
      <Home />
    </div>
  )
};

// export component
export default App
