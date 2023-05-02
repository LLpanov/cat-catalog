import { FC } from 'react'
import { Hero } from '@/components/Hero/Hero.tsx'
import { Box, Flex, Heading } from '@chakra-ui/react'

const Home: FC = () => {
	return (
		<Flex  as={'section'} flexDirection={'column'} marginY={10} gap={20} justifyContent={'center'} alignItems={'center'}>
			<Heading as={'h1'} fontFamily={'heading'}>Welcome to CatApp</Heading>
			<Box>
				<Hero />
			</Box>
		</Flex>
	)
}

export { Home }