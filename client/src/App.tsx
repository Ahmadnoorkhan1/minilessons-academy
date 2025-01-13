// import './App.css'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Faqpage from './pages/Faqpage'
import Pricingpage from './pages/Pricingpage'
import ContactUsPage from './pages/ContactUsPage'
import Authpage from './pages/Authpage'
import SignUpPage from './pages/SignUpPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<Faqpage/>} />
        <Route path="/pricing" element={<Pricingpage/>} />
        <Route path="/contact-us" element={<ContactUsPage/>}/>
        <Route path="/login" element={<Authpage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
