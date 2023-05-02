import { FC } from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			minHeight='100vh'
			backgroundColor='blue.500'
		>
			<Heading as='h1' fontFamily={'heading'} size='4xl' color='white' mb='8'>
				404
			</Heading>
			<Heading as='h2' size='xl' fontFamily={'heading'} color='white' mb='8'>
				The page you’re looking for doesn’t exist.
			</Heading>
			<Link to={'/'}><Button fontFamily={'button'} bg={'red.500'} _hover={{ bg: 'red.700' }} size='lg'>
				Back Home
			</Button></Link>
		</Box>
	)
}

export { NotFound }