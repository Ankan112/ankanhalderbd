import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ])
  }
])


function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
