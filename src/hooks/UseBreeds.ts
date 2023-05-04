import { useQuery } from '@tanstack/react-query'
import { useToast } from '@chakra-ui/react'

import { breedsService } from '@/services/breeds.service.ts'
import { IBreed, IGetBreedsParams } from '@/interfaces/breed.interface.ts'

export const useBreeds = ({ limit = 6, page = 0 }: IGetBreedsParams) => {
	const toast = useToast();
	const { data, isLoading } = useQuery<IBreed[], Error>({
		queryFn: () => breedsService.getAll({ limit, page }),
		queryKey: ['breeds', limit, page],
		staleTime: 180 * 1000,
		onError: (err: Error) => {
			toast({
				status: 'error',
				title: err.message,
				position: 'top-right',
			});
		},
	});

	return { data, isLoading };
};