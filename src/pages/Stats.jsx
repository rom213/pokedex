import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import './stats.css'
import img from '../assets/image12.png'

const Stats = () => {
    const {arraypoke}=useSelector(state=>state)
    const [habit, sethabit] = useState()
    console.log(arraypoke);

    useEffect(() => {
      if (arraypoke) {
         if(arraypoke.types.length===1){
             sethabit(true)
         } else{
             sethabit(false)
         }
      }
     }, [arraypoke])

  return (
    <div>
              <div className='arr'>
                <img className='pokedex' src={`${img}`} alt="" />
                <div className='ne'>
                    <div className='circle'>
                        <div className='circle1'>
                        <i class='bx bxs-cog bx-lg bx-spin'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div>
              <div className='container'>
                <div className={`contimg ${arraypoke.types[0].type.name}`}>
                  <img className='img' src={arraypoke.sprites.other.home.front_shiny} alt="" />
              </div>
              <div className='contnumber'>
                    <strong>#{arraypoke.id}</strong>
              </div>
              <div className='contentname'>
                <div className='raya'></div>
                <h2>{arraypoke.name}</h2>
                <div className='raya'></div>
              </div>
              <div className='contstat'>
                <div className='sta'>
                    <span>Peso</span>
                    <b>{arraypoke.weight}</b>
                </div>
                <div className='sta'>
                <span>Altura</span>
                <b>{arraypoke.height}</b>
                </div>
              </div>

              <div>

              { habit ?
                <div className='all'>
                <div className='type'>
                <h2>type</h2>
                  <div className='contentypes'>
                  <div className={`cuatype ${arraypoke?.types[0]?.type.name}`}>
                    <b>{arraypoke?.types[0]?.type.name}</b>
                  </div>
                  </div>
                </div>

                <div className='type'>
                    <h2>skills</h2>
                    <div className='contentypes'>
                    
                        {
                          arraypoke.abilities.map(habi=>{
                              return <div className='cuatype'>{habi.ability.name}</div>
                          })

                        }
                    </div>

                </div>

                </div>
                  :
                  <div className='all'>
                  <div className='type'>
                  <h2>type</h2>
                    <div className='contentypes'>
                    <div className={`cuatype ${arraypoke?.types[0]?.type.name}`}>
                      <b>{arraypoke?.types[0]?.type.name}</b>
                    </div>
                    <div className={`cuatype ${arraypoke?.types[1]?.type.name}`}>
                    <b>{arraypoke?.types[1]?.type.name}</b>
                    </div>
                    </div>
                  </div>

                  <div className='type'>
                      <h2>skills</h2>
                      <div className='contentypes'>
                      
                          {
                            arraypoke.abilities.map(habi=>{
                                return <div className='cuatype'>{habi.ability.name}</div>
                            })

                          }
                      </div>

                  </div>

                  </div>

         }
              </div>


              <div className='contstats'>
                <div className='contitle'>
                  <h1>Stats</h1>
                  <div className='linea'></div>
                  <i  class='bx bx-analyse bx-spin bx-lg'></i>
                </div>
                <div className='containerALL'>
                  {
                    arraypoke.stats.map(stat=>{
                      return  <div>
                                 <div className='conts'>
                                    <b>{stat.stat.name}:</b>
                                    <div className='p'><b>{stat.base_stat}/150</b></div>
                                 </div>
                                 <div>
                                    <div className='cuacont'>
                                      <div className='relleno' style={{width:`${(stat.base_stat)*4}px`}}></div>
                                    </div>
                                 </div>
                              </div>


                    })


                  }

                </div>
              </div>
              </div>


            </div>
            <div className='conthabilidades'>
            <div className='contits'>
                  <h1>Movements</h1>
                  <div className='linea'></div>
                  <i  class='bx bx-analyse bx-spin bx-lg'></i>
            </div>
              <div className='contenmovements'>
              {
                arraypoke.moves.map(mov=>{
                  return <div className='contenmo'>
                     <div>{mov.move.name}</div>
                  </div>
                })
              }
              </div>
            </div>
    </div>
  )
}

export default Stats