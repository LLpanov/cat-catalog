import ReactDOM from 'react-dom/client'
import { App } from '@/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@/styles/theme.ts'
import './styles/index.css'

const client = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ChakraProvider theme={theme}>
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</ChakraProvider>
)
