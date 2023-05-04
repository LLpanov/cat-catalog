import React, { FC, useState } from 'react'
import { Box, Button, Container, Grid, GridItem, Icon } from '@chakra-ui/react'
import { TfiHandPointLeft, TfiHandPointRight } from 'react-icons/all'

import { useBreeds } from '@/hooks/UseBreeds.ts'
import { CatList } from '@/components/CatList/CatList.tsx'
import { CatLoader } from '@/components/CatLoader/CatLoader.tsx'


const Breeds: FC = () => {
	const [page, setPage] = useState(0)
	const { data, isLoading } = useBreeds({ page })
	console.log(data)

	const nextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (page < 11) {
			setPage(page + 1)
		}
	}

	const backPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (page > 0) {
			setPage(page - 1)
		}
	}

	return (
		<>
			{isLoading ? (
				<Container>
					<CatLoader />
				</Container>
			) : (
				<>
					<Grid templateColumns='repeat(3, 1fr)' placeItems={'center'} my={10} gap={4}>
						{data?.map((breed) => (
							<GridItem key={breed.id}>
								<CatList breed={breed} />
							</GridItem>
						))}
					</Grid>
					<Box padding={5} display='flex' flexDirection='row' columnGap={5} justifyContent='center' alignItems='center'>
						<Button colorScheme='facebook' fontFamily={'button'} onClick={backPage}>
							<Icon as={TfiHandPointLeft} />
						</Button>
						<Button colorScheme='facebook' fontFamily={'button'} onClick={nextPage}>
							<Icon as={TfiHandPointRight} />
						</Button>
					</Box>
				</>
			)}
		</>
	)
}

export { Breeds }


