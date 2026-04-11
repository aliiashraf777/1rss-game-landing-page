import './App.scss';
import Header from './components/header/Header';
import Home from './pages/Home';
 
// import swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
