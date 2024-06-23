import React from 'react'
import SocialBar from './myComponents/SocialBar'

function Footer() {
  return (
    <footer className='py-10 px-5 flex gap-5 justify-between items-center flex-col md:flex-row'>
      <p>©2024 Haytham Atef. All rights reserved.</p>
      <SocialBar className='flex gap-5' />
    </footer>
  )
}

export default Footer