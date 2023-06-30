import './App.css'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {Home} from "./pages/home";
import '@fontsource/roboto';
import {About} from "./pages/about";
import {Services} from "./pages/services";
import {Projects} from "./pages/projects";
import {Blog} from "./pages/blog";
import {Contact} from "./pages/contact"; // Importe a fonte Roboto

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
                100: '#4D5959',
                75: "#3F4747",
                50: '#353B3B',
                20: '#272A2A',
                0: '#1F1F1F'
            },
            dark: '#4C5252'
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
            <Services/>
            <Projects/>
            <Blog/>
            <Contact/>
        </ChakraProvider>
    )
}

export default App
