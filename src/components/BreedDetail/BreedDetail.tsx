import { FC } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { Box, Divider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { BsWikipedia, TiArrowBack } from 'react-icons/all'
import ReactStars from 'react-star-ratings'

const BreedDetail: FC = () => {
	const { state: { breed } } = useLocation()

	return (
		<Box bg={'#f0f4e4'}>
			<Flex gap={7} p={4} width={'100%'}>

				<Box borderRadius={'5px'} boxShadow={'dark-lg'} width={'40%'} height={'800px'}>
					<Image src={breed.image?.url ?? '/vector.jpg'}
								 alt={`${breed.name} img`}
								 objectFit={'cover'}
								 borderRadius={'5px'}
								 height={'100%'}
								 width={'100%'}
					/>
					<Flex justifyContent={'center'} alignItems={'center'} mt={9}>
						<NavLink to={'/cats'}>
							<TiArrowBack size={'150px'} cursor={'pointer'} color={'#026885'} />
						</NavLink>
						<Text as={'span'} fontFamily={'fantasy'} fontSize={'xl'} color={'#ffaaff'}> back </Text>

					</Flex>

				</Box>
				<Box display={'flex'} flexDirection={'column'} rowGap={2} width={'60%'}>
					<Heading fontFamily={'body'} fontSize={'4xl'} as={'h1'}>{breed?.name}</Heading>
					<Heading fontFamily={'body'} fontSize={'xl'} as={'h1'}>{breed?.alt_names}</Heading>
					<Divider
						colorScheme='blackAlpha'
						orientation='horizontal'
						borderWidth={1}
						borderColor='black'
					/>
					<Box display={'flex'} flexDirection={'column'} rowGap={4}>
						<Heading as={'h3'} fontSize={'xl'}>Description:</Heading>
						<Text as={'p'} fontFamily={'link'} fontWeight={'medium'}>{breed?.description}</Text>
						<Heading as={'h3'} fontSize={'xl'}>Origin:
							<Text ml={2} as={'span'} color={'#c5933f'}>{breed?.origin}</Text>
						</Heading>
						<Heading as={'h3'} fontSize={'xl'}>Temperament:
							<Text ml={2} color={'blue.400'} fontSize={'md'} as={'span'}>{breed?.temperament}.</Text>
						</Heading>
						<Heading as={'h3'} fontSize={'xl'}> SpanLife:
							<Text ml={2} as={'span'} fontSize={'md'}>{breed?.life_span} years old</Text>
						</Heading>
						<Heading as={'h3'} fontSize={'xl'}>Weight:
							<Text ml={2} as={'span'} fontSize={'md'}>{breed?.weight.metric} kilogram</Text>
						</Heading>

						<Flex flexDirection={'column'} mt={4} justifyContent='center' rowGap={5}>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Affection Level:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.affection_level}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>
							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Energy Level:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.energy_level}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Adaptability:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.adaptability}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Child friendly:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.child_friendly}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Dog friendly:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.dog_friendly}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Grooming:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.grooming}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Health Issues:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.health_issues}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Hypoallergenic:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.hypoallergenic}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Intelligence:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.intelligence}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Social needs:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.social_needs}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>

							<Heading as={'h2'} fontSize={'md'} display='flex' alignItems='center'>
								Vocalisation:
								<Box ml={3}>
									<ReactStars
										numberOfStars={5}
										rating={breed?.vocalisation}
										starRatedColor={'gold'}
										starEmptyColor={'#836d70'}
										starDimension={'24px'}
									/>
								</Box>
							</Heading>
						</Flex>
						<Divider
							colorScheme='blackAlpha'
							orientation='horizontal'
							borderWidth={1}
							borderColor='black'
						/>
						<Flex flexDirection={'column'}>
							<Heading mb={6} as='h3' fontSize='xl'>More information:</Heading>
							<Flex gap={20} flexDirection='row' alignItems='center'>
								<Link href={`${breed?.wikipedia_url}`} isExternal>
									<BsWikipedia size='100px' />
								</Link>
								<Link href={`${breed?.vetstreet_url}`} isExternal>
									<Image src='/vetstreet-logo-colored.webp' alt='Logo' width='100px' height='60px' />
								</Link>
								<Link href={`${breed?.vcahospitals_url}`} isExternal>
									<Image src='/VCA Animal Hospital Logo.svg' alt='Logo' width='100' height='60px' />
								</Link>
							</Flex>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</Box>
	)
}

export { BreedDetail }