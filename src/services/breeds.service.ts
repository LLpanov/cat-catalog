import { axiosService } from '@/services/axios.service.ts'
import { urls } from '@/config/urls.ts'
import { IBreed, IGetBreedsParams } from '@/interfaces/breed.interface.ts'

export const breedsService = {
	getAll: ({ limit, page }: IGetBreedsParams): Promise<IBreed[]> => axiosService.get(urls.breeds, {
		params: { limit, page }
	}).then(response => response.data),

	getById: (id: string): Promise<IBreed> => axiosService.get(`${urls.breeds}/${id}`).then(response => response.data)
}