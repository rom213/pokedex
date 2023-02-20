import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../App.css'
const Pokemon = ({url}) => {
    const [poke, setpoke] = useState()
    const [habi, sethabi] = useState()
    useEffect(() => {
        axios.get(url)
            .then(res=> setpoke(res.data))
            .catch(err=>console.log(err))
    }, [])
    useEffect(() => {
     if (poke) {
        if(poke.types.length===1){
            sethabi(true)
        } else{
            sethabi(false)
        }
     }
    }, [poke])

  return (
    <div className={`tarjet ${poke?.types[0].type.name}`}>
    <div className={`aden`}>
    <div className={`sec2 ${poke?.types[0].type.name}`}> 
    <img className='img1' src={poke?.sprites.other.home.front_shiny} alt="" />
        <div className='s'>
        <h3>{poke?.name}</h3>
        { habi ?
        <b>{poke?.types[0].type.name}</b>
        :
        <b>{poke?.types[0]?.type.name}/{poke?.types[1]?.type.name}</b>
         }
        </div>
        <span>type</span>
        <div className='stats'>
            <div className='s'>
                <span>HP</span>
                <b>{poke?.stats[0]?.base_stat}</b>
            </div>
            <div className='s'>
                <span>ATTACK</span>
                <b>{poke?.stats[1]?.base_stat}</b>
            </div>
            <div className='s'>
                <span>DEFENSE</span>
                <b>{poke?.stats[2]?.base_stat}</b>
            </div>
            <div className='s'>
                <span>SPEED</span>
                <b>{poke?.stats[5]?.base_stat}</b>
            </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Pokemon