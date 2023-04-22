import { axiosService } from '@/services/axios.service.ts'
import { urls } from '@/config/urls.ts'
import { IBreed } from '@/interfaces/breed.interface.ts'

export const breedsService ={
	getAll:():Promise<IBreed[]> => axiosService.get(urls.breeds),
	getById:(id:string):Promise<IBreed> => axiosService.get(`${urls.breeds}/${id}`)
}