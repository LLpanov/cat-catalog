import { useQuery } from '@tanstack/react-query'
import { useToast } from '@chakra-ui/react'

import { IFilterImages, IImage } from '@/interfaces/image.interface.ts'
import { imageService } from '@/services/image.service.ts'


export const useRandomImages = () => {
	const toast = useToast()
	const { data, isLoading, isError } = useQuery<IImage[], Error>({
		queryFn: () => imageService.getRandomImage(),
		queryKey: ['images'],
		staleTime: 1000 * 10,
		onError: (err: Error) => {
			toast({
				status: 'error',
				title: err.message,
				position: 'top-right'
			})
		},
		select: (data: IFilterImages[]): IImage[] =>
			data.map((image: IImage) => ({
				id: image.id,
				url: image.url
			}))
	})

	return { data, isLoading, isError }
}
