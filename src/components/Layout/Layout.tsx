import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { Header } from '@/components/Header/Header.tsx'

const Layout: FC = () => {
	return (
		<>
			<Header />
			<Box as={'main'} width={'100%'} height={'100%'}>
				<Outlet/>
			</Box>
		</>
	)
}

export { Layout }