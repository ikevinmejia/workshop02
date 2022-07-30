import React, { useEffect, useState } from 'react'
import { urlUser } from '../helpers/urls'
import { BiTrash } from "react-icons/bi";
import { patchData } from '../helpers/CRUD';


const CardProfile = () => {

    const [pintar, setPintar] = useState([])


    useEffect(() => {
        getItems()
            .then(pintaritems => setPintar(pintaritems))
    },[pintar])

    const getItems = async () => {
        const resp = await fetch(`${urlUser}/19`)
        const data = await resp.json()
        const {photos} = data;
        const dataimport = photos.map((datos) => {

            return{
                img:datos.img,
                id:datos.id
            }
        })

        return dataimport
    }

    const handleDelete = (i) => {
        const bol = window.confirm("Estas seguro que deseas borrar la imagen ?")
        if(bol === true){
            patchData(`${urlUser}/19`,{photos:[]})
        }
    }

    console.log();
  return (
    <>
    {
        pintar.map((items,i) => (
            <div className='relative mx-5 mt-10 grid grid-cols-2 gap-5 overflow-y-auto h-60' key={i}>
                <img className='w-36 rounded-xl relative' src={items.img} alt="posts" />
                <BiTrash onClick={handleDelete} size={20} color="white"  className="absolute mt-2 ml-2"/>
            </div> 
        ))  
    }
    </>
  )
}

export default CardProfile