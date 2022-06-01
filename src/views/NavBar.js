// Chakra UI
import { Stack, Image, Input, Button } from "@chakra-ui/react";

// banner
import banner from "../media/images/breakingbadbanner.png";

// React-router-dom
import { Link as RouterLink, Navigate } from "react-router-dom";

// React
import { useState, useEffect } from "react";

const NavBar = () => {

    const [inputValue, setInputValue] = useState("");
    const [submited, setSubmited] = useState(false); // state to manage page redirect when pressing enter on the main input.

    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const submitHandler = (e) => {
        (e.keyCode === 13) ? setSubmited(true) : setSubmited(false);
    }

    const allCharactersHandler = () => {
        setInputValue("");
        setSubmited(false); // resets submited state. otherwise it doesn't let redirecting to another page
    }

    useEffect(() => {
        setSubmited(false);
    }, [submited]);

    return(
        <Stack>
            <Stack direction="column" w="100vw" h="fit-content" bgGradient="linear(to-b, #f1db32 60%, #f1d933, #edd22d)"  bgRepeat="no-repeat" bgPosition="right" bgSize="contain">
                <Stack direction="row" justifyContent="end">
                    <Stack direction="column" display={{base: "none", xl: "flex"}}  w="100%" spacing={8} alignItems="center" justifyContent="center">
                        <Button w="40%" as={RouterLink} to={"/"} bg="gray.800" color="white" _hover={{bg: "gray.700"}} onClick={allCharactersHandler}>View all characters available</Button> {/* onClick event sets the submited event to false, otherwise it doesn´t let to change the page */}
                        <Stack direction="row" w="100%" alignItems="center" justifyContent="center">
                            <Input value={inputValue} autoFocus ms="3rem" bg="gray.800" border="none" onChange={onChangeHandler} onKeyDown={submitHandler} color="white" placeholder="Search Character" w="40%"/>
                            <Button as={RouterLink} to={`/${inputValue}`} bg="gray.800" color="white" _hover={{bg: "gray.700"}}>Buscar</Button>
                        </Stack>
                    </Stack>
                    <Image src={banner} max-height="100%"/>
                </Stack>
            </Stack>
                <Stack direction="column" textAlign="center" display={{base: "flex", xl: "none"}} w="100%" alignItems="center" justifyContent="center">
                    <Input autoFocus bg="gray.800" border="none" onChange={onChangeHandler} onKeyDown={submitHandler} color="white" placeholder="Search Character" w={{base: "95%", sm:"50%", md:"30%"}}/>
                    <Button as={RouterLink} to={`/${inputValue}`} bg="gray.800" color="white" _hover={{bg: "gray.700"}} w={{base: "95%", sm:"50%", md:"30%"}}>Buscar</Button>
                    <Button w={{base: "95%", sm:"50%", md:"30%"}} as={RouterLink} to={"/"} bg="gray.800" color="white" _hover={{bg: "gray.700"}}>View all characters available</Button>
                </Stack>

                {/* renders 'Navigate' component, which will redirect to input value */}
                {submited ? <Navigate to={`/${inputValue}`} replace={true} /> : null}
        </Stack>
    )
}

export default NavBar;