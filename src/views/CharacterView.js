// Chakra UI
import { Stack } from "@chakra-ui/react";

// React-router-dom
import { useParams } from "react-router-dom";

// React Hooks
import { useState, useEffect } from "react";

// Components
import Character from "../components/Character";

// Axios
import axios from "axios";


const CharacterView = () => {

    const {name} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {

        axios("https://breakingbadapi.com/api/characters")
        .then((res) => {
            name ? setData(res.data.filter(char => char.name.toLowerCase() === name.toLowerCase())) : setData([])
        })

    }, [name])

    return(
        <Stack h="100%">

            <Character data={data} />

        </Stack>
    )
}

export default CharacterView;