import { FC } from 'react'
import { Container } from '@chakra-ui/react'
import { Carousel } from '@/components/Carousel/Carousel.tsx'


const Hero: FC = () => {
	return (
		<>
			<Container width={'container.md'}><Carousel /></Container>
		</>
	)
}

export { Hero }