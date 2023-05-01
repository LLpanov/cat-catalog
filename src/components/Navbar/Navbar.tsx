import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Link } from '@chakra-ui/react'


const Navbar: FC = () => {
	return (

		<Flex columnGap={5}>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/cats'>Cats</NavLink>
			<Link href='https://thecatapi.com' style={{ textDecoration: 'none' }} _hover={{ color: 'blue' }} isExternal>
				About Api
			</Link>
		</Flex>

	)
}

export { Navbar }