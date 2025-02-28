import './App.css'

import { LandingPage } from './components/pages/Landing';
import { AboutPage } from './components/pages/About';
import { PortfolioPage } from './components/pages/Portfolio';
import { PageWrapper } from './components/layout/PageWrapper.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: PageWrapper(<LandingPage />)
  },
  {
    path: '/about',
    element: PageWrapper(<AboutPage />),
  },
  {
    path: '/portfolio',
    element: PageWrapper(<PortfolioPage />),
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
