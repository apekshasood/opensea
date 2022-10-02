import './App.css'
import Categories from './Component/Categories'
import Ecategories from './Component/Ecategories'

import FAQsection from './Component/FAQsection'
import Footer from './Component/Footer'

import Iconsection from './Component/Iconsection'
import MainSection from './Component/MainSection'
import Notable from './Component/Notable'
import Resources from './Component/Resources'
import Sellingpage from './Component/Sellingpage'

function App() {
  return (
    <>
      <MainSection />
      <Sellingpage />
      <Notable />
      <Iconsection />
      <Categories />
      <Ecategories />
      <FAQsection />
      <Resources />
      <Footer />
    </>
  )
}

export default App
