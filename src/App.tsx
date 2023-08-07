import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/Banner';
import Shelf from './components/Shelf';
import Newsletter from './components/Newsletter';

import './scss/global.scss' 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/custom/slick-custom.scss";

function App() {

  return (
    <>
      <Header />
      <Banner />

      <Shelf />

      <Newsletter />
      <Footer />
    </>
  )
}

export default App
