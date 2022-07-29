import React from 'react'
import corazon from '../images/corazon.png'
import mensajes from '../images/mensajes.png'
import pikachu from '../images/pikachu.webp'
import comentarios from '../images/comentarios.png'
import enviar from '../images/enviar.png'
import guardado from '../images/guardado.png'

const DesignPost = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={pikachu} alt="" />
            </a>
            <div className='flex items-center justify-between px-3 mt-2'>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <img src={corazon} alt="" />
                        <p className='text-xs'>300K</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <img src={comentarios} alt="" />
                        <p className='text-xs'>150K</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <img src={enviar} alt="" />
                        <p className='text-xs'>26K</p>
                    </div>

                </div>
                <div className='-mt-4'>
                    <img src={guardado} alt="" />
                </div>
            </div>
            <div class="p-5">
                <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    )
}

export default DesignPost