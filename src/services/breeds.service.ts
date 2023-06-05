import { axiosService } from '@/services/axios.service.ts'
import { urls } from '@/config/urls.ts'
import { IBreed, IGetBreedsParams } from '@/interfaces/breed.interface.ts'

export const breedsService = {
	getAll: async ({ limit, page }: IGetBreedsParams): Promise<IBreed[]> => {
		try {
			const response = await axiosService.get(urls.breeds, {
				params: { limit, page }
			});
			return response.data;
		} catch (error) {
			console.error( error);
			throw error;
		}
	},

	getById: async (id: string): Promise<IBreed> => {
		try {
			const response = await axiosService.get(`${urls.breeds}/${id}`);
			return response.data;
		} catch (error) {
			console.error( error);
			throw error;
		}
	}
};