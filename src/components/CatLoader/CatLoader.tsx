import { FC } from "react";
import { HeartSpinner } from "react-spinners-kit";
import { Box } from "@chakra-ui/react";

const CatLoader: FC = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			margin="0"
		>
			<HeartSpinner size={100} color={"#d3458d"} speed={0.5} />
		</Box>
	);
};

export { CatLoader };