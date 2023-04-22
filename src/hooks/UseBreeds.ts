import { useQuery } from '@tanstack/react-query'

import { breedsService } from '@/services/breeds.service.ts'

export const useBreeds = () => {
	const { data, isLoading, isError } = useQuery
	(['breeds'], () => breedsService.getAll())

	return { data, isLoading, isError }
}