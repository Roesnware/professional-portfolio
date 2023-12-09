// import lib 
import { Outlet } from 'react-router-dom';

// import components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// import stylesheet
import './App.css'

// app component
const App = () => {

  // return 
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

// export component
export default App
