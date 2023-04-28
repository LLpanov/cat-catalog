import { FC } from 'react'
import { Container, Text } from '@chakra-ui/react'
import { Carousel } from '@/components/Carousel/Carousel.tsx'


const Hero: FC = () => {
	return (
		<>
			<Text fontFamily={'body'}>Slider</Text>
			<Container width={'container.md'}><Carousel /></Container>
		</>
	)
}

export { Hero }