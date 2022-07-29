import React, { useContext, useState } from "react";
import { postData } from "../helpers/CRUD";



function FormModal({ showModal, setShowModal }) {

    const [nameUser, setNameUser] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const url = "https://data-sprint-02.herokuapp.com/post"


    const onChange = ({ target }, setState) => {
        setState(target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();

        const editInfo = {
            "name": nameUser,
            "img": link,
            "description": description,
            comentarios: []
        }

        postData(editInfo, url)
        setShowModal(!showModal)
    }





    return (
        <>
            {/* <!-- Main modal --> */}
            <div
                id="defaultModal"
                tabIndex="-1"
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-11/12 mx-auto overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
                aria-modal="true"
                role="dialog"
            >
                <div className="relative w-full h-full max-w-2xl p-4 md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                                Public Post
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick=""
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}

                        <form className="w-full p-4 mx-auto" onSubmit={onSubmit}>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-2 text-lg font-medium text-textPrimary"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-textPrimary rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-lg font-medium placeholder:text-lg placeholder:font-medium"
                                        placeholder="Name"
                                        required
                                        onChange={(e) => onChange(e, setNameUser)}
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-lg font-medium text-textPrimary"
                                >
                                    Link IMG
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-textPrimary rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-lg font-medium placeholder:text-lg placeholder:font-medium"
                                    placeholder="URL"
                                    required
                                    onChange={(e) => onChange(e, setLink)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-lg font-medium text-textPrimary"
                                >
                                    Description
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-textPrimary rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-lg font-medium placeholder:text-lg placeholder:font-medium"
                                    placeholder="Is pretty"
                                    required
                                    onChange={(e) => onChange(e, setDescription)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-textPrimary gradient hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center mt-5 text-lg font-medium "
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormModal;