import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../componets/Pokedex/Pokemon'
import '../App.css'
import Buscador from '../componets/Pokedex/Buscador'


const Pokedex = () => {
    const slider=document.querySelector('.slider')
    const [pokemon, setpokemon] = useState()
    const [paginacion, setpaginacion] = useState()
    const [select, setselect] = useState(0)
    const [pag, setpag] = useState()
    const [estado, setestado] = useState(true)
    const [first, setfirst] = useState()
    const [arra, setarra] = useState()

    useEffect(() => {
        const url="https://pokeapi.co/api/v2/pokemon?limit=5000&offset=0"
        axios.get(url)
        .then(res=>setpokemon(res.data))
        .catch(err=>console.log(err))
    }, [])

    const handlechange=e=>{
        e.preventDefault()
        console.log(e.target.value)
    }
    useEffect(() => {
        if (first==='all') {
            setfirst(pokemon.results.length);
        }
        
    }, [first])


    
    useEffect(() => {
        if (pokemon) {
            let num=Math.ceil((first)/12)
            let arreglo=[]
            for (let index = 1; index < num; index++) {
                  arreglo.push(index)
            }
            setpaginacion(arreglo)
        }
    }, [pokemon,first])

    useEffect(() => {
        setestado(true)
        if (pokemon) {
            const inicio=select*12
            let final=inicio+12;
            let print=[]
            if ((first)<=final) {
                final=(first)
            }
            for (let index = inicio; index < final; index++) {
                print.push(pokemon?.results[index])
            }
            setpag(print)
            }

        
    }, [pokemon,select,first])
    

const handleclick=e=>{
    setselect(e.target.parentElement.id)
    setestado(false)
}


  return (
    <div>
        <div className='arr'>
            <div className='ne'>
                <div className='circle'>
                    <div className='circle1'>
                    <i class='bx bxs-cog bx-lg bx-spin'></i>
                    </div>
                </div>
            </div>
        </div>

        <Buscador setestado={setestado}
        setfirst={setfirst}
        />

        {
            estado ?
        <div>
        <div className='content'>
        {
        pag?.map(poke=>{
           return  <Pokemon url={poke.url} 
            setfirst={setfirst} 
            setarra={setarra} />
        })
        
        }
        </div>
        </div>:
        <div></div>
        }

<div className='cont'>
        <div className='control prev'><i onClick={()=>slider.scrollLeft -= 300} class='bx bxs-left-arrow  bx-lg'></i></div>
        <div className='slider'>
            {
                paginacion?.map(s=>{
                    return <div id={s}> <div id={s} onClick={handleclick} className='pagi'>
                    <h1>{s}</h1>
                </div>
                </div>
                })
            }
        </div>
         <div className='control next'><i onClick={()=>slider.scrollLeft += 300} className='control next' class='bx bxs-right-arrow bx-lg'></i></div>
        </div>
        </div>
  )
}

export default Pokedex