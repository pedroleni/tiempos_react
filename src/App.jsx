
import './App.css'
import Countdown from './components/Countdown/Countdown'
import DigitalClock from './components/DigitalClock/DigitalClock'
import Stopwatch from './components/Stopwatch/Stopwatch'
import Footer from './components/Footer/Footer'




function App() {
  

  return (
    <div className="App">
      <DigitalClock/>
      <Countdown/>
      <Stopwatch/>
      <Footer/>
      
    </div>
  )
}

export default App
