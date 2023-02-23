import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './buscador.css'

const Buscador = ({setestado, setfirst, setarra,setuno }) => {
    const [type, settype] = useState()
    const [sec, setsec] = useState()
    
    const [mundos, setmundos] = useState()


    useEffect(() => {
      const url='https://pokeapi.co/api/v2/type/'
      axios.get(url)
        .then(res=>settype(res.data))
        .catch(err=>console.log(err))
    }, [])


    useEffect(() => {
        if (sec) {
            axios.get(sec)
                .then(res=>{
                    setmundos(res.data)
                })
                .catch(err=>console.log(err))
        }

    }, [sec])

        useEffect(() => {
            if(mundos){
                setfirst(mundos.pokemon.length)
                const final=mundos.pokemon.length
                const arr=[]
                for (let index = 0; index <= final; index++) {
                    arr.push(mundos?.pokemon?.[index]?.pokemon)
                }
                setarra(arr);
            }
        }, [mundos])
        

    

    const handlechange=e=>{
        e.preventDefault()
        if (e.target.value==='all') {
            setestado(true)
            setestado(false)
            setfirst('all')
            setuno(true)
        }else{
            setuno(false)
            setestado(false)
            setsec(e.target.value)
        }
    }
  return (
    <div>
        <div>
            <select  className='co' onChange={handlechange}>
                <option value="all">all</option>
                {
                    type?.results?.map(types=>{
                       return <option  key={types.url} value={types.url}>{types.name}</option>
                    })
                }
            </select>
        </div>
    </div>
  )
}

export default Buscador