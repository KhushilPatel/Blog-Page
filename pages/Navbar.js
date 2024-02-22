import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className='bg-purple-500'>
            <ul className='flex justify-around'>
                <li><button onClick={e=>{
                    router.push({
                        pathname:"/home"
                    })
                }}>
                    Home
                </button></li>
                <li><button onClick={e => {
                    router.push({
                        pathname: "/blog"
                    })
                }}>Blog</button></li>
                <li>ContactUs</li>
            </ul>
        </nav>
    )
}

export default Navbar
