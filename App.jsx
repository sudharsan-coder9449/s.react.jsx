import { Route, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import Crew from './components/Crew'
import Tickets from './components/Tickets'
import Services from './components/Services'
import StateProcess from './components/StateProcess'
import FormHandling from './components/FormHandling'
import CollectionForm from './components/CollectionForm'
import ShowDatas from './components/ShowDatas'

// NEW COMPONENTS
import Tailwind from './components/Tailwind'
import Circle from './components/Circle'
import Day_8 from './components/Day_8'
import Button from './components/Button'
import Event from './components/Event'

const App = () => {
  return (
    <div className="App">
      
      <NavBar />

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<Crew />} />
          <Route path='/product' element={<Tickets />} />
          <Route path='/service' element={<Services />} />
          <Route path='/state' element={<StateProcess />} />
          <Route path='/form' element={<FormHandling />} />
          <Route path='/collectionform' element={<CollectionForm />} />
          <Route path='/showdatas' element={<ShowDatas />} />

          <Route path='/button' element={<Button />} />
          <Route path='/event' element={<Event />} />
          <Route path='/tailwind' element={<Tailwind />} />
          <Route path='/circle' element={<Circle />} />
          <Route path='/practice' element={<Practices />} />
          <Route path='/day8' element={<Day8 />} />
          <Route path='/day8' element={<Day8 />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
