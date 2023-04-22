import { useQuery } from '@tanstack/react-query'
import { breedsService } from '@/services/breeds.service.ts'

export  const useOneBreed = (id:string) =>{
	const { data, isLoading, isError } = useQuery
	({
		queryFn:() => breedsService.getById(id),
		queryKey:['breeds','id'],
		enabled:!!id
	})

	return {data,isLoading,isError}
}