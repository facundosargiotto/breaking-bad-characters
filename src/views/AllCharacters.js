// Chakra UI
import { Stack, Badge, Wrap, WrapItem } from "@chakra-ui/react";

// React Hooks
import{ useState, useEffect } from "react";

//axios
import axios from "axios";

// React-router-dom
import { Link as RouterLink} from "react-router-dom";

const AllCharacters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios("https://www.breakingbadapi.com/api/characters")
        .then((res) => {
            setCharacters(res.data)
        })
    }, []);

    return(
        <Stack direction="row" gap={5} p="2rem" flexWrap="wrap" justifyContent="center" alignItems="center">
            <Wrap spacing={4} w="fit-content" align="center" justify="center">
                {characters.map((el) => <WrapItem key={el.char_id}><Badge as={RouterLink} to={`/${el.name}`} w="15rem" h="2rem" p={2} textAlign="center" fontWeight="bold" fontSize="100%" colorScheme="yellow">{el.name}</Badge></WrapItem>)}
            </Wrap>
        </Stack>
    )
}

export default AllCharacters;