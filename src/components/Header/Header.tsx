import { FC } from 'react'
import { MdPets } from 'react-icons/all'
import { Box, Flex } from '@chakra-ui/react'

import { Navbar } from '@/components/Navbar/Navbar.tsx'

const Header: FC = () => {
	return (
		<Flex as={'header'} bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)']} columnGap={10} alignItems={'center'}>
			<Box as={'span'} padding={2} width={'50px'}><MdPets color={'#cd8576'} size={40} /></Box>
			<Navbar />
		</Flex>
	)
}

export { Header }