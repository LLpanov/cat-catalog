import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Divider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { BsWikipedia } from 'react-icons/all'


const BreedDetail: FC = () => {
	const { state: { breed } } = useLocation()
	console.log(breed)

	return (
		<>
			<Flex gap={5} p={4} bg={'#f0f4e4'} width={'100%'}>

				<Box borderRadius={'5px'} boxShadow={'dark-lg'} width={'35%'}>
					<Image src={breed.image?.url ?? '/vector.jpg'}
								 alt={`${breed.name} img`}
								 objectFit={'cover'}
								 borderRadius={'5px'}
								 height={'100%'}
					/>

				</Box>
				<Box display={'flex'} flexDirection={'column'} rowGap={2} width={'65%'}>
					<Heading fontFamily={'body'} fontSize={'4xl'} as={'h1'}>{breed.name}</Heading>
					<Heading fontFamily={'body'} fontSize={'xl'} as={'h1'}>{breed.alt_names}</Heading>
					<Divider
						colorScheme='blackAlpha'
						orientation='horizontal'
						borderWidth={1}
						borderColor='black'
					/>
					<Box display={'flex'} flexDirection={'column'} rowGap={2}>
						<Heading as={'h3'} fontSize={'xl'}>Description:</Heading>
						<Text as={'p'} fontFamily={'link'} fontWeight={'medium'}>{breed.description}</Text>
						<Heading as={'h3'} fontSize={'xl'}>Origin: <Text as={'span'} color={'gold'}>{breed.origin}</Text> </Heading>
						<Heading as={'h3'} fontSize={'xl'}>Temperament: <Text color={'blue.400'} fontSize={'md'}
																																	as={'span'}>{breed.temperament}.</Text> </Heading>
						<Heading as={'h3'} fontSize={'xl'}>SpanLife: <Text as={'span'} fontSize={'sm'}>{breed.life_span} years
							old</Text></Heading>
						<Heading as={'h3'} fontSize={'xl'}>Weight: <Text as={'span'}
																														 fontSize={'sm'}>{breed.weight.metric} kilogram</Text></Heading>
						<Flex flexDirection={'column'} mt='8px'>
							<Heading as='h3' fontSize='xl'>More information:</Heading>
							<Flex gap={5} flexDirection='row' mt={2} alignItems='center'>
								<Link href={`${breed.wikipedia_url}`} isExternal>
									<BsWikipedia size='60px' />
								</Link>
								<Link href={`${breed.vetstreet_url}`} isExternal>
									<Image src='/vetstreet-logo-colored.webp' alt='Logo' width='70px' height='60px' />
								</Link>
								<Link href={`${breed.vcahospitals_url}`} isExternal>
									<Image src='/VCA Animal Hospital Logo.svg' alt='Logo' width='70px' height='60px' />
								</Link>
							</Flex>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</>
	)
}

export { BreedDetail }