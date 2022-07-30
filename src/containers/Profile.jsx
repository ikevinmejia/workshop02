import React, { useEffect, useState } from 'react'
import { BiChevronLeft,BiDotsHorizontalRounded,BiX } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import CardProfile from '../components/CardProfile';
import NavBar from '../components/NavBar';
import { patchData } from '../helpers/CRUD';
import { urlUser } from '../helpers/urls';

const Profile = () => {

    const [Profile, setProfile] = useState([])
    const [nombre, setNombre] = useState()
    const element = document.querySelector(".clickonoff")

    useEffect(() => {
        getData();
    },[Profile])

    const getData = async() => {
        const resp = await fetch(`${urlUser}/20`)
        const data = await resp.json()
        setProfile(data)    
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await patchData(`${urlUser}/20`,{name:nombre})
        element.classList.replace("flex","hidden")
    }
    const handleOnChangeName = ({target}) => {
            setNombre(target.value)
    }

    const apachurramesta = () => {
        
        if(element.classList.contains("flex")) {
            element.classList.replace("flex","hidden")
        }else{
            if(element.classList.contains("hidden")){
                element.classList.replace("hidden","flex")
            }
        }
    }
    
    const {name,imgProfile,imgBanner} = Profile;
  return (
    <div className='m-0 container'>
        <header className='relative flex justify-between'>
            <NavLink to="/Home" className="z-10 mt-5 ml-5 h-36">
                <BiChevronLeft color='white' size={45}/>
            </NavLink>
            <BiDotsHorizontalRounded onClick ={apachurramesta} color='white' size={45} className="z-10 mt-5 mr-5"/>
            <form onSubmit={handleSubmit} className='clickonoff hidden absolute right-0 z-50 bg-white top-14 mr-5 rounded-3xl justify-center items-center'> 
                <input onChange={handleOnChangeName} className=' border-none rounded-l-3xl border-transparent focus:border-transparent focus:ring-0' type="text" placeholder='Edit name' />
                <button className='mr-2' type='submit'>Ok</button>
            </form> 
            <img className='absolute top-0 z-0 w-full h-[220px]' src={imgBanner} alt="portada" />
        </header>
            <main className='m-0 container bg-[#d6999291]'>
                <section className='flex mt-5 gap-7 justify-center items-center'>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <h1 className='font-bold text-base'>10.7 M</h1>
                        <p className='font-semibold text-sm'>Followers</p>
                    </div>
                    <div>
                        <img className='w-24 rounded-full relative border-solid border-2 border-blue-400' src={imgProfile} alt="profile" />

                    </div>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <h1 className='font-bold text-base'>108.3 M</h1>
                        <p className='font-semibold text-sm'>Links</p>
                    </div>
                </section>
                <section className='flex flex-col gap-7 justify-center items-center'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <h1 className='font-bold text-base'>{name}</h1>
                        <p className='font-semibold text-sm'>J. Hello Guys</p>
                        <p className='font-semibold text-sm'>Follow me and like my post</p>
                    </div>
                    <div className='flex justify-around gap-10 w-full'>
                        <button className='bg-[#EB5E5C] w-1/3 h-10 rounded-xl'><h1 className='text-white font-extrabold text-lg'>Follow</h1></button>
                        <button className='bg-[#EB5E5C] w-1/3 h-10 rounded-xl'><h1 className='text-white font-extrabold text-lg'>Messages</h1></button>
                    </div>
                </section>
                <section className='bg-white rounded-t-3xl mt-5'>
                    <div className='flex justify-between mx-5'>
                        <h1 className='mt-2 font-normal text-lg text.[#2F2F2F]'>Photos</h1>
                        <h1 className='mt-2 font-normal text-lg text.[#2F2F2F]'>Videos</h1>
                        <h1 className='mt-2 font-normal text-lg text.[#2F2F2F]'>Album</h1>
                        <h1 className='mt-2 font-normal text-lg text.[#2F2F2F]'>Tag</h1>
                    </div>
                    <CardProfile />
                </section>
            </main>
        <NavBar />
        
    </div>
  )
}

export default Profile