import { Home, About, Portfolio, Contact } from './Pages'
import { NavBar, CopyRight } from './components/index'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <CopyRight />
    </div>
  )
}

export default App
