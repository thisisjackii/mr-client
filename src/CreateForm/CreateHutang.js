import Layout from '../CMSLayout';
import React from 'react';
import '../App.css';

function CreateHutang() {
    return (
        <Layout>
            <div className="text-xl font-extrabold mb-4">Create Hutang</div>
            <div className='UserProfile'>
                <div className="bg-white p-4 mb-4 rounded shadow">
                    <div className="mb-4">
                        <form>
                            <div className="mb-6">
                                <label for="deskripsi" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Deskripsi</label>
                                <textarea id="deskripsi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                            </div>
                            <div className="mb-6">
                                <label for="tanggal" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Tanggal</label>
                                <input type="date" id="tanggal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </div> 
                            <div className="mb-6">
                                <label for="nominal" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Nominal</label>
                                <input type="number" id="nominal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </div> 
                            <div className="mb-6">
                                <label for="jenis" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Jenis</label>
                                <select type="number" id="jenis" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value='Menghutang'>Menghutang</option>
                                    <option value='Memberi Pinjaman'>Memberi Pinjaman</option>
                                </select>
                            </div> 
                            <div className="mb-6">
                                <label for="namaRekan" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Nama Rekan</label>
                                <input type="text" id="namaRekan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </div> 
                            <div className="mb-6">
                                <label for="metodePembayaran" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Metode Pembayaran</label>
                                <input type="text" id="metodePembayaran" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </div> 
                            <div className="mb-6">
                                <label for="tanggalJatuhTempo" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Tanggal Jatuh Tempo</label>
                                <input type="date" id="tanggalJatuhTempo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </div> 
                            <div className="mb-6">
                                <label for="status" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Status</label>
                                <select type="number" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value='Lunas'>Lunas</option>
                                    <option value='Belum Lunas'>Belum Lunas</option>
                                </select>
                            </div>                             
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateHutang;