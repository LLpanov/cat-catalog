import { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'

const App: FC = () => {

	return (
		<>
			<Box><Text color={'blue'}>London</Text></Box>
			<p>{JSON.stringify(import.meta.env.VITE_API_KEY)}</p>
		</>
	)
}

export { App }