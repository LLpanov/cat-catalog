import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Image, Spinner } from '@chakra-ui/react'

import { useRandomImages } from '@/hooks/UseRandomImages.ts'

const Carousel: FC = () => {
	const { data: images, isLoading, isSuccess } = useRandomImages()

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,

	}

	return (
		<>
			{isLoading ? (
				<Box display='flex' justifyContent='center' alignItems='center' height='350px'>
					<Spinner
						size='xl'
						emptyColor='gray.200'
						color='green.500'
					/>
				</Box>
			) : (
				<Slider {...settings} >
					{isSuccess && images?.map((image) => (
						<Box key={image.id} width='100%' height='350px'>
							<Image src={image.url} borderRadius='md' alt={image.id} objectFit='cover' width='100%' height='100%' />
						</Box>
					))}
				</Slider>
			)}
		</>
	)
}

export { Carousel }