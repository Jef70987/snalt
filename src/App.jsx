import './App.css'
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Synaptik from './components/Pages/Synaptik';
function App() {
  

  return (
    <>
      <Router>
          <Routes>
              <Route path='/*' element = {<Synaptik/>}/>
          </Routes>
      </Router>
    </>
  )
}


export default App;
