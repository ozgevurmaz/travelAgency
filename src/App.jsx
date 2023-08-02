import { Route, Routes } from 'react-router-dom'

//constants
import Header from './constants/Header'
import Footer from './constants/Footer';

//pages
import { Home, TourPackages, CountryDetail } from './pages/index';


function App() {

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tour-packages' element={<TourPackages />} />
          <Route path='/:country' element={<CountryDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
