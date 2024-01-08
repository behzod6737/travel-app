import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/travel/Main'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<div className=''>
		<Navbar/>
		<Main/>
		<Footer/>
	</div>
  )
}
