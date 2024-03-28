import './App.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Data from "./data.js"
function App() {
  const data = Data.map(item =>{
    return (
     < Card 
      key={item.id}
      {...item}
      /> )
    })

  return (
    <>
      <Navbar/>
      <section className='cards-list'>
      {data}
      </section>
    </>
  )
}

export default App
