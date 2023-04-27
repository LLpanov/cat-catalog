import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
	return (

		<Flex flexDirection={'row'} bg={'skyblue'} height={'100px'} columnGap={5} justifyContent={'flex-start'}>
			<Link to='/'>Home</Link>
			<Link to='/cats'>Cats</Link>
		</Flex>

	)
}

export { Navbar }