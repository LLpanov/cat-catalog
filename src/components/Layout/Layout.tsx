import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/Navbar/Navbar.tsx'

const Layout: FC = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export { Layout }