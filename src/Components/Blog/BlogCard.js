import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const BlogCard = ({blog,isAdmin,refetch}) => {
    const {title,img,description,_id} = blog;
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };

    const deleteHandler = ()=>{

        const proceed = window.confirm(
            "Are you sure, you want to delete this Blog"
        );
        if (proceed) {
            fetch(`https://cottage-home-care-services-server-site.vercel.app/blogs/${blog?._id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Blog Delete SuccessFully')
                        refetch();

                    }
                    

                })
            
        }
    }
    return (
        <div class="flex justify-center"
         data-aos="zoom-in"
         data-aos-duration="2000">
                        <div
                            class="block max-w-sm rounded-lg bg-white shadow-lg  mt-3">
                           {
                            blog?.newImg == null ? 
                            <>
                             <div>
                                <img
                                    class="rounded-t-lg"
                                    src={img}
                                    alt="" 
                                    className='h-64 w-full'/>
                            </div>
                            </>
                            :
                            <>
                             <div>
                                <img
                                    class="rounded-t-lg"
                                    src={blog?.newImg}
                                    alt="" 
                                    className='h-64 w-full'/>
                            </div>
                            </>
                           }
                            <div class="p-6">
                                {
                                    blog?.date &&
                                    <p className='mb-2 text-neutral-600 '>{blog?.date}</p>
                                }
                                {
                                    blog?.newDate && 
                                    <p className='mb-2 text-neutral-600'>

                                    {new Date(blog?.newDate).toLocaleString(undefined, options)}
    
                                    </p>

                                }
                               
                                <h5
                                    class="mb-2 text-lg font-medium leading-tight text-neutral-800  ">
                                    {title}
                                </h5>
                                
                                    {
                                        description?.[0].content?.length >= 200 ? 

                                        <p class="mb-4 text-base text-neutral-600 ">

                                                {
                                                    description?.[0].content?.slice(0,100) + "......"

                                                }

                                            </p>

                                            :
                                            <p class="mb-4 text-base text-neutral-600 ">

                                                {
                                                    description?.[0].content

                                                }

                                            </p>
                                        
                                    }
                                
                               

                                {
                                    isAdmin !== true ? 
                                    <>
                                    <Link
                               to={`/blogs/${_id}`}
                               >
                                    <button
                                    type="button"
                                    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2.5 text-xs font-medium   leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Continue Reading
                                </button>
                                </Link>
                                    </>
                                    :
                                    <>

                                    <div className='flex items-center gap-3'>
                                    <Link
                               to={`/blogs/${_id}`}
                               >
                                    <button

                                    type="button"
                                    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium   leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Continue Reading
                                </button>
                                </Link>
                                  <Link 
                                  
                                  to={`/singleBlogs/${_id}`}
                                  >
                                  
                                  <button
                                    type="button"
                                    class="inline-block rounded bg-secondary px-6 pt-2.5 pb-2 text-xs font-medium   leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Update
                                </button>
                                  </Link>
                                <button

                                onClick={deleteHandler}
                                    type="button"
                                    class="inline-block rounded bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium   leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Delete
                                </button>
                             
                                    </div>
                                    
                                    
                                    </>
                                }

                               
                               
                            </div>
                        </div>
                    </div>
    );
};

export default BlogCard;