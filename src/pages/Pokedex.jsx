import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../componets/Pokedex/Pokemon'
import '../App.css'
import Buscador from '../componets/Pokedex/Buscador'
import { useSelector } from 'react-redux'


const Pokedex = () => {
    const slider=document.querySelector('.slider')
    const [pokemon, setpokemon] = useState()
    const [paginacion, setpaginacion] = useState()
    const [select, setselect] = useState(0)
    const [pag, setpag] = useState()
    const [estado, setestado] = useState(true)
    const [first, setfirst] = useState(5000)
    const [arra, setarra] = useState()
    const [uno, setuno] = useState(true)
    const {nameTrainer}=useSelector(state=>state)
    const [cam, setcam] = useState(true)
    const [onepoke, setonepoke] = useState()
    const [error, seterror] = useState(false)
    const [dato, setdato] = useState()

    useEffect(() => {
        const url="https://pokeapi.co/api/v2/pokemon?limit=5000&offset=0"
        axios.get(url)
        .then(res=>setpokemon(res.data))
        .catch(err=>console.log(err))
    }, [])

    useEffect(() => {
        if (dato) {
            seterror(false)
            seterror(true)
            setpag(`https://pokeapi.co/api/v2/pokemon/${dato}`)
            setdato(null)
        }
    }, [dato])

    


    useEffect(() => {
        if (first==='all') {
            setfirst(pokemon.results.length);
        }
        setestado(true)
        seterror(false)
    }, [first])


    
    useEffect(() => {
        setestado(true)
        if (pokemon) {
            let num=Math.ceil((first)/12)
            if (num < 10) {
                setcam(false)
            }else{
                setcam(true)
            }
            let arreglo=[]
            for (let index = 1; index < num; index++) {
                  arreglo.push(index)
            }
            setpaginacion(arreglo)
            setselect(1)
        }
    }, [pokemon,first])

    useEffect(() => {
        setestado(true)
        if (pokemon) {
            let poke=pokemon?.results
            if (!uno) {
                poke=arra
            }
            const inicio=select*12
            let final=inicio+12;
            let print=[]
            if ((first)<=final) {
                final=(first)
            }
            for (let index = inicio; index < final; index++) {
                print.push(poke?.[index])
            }
            setpag(print)
            }

        
    }, [pokemon,select,first])
    

const handleclick=e=>{
    setselect(e.target.parentElement.id)
    setestado(true)
    setestado(false)
}  

const handleSumit=e=>{
        setdato(e.target.input.value)
        e.target.input.value=''
}


  if (error) {
    return(
        <div>
                        <div className='arr'>
                <img className='pokedex' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1677456000&Signature=Bf~9YWfdyaygeJZfR~jmeOnzjsTWh22HeHuKTeqN~CGvV7~oK7oFYsceY4pQ0nA1eVKp-gTAwyqx5eenbDffD30pyCWkDPvqizMPT0Z2~sFSEbyOim2qu8mZR0dTXZUUHGQGRTpZAL-Ra~zTjrgh~mNIUb-w~9ndyMYP9mdLOQOAn~vKF8djfcjmYKCVjNDwTYRZ3yhNpYLfBzstr05ZMSfLD50rOtxpju2OZHqukI~ysvi-ZD8~c1HiLPahXVcXOAdbMop2u7dQJABGlYwAf5K68X~wh8qIpH0fyDk~WDnpnRYySK7PX8XeOWFkSKzYsA86lV0Vo6dl6Y1zRPL2sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div className='ne'>
                    <div className='circle'>
                        <div className='circle1'>
                        <i class='bx bxs-cog bx-lg bx-spin'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='entre'>
                <h2 className='ent'>bienvenid@ {nameTrainer}</h2>
                <div className='tex'>aqui podras encontrar tu pokemon favorito</div>
            </div>
            <form onSubmit={handleSumit} className='bpo'>
                <input id='input' className='dat' placeholder='busca un pokemon' />
                <button className='btn2'>search</button>
            </form>
    
            <Buscador setestado={setestado}
            setfirst={setfirst}
            setarra={setarra} 
            setuno={setuno}
            />
            <div className='content'>
            {
            estado ?
            <Pokemon url={pag} 
            setestado={setestado} />

            :

            <div></div>
            }
            </div>
        </div>
    )

  }else{
    return (
        <div>
            <div className='arr'>
                <img className='pokedex' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1677456000&Signature=Bf~9YWfdyaygeJZfR~jmeOnzjsTWh22HeHuKTeqN~CGvV7~oK7oFYsceY4pQ0nA1eVKp-gTAwyqx5eenbDffD30pyCWkDPvqizMPT0Z2~sFSEbyOim2qu8mZR0dTXZUUHGQGRTpZAL-Ra~zTjrgh~mNIUb-w~9ndyMYP9mdLOQOAn~vKF8djfcjmYKCVjNDwTYRZ3yhNpYLfBzstr05ZMSfLD50rOtxpju2OZHqukI~ysvi-ZD8~c1HiLPahXVcXOAdbMop2u7dQJABGlYwAf5K68X~wh8qIpH0fyDk~WDnpnRYySK7PX8XeOWFkSKzYsA86lV0Vo6dl6Y1zRPL2sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div className='ne'>
                    <div className='circle'>
                        <div className='circle1'>
                        <i class='bx bxs-cog bx-lg bx-spin'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='entre'>
                <h2 className='ent'>bienvenid@ {nameTrainer}</h2>
                <div className='tex'>aqui podras encontrar tu pokemon favorito</div>
            </div>
            <form onSubmit={handleSumit} className='bpo'>
                <input id='input' className='dat' placeholder='busca un pokemon' />
                <button className='btn2'>search</button>
            </form>
    
            <Buscador setestado={setestado}
            setfirst={setfirst}
            setarra={setarra} 
            setuno={setuno}
            />
    
            {
                estado ?
            <div>
            <div className='content'>
            {

            pag?.map(poke=>{
               return  <Pokemon url={poke.url} 
                setfirst={setfirst} 
                />
            })
            
            }
            </div>
            </div>:
            <div></div>
            }
    
    <div className='cont'>
        {
        cam ?
        <div className='control prev'><i onClick={()=>slider.scrollLeft -= 300} class='bx bxs-left-arrow  bx-lg'></i></div>
        :
        <div></div>
        }
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
            {
                cam ?
            <div className='control next'><i onClick={()=>slider.scrollLeft += 300} className='control next' class='bx bxs-right-arrow bx-lg'></i></div>
            :
            <div></div>
        }
            </div>
            </div>
      )
    }

  }

  

export default Pokedex