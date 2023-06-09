import { FC } from 'react'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import { IBreed } from '@/interfaces/breed.interface.ts'

interface IProps {
	breed: IBreed;
}
const CatList: FC<IProps> = ({ breed }) => {
	return (
		<Flex bgGradient='linear(to-r, green.200, pink.500)' boxShadow={'md'} flexDirection={'column'} alignItems="center" width={300} height={355}>
			<Box width="100%" height="70%" display="flex" justifyContent="center" alignItems="center">
				<Image src={breed.image?.url ?? "/vector.jpg"}
							 alt={`${breed.name} img`}
							 objectFit={'cover'}
							 objectPosition={'center'}
							 height="250px"
							 width="100%" />
			</Box>
			<Box mt={2} height="20%">
				<Heading as={'h3'} fontFamily={'body'} fontSize={'2xl'}>{breed.name}</Heading>
			</Box>
			<Box padding={5} >
				<Button fontFamily={'button'} colorScheme={'orange'}>more...</Button>
			</Box>
		</Flex>

	)
}
export { CatList }