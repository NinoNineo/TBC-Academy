import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
