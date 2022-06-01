import { extendTheme } from "@chakra-ui/react";

const theme = {
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },

    styles: {
        global: {
            body: {
                "fontFamily": "'Roboto Condensed', sans-serif",
                "overflowX": "hidden",
                bg: "yellow.300",
                margin: 0,
            },
        }
    }

}

export default extendTheme(theme);