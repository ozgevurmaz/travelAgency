import { Route, Routes } from 'react-router-dom'

//constants
import Header from './components/Header'
import Footer from './components/Footer';

//pages
import { Home, TourPackages } from './pages/index';


function App() {

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tour-packages' element={<TourPackages />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
