import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Link } from '@chakra-ui/react'

import css from './NavBar.module.css'

const Navbar: FC = () => {
	return (

		<Flex as={'nav'} columnGap={5}className={css.linked} >
			<NavLink to='/' >Home</NavLink>
			<NavLink to='/cats'>Cats</NavLink>
			<NavLink to='/favorites'>Favourites</NavLink>
			<Link href='https://thecatapi.com' style={{ textDecoration: 'none' }} _hover={{ color: 'blue' }} isExternal>
				About Api
			</Link>
		</Flex>

	)
}

export { Navbar }