import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Title from './components/Title/Title'
import './variables.css'

function App() {
  const [mydata, setMydata] = useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        setMydata(response.data.results)
        console.log(page);
      })
    }, [page])
    console.log(mydata);

    const nextPage = () => {
      setPage(page + 1)
    }
    const prevPage = () => {
      if(page > 1){
        setPage(page - 1)
      }
    }

    const checkPage = (x) => {
      if(x === 1){
        return {color: "grey"}
      } else {
        return {color: "white"}
      }
    }


  return (
    <>
    <h1 style={checkPage(page)} onClick={prevPage}>Prev</h1>
    <h1>{page}</h1>
    <h1 onClick={nextPage}>Next</h1>
    {mydata.length === 0 ? (
      <h1>Тут ничего нет</h1>
    ) : (
      <>
      {
        mydata.map((element, i ) => (
         
          <Title myStyle='small' key={element.id} text={[element.name ,element.status]}/>
      
         
        ))
      } 
      </>
    )}
      


    

    </>
  )
}

export default App
