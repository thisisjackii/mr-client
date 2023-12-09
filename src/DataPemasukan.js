import Layout from './CMSLayout';
import React from 'react';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function DataPemasukan() {

    const [pemasukanData, setPemasukanData] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/pemasukan/read-pemasukan`)
            .then((response) => {
                setPemasukanData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

    }, [setPemasukanData]);

    return (
        <Layout>
            <div class="flex justify-between ...">
                <div className="text-xl font-extrabold mb-4">Data Pemasukan</div>
                <td class="px-6 py-4 text-right">
                    <a href="/createpemasukan" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">+ Tambah Data</a>
                </td>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex flex-col overflow-x-auto">
                    <div class="sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-x-auto">
                                <table class="min-w-full text-left text-sm font-light">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">#</th>
                                            <th scope="col" class="px-6 py-4">ID User</th>
                                            <th scope="col" class="px-6 py-4">Kategori</th>
                                            <th scope="col" class="px-6 py-4">Nominal</th>
                                            <th scope="col" class="px-6 py-4">Metode Pembayaran</th>
                                            <th scope="col" class="px-6 py-4">Tanggal</th>
                                            <th scope="col" class="px-6 py-4">Deskripsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pemasukanData.map((pemasukan, index) => (
                                            <tr className="border-b dark:border-neutral-500" key={index}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{pemasukan[0]}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{pemasukan[1]}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{pemasukan[2]}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{pemasukan[3]}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{pemasukan[4]}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{pemasukan[5]}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{pemasukan[6]}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default DataPemasukan;