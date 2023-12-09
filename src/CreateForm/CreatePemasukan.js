import Layout from '../CMSLayout';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function CreatePemasukan() {
    const [formData, setFormData] = useState({
        p_IDUSER: '1',
        p_IDKATPEMASUKAN: '',
        p_IDPEMASUKAN: '11',
        p_NOMINAL: '',
        p_METODEPEMBAYARAN: '',
        p_TANGGAL: '',
        p_DESKRIPSI: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/pemasukan/create-pemasukan', formData);
            // Optionally: Add a success message or redirect the user
            console.log('Pemasukan created successfully');
        } catch (error) {
            console.error('Error creating pemasukan:', error);
            console.log(formData);
            // Optionally: Handle error, display a message, etc.
        }
    };

    return (
        <Layout>
            <div className="text-xl font-extrabold mb-4">Create Pemasukan</div>
            <div className='UserProfile'>
                <div className="bg-white p-4 mb-4 rounded shadow">
                    <div className="mb-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label for="idKatPemasukan" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Kategori Pemasukan</label>
                                <select
                                    type="number"
                                    id="idKatPemasukan"
                                    name="p_IDKATPEMASUKAN"
                                    value={formData.p_IDKATPEMASUKAN}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value='1'>Menghutang</option>
                                    <option value='2'>Memberi Pinjaman</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label for="nominal" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Nominal</label>
                                <input
                                    type="number"
                                    id="nominal"
                                    name="p_NOMINAL"
                                    value={formData.p_NOMINAL}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label for="metodePembayaran" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Metode Pembayaran</label>
                                <input
                                    type="text"
                                    id="metodePembayaran"
                                    name="p_METODEPEMBAYARAN"
                                    value={formData.p_METODEPEMBAYARAN}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label for="tanggal" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Tanggal</label>
                                <input
                                    type="date"
                                    id="tanggal"
                                    name="p_TANGGAL"
                                    value={formData.p_TANGGAL}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label for="deskripsi" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-dark">Deskripsi</label>
                                <textarea
                                    id="deskripsi"
                                    name="p_DESKRIPSI"
                                    value={formData.p_DESKRIPSI}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></textarea>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreatePemasukan;