import { FC } from 'react'
import { useLocation } from "react-router-dom";

const BreedDetail: FC = () => {
    const { state } = useLocation();
    const breed = state.breed
    console.log(breed)
    return (
        <>
            <h1>KoteykaDeaild</h1>
        </>
    )
}

export { BreedDetail }