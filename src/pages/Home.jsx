import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNameTrainer } from '../store/slices/trainer.slice';
import '../App.css';
import './home.css'
import img from '../assets/image12.png'

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
    <div className='allhome'>
      <div className='pod'>
        <img className='pok' src={`${img}`} alt="" />
        <div className='r'>
        <h2 className='hi'>¡hi Trainer!</h2>
        <p className='to'>to start this pokedex, give me your name</p>
        </div>
        <form onSubmit={handleSumit} >
            <input className='inputt' id='input' placeholder='your name' type="text" />
            <button className='btn3'>Start</button>
        </form>
        </div>
        <div className='contentred'>
          <div className='contentblack'>
            <div className='circ'>
              <div className='adent'>
              <i class='bx bxs-cog bx-lg bx-spin'></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home