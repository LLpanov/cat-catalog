import { FC } from 'react'
import { Button, Heading } from '@chakra-ui/react'

const Breeds: FC = () => {
	return (
		<>
      <h6>breed</h6>
			<Heading fontFamily={'heading'}>Link</Heading>
			<Heading fontFamily={'body'}>Link2</Heading>
			<Heading fontFamily={'link'}>Match</Heading>
			<Button fontFamily={'button'}>button</Button>
		</>
	)
}

export { Breeds }