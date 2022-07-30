import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiDotsHorizontalRounded, BiX } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import CardProfile from '../components/CardProfile';
import NavBar from '../components/NavBar';
import { patchData } from '../helpers/CRUD';
import { urlUser } from '../helpers/urls';

const Profile = () => {

    const [Profile, setProfile] = useState([])
    const [nombre, setNombre] = useState()
    const element = document.querySelector(".clickonoff")
    const id = localStorage.getItem("id")

    useEffect(() => {
        getData();
    }, [Profile])

    const getData = async () => {
        const resp = await fetch(`${urlUser}/${id}`)
        const data = await resp.json()
        setProfile(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await patchData(`${urlUser}/${id}`, { name: nombre })
        element.classList.replace("flex", "hidden")
    }
    const handleOnChangeName = ({ target }) => {
        setNombre(target.value)
    }

    const apachurramesta = () => {

        if (element.classList.contains("flex")) {
            element.classList.replace("flex", "hidden")
        } else {
            if (element.classList.contains("hidden")) {
                element.classList.replace("hidden", "flex")
            }
        }
    }

    const { name, imgProfile, imgBanner } = Profile;

    return (
        <div className='container m-0'>
            <header className='relative flex justify-between'>
                <NavLink to="/Home" className="z-10 mt-5 ml-5 h-36">
                    <BiChevronLeft color='white' size={45} />
                </NavLink>
                <BiDotsHorizontalRounded onClick={apachurramesta} color='white' size={45} className="z-10 mt-5 mr-5" />
                <form onSubmit={handleSubmit} className='absolute right-0 z-50 items-center justify-center hidden mr-5 bg-white clickonoff top-14 rounded-3xl'>
                    <input onChange={handleOnChangeName} className='border-transparent border-none rounded-l-3xl focus:border-transparent focus:ring-0' type="text" placeholder='Edit name' />
                    <button className='mr-2' type='submit'>Ok</button>
                </form>
                <img className='absolute top-0 z-0 w-full h-[220px]' src={imgBanner} alt="portada" />
            </header>
            <main className='m-0 container bg-[#d6999291]'>
                <section className='flex items-center justify-center mt-5 gap-7'>
                    <div className='flex flex-col items-center justify-center mt-5'>
                        <h1 className='text-base font-bold'>10.7 M</h1>
                        <p className='text-sm font-semibold'>Followers</p>
                    </div>
                    <div>
                        <img className='relative w-24 border-2 border-blue-400 border-solid rounded-full' src={imgProfile} alt="profile" />

                    </div>
                    <div className='flex flex-col items-center justify-center mt-5'>
                        <h1 className='text-base font-bold'>108.3 M</h1>
                        <p className='text-sm font-semibold'>Links</p>
                    </div>
                </section>
                <section className='flex flex-col items-center justify-center gap-7'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-base font-bold'>{name}</h1>
                        <p className='text-sm font-semibold'>J. Hello Guys</p>
                        <p className='text-sm font-semibold'>Follow me and like my post</p>
                    </div>
                    <div className='flex justify-around w-full gap-10'>
                        <button className='bg-[#EB5E5C] w-1/3 h-10 rounded-xl'><h1 className='text-lg font-extrabold text-white'>Follow</h1></button>
                        <button className='bg-[#EB5E5C] w-1/3 h-10 rounded-xl'><h1 className='text-lg font-extrabold text-white'>Messages</h1></button>
                    </div>
                </section>
                <section className='mt-5 bg-white rounded-t-3xl'>
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