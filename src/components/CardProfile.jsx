import React, { useEffect, useState } from 'react'
import { urlUser } from '../helpers/urls'

const CardProfile = () => {

    const [pintar, setPintar] = useState([])

    useEffect(() => {
        getItems()
            .then(pintaritems => setPintar(pintaritems))
    })

    const getItems = async () => {
        const resp = await fetch(`${urlUser}/2`)
        const data = await resp.json()
        const {photos} = data;
        const dataimport = photos.map((datos) => {

            return{
                img:datos.img
            }
        })

        return dataimport
    }

  return (
    <>
    {
        pintar.map((items,i) => (
            <div className='relative mx-5 mt-10 grid grid-cols-2 gap-5 overflow-y-auto h-60' key={i}>
                <img className='w-36 rounded-xl' src={items.img} alt="posts" />
            </div> 
        ))  
    }
    </>
  )
}

export default CardProfile