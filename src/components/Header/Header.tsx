import { FC } from 'react'
import { MdPets } from 'react-icons/all'
import { Box, Flex } from '@chakra-ui/react'

import { Navbar } from '@/components/Navbar/Navbar.tsx'

const Header: FC = () => {
	return (
		<Flex as={'header'} bg={'yellow.300'} columnGap={10} alignItems={'center'}>
			<Box padding={2} width={'50px'}><MdPets color={'blue'} size={40} /></Box>
			<Navbar />
		</Flex>
	)
}

export { Header }