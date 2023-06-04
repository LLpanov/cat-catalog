import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout/Layout.tsx'
import { CatPage, HomePage, NotFoundPage } from '@/pages'
import { FavouritesPage } from '@/pages/FavouritesPage.tsx'
import { BreedDetail } from '@/components/BreedDetail/BreedDetail.tsx'

//git
//git
//1
const App: FC = () => {

	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>

				<Route index element={<HomePage />} />
				<Route path={'cats'} element={<CatPage />} />
				<Route path={':id'} element={<BreedDetail />} />
				<Route path={'favourites'} element={<FavouritesPage />} />
				<Route path={'*'} element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export { App }