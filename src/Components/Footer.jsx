import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

function Footer() {
// Fatch the current year automatically.
    const currentDate = new Date();
    const year = currentDate.getFullYear();


  return (
    <>
        <footer className='relative left-0 bottom-0 h-[10vh] py-10 flex flex-col sm:flex-row items-center justify-between text-white bg-slate-800 sm:px-20'>
            <section className='text-lg text-red-500'>
                Copyright {year} | All rights reserved
            </section>

            <section className='flex items-center justify-center gap-8 text-3xl text-white'>
                <a className='hover:text-sky-500 transition-all ease-in-out duration-300'>
                    <BsFacebook />
                </a>

                <a className='hover:text-sky-500 transition-all ease-in-out duration-300'>
                    <BsInstagram />
                </a>

                <a className='hover:text-sky-500 transition-all ease-in-out duration-300'>
                    <BsLinkedin />
                </a>

                <a className='hover:text-sky-500 transition-all ease-in-out duration-300'>
                    <BsTwitter />
                </a>

                <a className='hover:text-sky-500 transition-all ease-in-out duration-300'>
                    <BsYoutube />
                </a>

            </section>
        </footer>
    </>
  )
}

export default Footer;