import { useQuery } from '@tanstack/react-query'
import { breedsService } from '@/services/breeds.service.ts'
import { useToast } from '@chakra-ui/react'

export const useOneBreed = (id: string) => {
	const toast = useToast()
	const { data, isLoading, isError } = useQuery
	({
		queryFn: () => breedsService.getById(id),
		queryKey: ['breeds', 'id'],
		enabled: !!id,
		onError: (err) => {
			if (err instanceof Error) {
				toast({
					status: 'error',
					title: err.message,
					position: 'top-right'
				})
			}
		}


	})

	return { data, isLoading, isError }
}