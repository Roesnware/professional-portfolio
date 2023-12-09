// import lib
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import app
import App from './App/App'
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Error from './Error/Error'

// import reset style sheet
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact-me',
        element: <ContactMe />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);


// mount app to main
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

