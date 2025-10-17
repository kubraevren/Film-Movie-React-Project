
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import RouterConfig from './config/RouterConfig'

function App() {

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <RouterConfig />
      </BrowserRouter>
    </div>
  )
}

export default App
