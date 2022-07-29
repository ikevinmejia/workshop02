import React, { useState } from 'react'
import logo from '../images/logo.png'
import corazon from '../images/corazon.png'
import mensajes from '../images/mensajes.png'
import DesignPost from './DesignPost'
import NavBar from './NavBar'
import FormModal from './FormModal'

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className='container h-screen p-5 overflow-hidden' >
            <div className='flex items-center justify-between'>
                <img src={logo} alt="" className='w-52' />
                <div className='flex gap-2'>
                    <div>
                        <img src={corazon} alt="" className='object-cover' />
                    </div>
                    <div>
                        <img src={mensajes} alt="" />
                    </div>
                </div>
            </div>
            {showModal && <FormModal showModal={showModal}
                setShowModal={setShowModal}
            />

            }

            <div className='flex flex-col items-center gap-5 mt-10 overflow-y-scroll' style={{ height: "85%" }}>
                <DesignPost />
                <DesignPost />
                <DesignPost />
                <DesignPost />
            </div>



            <NavBar />

        </div>
    )
}

export default Home