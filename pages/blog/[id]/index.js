import React from 'react'
import { useRouter } from 'next/router';

const index = ({ user }) => {
    console.log(user?.data?.attributes?.Listing_Image?.data?.attributes?.url);
    const router=useRouter();
    return (<>
   
    <div className='flex justify-center'>

              <button  className='border-4 bg-amber-400' onClick={e=>router.push(`/`)}>Go to home page</button>
    </div>
        <div className='flex bg-yellow-50 '>
            <div className='w-6/12 '>
                <img src={user?.data?.attributes?.Listing_Image?.data?.attributes?.url} alt="" />
                <div className="text-2xl font-bold mb-4 text-center" dangerouslySetInnerHTML={{ __html: user?.data?.attributes?.Title }}></div>
                <div className='mb-4' dangerouslySetInnerHTML={{ __html: user?.data?.attributes?.Description }}></div>
            </div>
            <div className='border-spacing-3 border-orange-300 my-[480px]  mx-9 min-w-32 max-h-fit px-4 py-5 bg-slate-400 rounded shadow-lg'>
                <h2>Table Of Contents:</h2>
                <ul>
                <li>{user?.data?.attributes?.Table_Of_Content.map((item)=>{
                    return <div key={item.id}>{item.Title}</div>
                })}</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default index


export const getServerSideProps = async ({ params }) => {
    // Fetch data from external API or a CMS using the provided params
    const res = await fetch(`https://cms.linearloop.io/api/blogs/${params.id}?populate=*&pagination[page]=1&pagination[pageSize]=18&sort[0]=createdAt:desc`);
    const user = await res.json();

    if (!user) {
        return {
            notFound: true,
        }
    }       

    return {
        props: { user }, // will be passed to the page component as props
    }
}