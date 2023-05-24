import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useQuery } from 'react-query';
import OfficeMessage from '../../../Shared/DeleteOfOfficeMessage/OfficeMessage';
import Loading from '../../../Shared/Loading/Loading';
import OfficeModal from '../OfficeModal/OfficeModal';

const LongIsland = () => {

    const [message, setMessage] = useState('')
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);


    const url =
        `https://cottage-home-care-services-server-site.vercel.app/office/LongIsland?page=${page}&size=${size}`

    const { data: { messages, count } = [], isLoading, refetch } = useQuery({
        queryKey: ['Long Island Office', page, size],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const pages = Math.ceil(count / size);
    console.log(count, size)

    const messageHandler = (message) => {
        setMessage(message)

    }

    // console.log(messages)

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead className=''>
                        <tr>
                            <th className=''>Serial</th>
                            <th>Date Time</th>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact Office Name</th>
                            <th>Message</th>
                            <th> Delete </th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            messages?.map((message, index) => <tr className="hover"
                                key={message._id}>
                                <th >{index + 1}</th>
                                <td className=' '>{new Date(message.time).toLocaleString()} </td>
                                {/* <td>
                                    <div className="avatar">
                                        <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={message?.img} alt='' />
                                        </div>
                                    </div>
                                </td> */}
                                {
                                    message?.photoURL == null ?

                                        <>

                                            <td>
                                                <div className="avatar">
                                                    <div className="avatar  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <FaUser className='w-10 h-10' />
                                                    </div>
                                                </div>
                                            </td>


                                        </>
                                        :
                                        <>
                                            <td>
                                                <div className="avatar">
                                                    <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={message?.photoURL} alt='' />
                                                    </div>
                                                </div>
                                            </td>
                                        </>


                                }
                                <td>{message?.name}</td>
                                <td> <a href={`mailto:${message?.email}`} className='text-primary'>{message?.email} </a> </td>
                                <td>{message?.officeName}</td>

                                <td>

                                    <label


                                        onClick={() => messageHandler(message)}

                                        htmlFor="office-details" className="text-sm bg-primary py-2 px-2 rounded-md text-white shadow-lg">
                                        See Message</label></td>

                                <th>
                                    <OfficeMessage
                                        refetch={refetch}
                                        id={message?._id}

                                    ></OfficeMessage>
                                </th>









                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <OfficeModal


                message={message}

            ></OfficeModal>

            <div>
                <p className='text-center mt-10 text-lg font-semibold'>Currently Selected page: <span className='text-primary'>{page + 1}</span></p>
                <div className='pagination my-3 flex justify-center'>
                    {
                        [...Array(pages).keys()].map(number => <button
                            key={number}
                            className={
                                page === number ? 'selected px-3 py-1 ml-3 cursor-pointer border-[1px] custom-shadow'
                                    :
                                    'px-3 py-1   text-gray-500 ml-3 cursor-pointer border-[1px] border-gray-300 hover:bg-[#444444] hover:text-white custom-shadow'

                            }
                            onClick={() => setPage(number)}
                        >
                            {number + 1}


                        </button>)
                    }

                    {
                        messages?.length <= 0 ? <>

                            <select className='ml-3 bg-white text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none px-2 py-2' onChange={event => setSize(event.target.value)}>
                                <option selected disabled className='hidden'>{`Page Size ${size}`}</option>

                                <option value="5" >Page Size 5</option>
                                <option value="10"  >Page Size 10</option>
                                <option value="15" >Page Size 15</option>
                                <option value="20" >Page Size 20</option>

                            </select>
                        </>
                            :
                            <>
                                <select className='ml-3 bg-white text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none px-2 ' onChange={event => setSize(event.target.value)}>
                                    <option selected disabled className='hidden'>{`Page Size ${size}`}</option>

                                    <option value="5" >Page Size 5</option>
                                    <option value="10"  >Page Size 10</option>
                                    <option value="15" >Page Size 15</option>
                                    <option value="20" >Page Size 20</option>

                                </select>

                            </>
                    }


                </div>
            </div>

        </div>
    );
};

export default LongIsland;