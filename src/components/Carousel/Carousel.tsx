import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Flex, Icon, IconProps, Image, Spinner } from '@chakra-ui/react'
import { FcNext, FcPrevious } from 'react-icons/all'

import { useRandomImages } from '@/hooks/UseRandomImages.ts'


const Carousel: FC = () => {
	const { data: images, isLoading, isSuccess } = useRandomImages()

	const NextArrow = (props: IconProps) => {
		return <Icon as={FcNext} boxSize={30}  zIndex={10} {...props} />
	}

	const PrevArrow = (props: IconProps) => {
		return <Icon as={FcPrevious}
								 boxSize={30}
								 zIndex={10}
								 {...props} />
	}

	const settings = {
		adaptiveHeight: true,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	}


	return (
		<Flex justifyContent={'center'}>
			{isLoading ? (
				<Box display='flex' justifyContent='center' alignItems='center' height='350px'>
					<Spinner size='xl' emptyColor='gray.200' color='green.500' />
				</Box>
			) : (
				<Flex width={'700px'} flexDirection={'column'} justifyContent={'center'}>
					<Slider {...settings}>
						{isSuccess && images?.map((image) => (
							<Box key={image.id} width='100%' height='400px' position='relative'>
								<Image src={image.url} borderRadius='md' alt={image.id} objectFit='cover' width='100%' height='100%' />
							</Box>
						))}
					</Slider></Flex>
			)}
		</Flex>
	)
}

export { Carousel }