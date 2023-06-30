import './App.css'
import {Button, ChakraProvider, extendTheme} from '@chakra-ui/react'
import {Home} from "./pages/home";
import '@fontsource/roboto';
import {About} from "./pages/about";
import {Services} from "./pages/services";
import {Projects} from "./pages/projects";
import {Blog} from "./pages/blog";
import {Contact} from "./pages/contact"; // Importe a fonte Roboto
import useMeasure from 'react-use-measure'
import {useDrag} from 'react-use-gesture'
import clamp from 'lodash.clamp'
import {animated, useSprings} from "react-spring";
import {useRef, useState} from "react";
import styles from './styles.module.css'
import {Card} from "./Components/Card";
import {Dock} from "./Components/Dock";
import {DockCard} from "./Components/DockCard";
import {DockDivider} from "./Components/DockDivider";

function App() {

    const [indexx, setIndex] = useState<number>(0);

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

    const pages = [
        <Home/>,
        <About/>,
        <Services/>,
        <Projects/>,
        < Blog/>,
        < Contact/>
    ]


    function Viewpager() {
        const index = useRef(0)
        const [ref, {width}] = useMeasure()
        const [props, api] = useSprings(
            pages.length,
            i => ({
                x: i * width,
                scale: width === 0 ? 0 : 1,
                display: 'block',
            }),
            [width]
        )

        // Função de toggle para trocar entre as páginas
        const togglePage = (toIndex: number) => {
            index.current = (toIndex) % pages.length;
            api.start(i => {
                if (i < index.current - 1 || i > toIndex) return {display: 'none'};
                const x = (i - index.current) * width;
                const scale = 1;
                return {x, scale, display: 'block'};
            });
        };

        const bind = useDrag(({active, movement: [mx], direction: [xDir], distance, cancel}) => {
            if (active && distance > width / 2) {
                index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
                cancel()
            }
            api.start(i => {
                if (i < index.current - 1 || i > index.current + 1) return {display: 'none'}
                const x = (i - index.current) * width + (active ? mx : 0)

                const scale = active ? 1 - distance / width / 2 : 1
                return {x, scale, display: 'block'}
            })
        })
        return (
            <div ref={ref} className={styles.wrapper}>
                {props.map(({x, display, scale}, i) => (
                    <animated.div className={styles.page} {...bind()} key={i} style={{display, x}}>
                        <animated.div style={{scale}} className={styles.page}>
                            {pages[i]}
                        </animated.div>
                    </animated.div>
                ))}
                <Dock>
                    {GRADIENTS.map((src, index) =>
                        src ? (
                            <DockCard key={src} onClick={() => togglePage(index)}>
                                <Card src={src} />
                            </DockCard>
                        ) : (
                            <DockDivider key={index} />
                        )
                    )}
                </Dock>
            </div>
        )
    }

    const GRADIENTS = [
        'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg',
        'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg',
        'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg',
        null,
        'https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg',
    ]

    return (
        <ChakraProvider theme={theme}>
            <Viewpager/>


        </ChakraProvider>
    )
}

export default App


