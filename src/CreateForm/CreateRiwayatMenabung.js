import Layout from '../CMSLayout';
import React from 'react';
import '../App.css';

function CreateRiwayatMenabung() {
    return (
        <Layout>
            <div className="text-xl font-extrabold mb-4">Create Riwayat Menabung</div>
            <div className='UserProfile'>
                <div className="bg-white p-4 mb-4 rounded shadow">
                    <div className="mb-4">
                        <form>
                        <div className="mb-6">
                                <label for="wishlist" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Wishlist</label>
                                <select id="wishlist" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                </select>
                            </div>    
                            <div className="mb-6">
                                <label for="nominal" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Nominal</label>
                                <input type="number" id="nominal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </div>   
                            <div className="mb-6">
                                <label for="tanggal" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Tanggal</label>
                                <input type="date" id="tanggal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </div>                                                            
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateRiwayatMenabung;