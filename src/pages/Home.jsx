import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNameTrainer } from '../store/slices/trainer.slice';

const Home = () => {
    
    const dispatch= useDispatch()
    const navigate=useNavigate()

    const handleSumit=e=>{
        e.preventDefault()
        dispatch(setNameTrainer(e.target.input.value.trim()));
        e.target.input.value = ''
        navigate('/pokedex')
    }

    
  return (  
    <div>
        <h1>Poke dex</h1>
        <h2>hi Trainer</h2>
        <p>to start this pokedex, give me your name</p>
        <form onSubmit={handleSumit} >
            <input id='input' placeholder='your name' type="text" />
            <button>Start</button>
        </form>
    </div>
  )
}

export default Home