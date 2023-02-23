import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNameTrainer } from '../store/slices/trainer.slice';
import '../App.css';
import './home.css'

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
        <img className='pok' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1677456000&Signature=Bf~9YWfdyaygeJZfR~jmeOnzjsTWh22HeHuKTeqN~CGvV7~oK7oFYsceY4pQ0nA1eVKp-gTAwyqx5eenbDffD30pyCWkDPvqizMPT0Z2~sFSEbyOim2qu8mZR0dTXZUUHGQGRTpZAL-Ra~zTjrgh~mNIUb-w~9ndyMYP9mdLOQOAn~vKF8djfcjmYKCVjNDwTYRZ3yhNpYLfBzstr05ZMSfLD50rOtxpju2OZHqukI~ysvi-ZD8~c1HiLPahXVcXOAdbMop2u7dQJABGlYwAf5K68X~wh8qIpH0fyDk~WDnpnRYySK7PX8XeOWFkSKzYsA86lV0Vo6dl6Y1zRPL2sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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