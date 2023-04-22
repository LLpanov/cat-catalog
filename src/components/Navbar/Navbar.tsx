import { FC } from 'react'
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
	return (
		<header>
			<Stack>
				<Link to='/'>Home</Link>
				<Link to='/cats'>Cats</Link>
			</Stack>
		</header>
	)
}

export { Navbar }