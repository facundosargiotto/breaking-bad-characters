// Views
import NavBar from "./views/NavBar";
import CharacterView from "./views/CharacterView";
import AllCharacters from "./views/AllCharacters";

// Chakra UI
import { Box } from "@chakra-ui/react";

// React-Router-Dom
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
      <Box maxHeight="100vh">
        <NavBar />
        <Routes>

          <Route path="/" element={ <AllCharacters /> } />
          <Route path="/:name" element={ <CharacterView /> } />

        </Routes>
      </Box>
  );
}

export default App;
