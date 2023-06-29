import './App.css'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {Home} from "./pages/home";
import '@fontsource/roboto';
import {About} from "./pages/about"; // Importe a fonte Roboto

function App() {

    const theme = extendTheme({
        colors: {
            primary: {
                85: "rgba(77, 89, 89, .85)",
                900: "#1a202c",
            },
            light: '#BFBFBF',
            secondary: '#89A6A2',
            background: {
                100: '#4D5959'
            }
        },
        fonts: {
            heading: 'Roboto',
            body: 'Roboto',
        },
        sizes: {
            '3xl': '20px'
        }
    })
    return (
        <ChakraProvider theme={theme}>
            <Home/>
            <About/>
        </ChakraProvider>
    )
}

export default App
