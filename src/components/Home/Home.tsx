import { FC } from 'react'
import { Hero } from '@/components/Hero/Hero.tsx'
import { Box, Flex, Heading,Text } from '@chakra-ui/react'

const Home: FC = () => {
	return (
		<Flex rowGap={'25px'} flexDirection={'column'}>
		<Flex  as={'section'} flexDirection={'column'} marginY={10} gap={30}  justifyContent={'center'} alignItems={'center'}>
			<Heading as={'h1'} fontFamily={'heading'}>Welcome to CatApp...</Heading>
			<Box >
				<Hero />
			</Box>
		</Flex>
			<Flex ml={5} flexDirection={'column'} bg={'rgba(255, 127, 80, 0.9)'}  width={'600px'} p={4} borderRadius={5} boxShadow={'dark-lg'}>
				<Text as={'p'} fontSize={'xl'} fontWeight={'bold'} mb={2}>
					Explore CatApp for:
				</Text>
				<Text as={'p'} fontSize={'lg'} color={'gray.600'} mb={2}>
					1. Get new information about cats.
				</Text>
				<Text as={'p'} fontSize={'lg'} color={'gray.600'} mb={2}>
					2. Discover new breeds.
				</Text>
				<Text as={'p'} fontSize={'lg'} color={'gray.600'} mb={2}>
					3. Detail information about breed.
				</Text>
			</Flex>
		</Flex>
	)
}

export { Home }