// Chakra UI
import { Stack, Text, Image, Badge } from "@chakra-ui/react";

const Character = ({data}) => {
    return(
        <>
            {data.length === 0 ? 
            
            <></>

            : 
            
            <Stack direction={{base: "column", xl: "row"}} h="100%">
                <Stack direction="column" flex={1} pt={{base: "2rem", xl: "0"}} h="fit-content" alignItems="center">
                    <Image src={data[0].img} alt={data[0].name} boxSize="80%"/>
                </Stack>
                <Stack direction="column" flex={1}>
                    <Stack spacing={{base: 8, xl: 16}} p={{base: 6, xl: 16}} my="auto" mx={{base: "auto", xl: "0"}}>
                        <Text fontSize="2xl" fontWeight="bold"><Badge h="fit-content" w="fit-content" fontSize="2xl" colorScheme="yellow">Name:</Badge> {data[0].name}</Text>
                        <Text fontSize="2xl" fontWeight="bold"><Badge h="fit-content" w="fit-content" fontSize="2xl" colorScheme="yellow">Birthday:</Badge> {data[0].birthday}</Text>
                        <Text fontSize="2xl" fontWeight="bold"><Badge h="fit-content" w="fit-content" fontSize="2xl" colorScheme="yellow">Occupation:</Badge> {data[0].occupation}</Text>
                        <Text fontSize="2xl" fontWeight="bold"><Badge h="fit-content" w="fit-content" fontSize="2xl" colorScheme="yellow">Status:</Badge> {data[0].status}</Text>
                        <Text fontSize="2xl" fontWeight="bold"><Badge h="fit-content" w="fit-content" fontSize="2xl" colorScheme="yellow">Nickname:</Badge> {data[0].nickname}</Text>
                        <Text fontSize="2xl" fontWeight="bold"><Badge h="fit-content" w="fit-content" fontSize="2xl" colorScheme="yellow">Portrayed by:</Badge> {data[0].portrayed}</Text>
                    </Stack>
                </Stack>
            </Stack>
            
            }
        </>
    )
}

export default Character;