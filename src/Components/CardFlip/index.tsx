import { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import {Flex, Text, Box} from '@chakra-ui/react'

import styles from './styles.module.scss'

export  const CardFlip = () => {
  const [flipped, set] = useState(true)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >

           <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}  
>
                        <Flex direction="column" justify="center" h="100%">
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Mobile Development </Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">As a mobile developer, I take pride in crafting
                                innovative and
                                user-friendly applications that deliver exceptional experiences. With expertise in React
                                Native, JavaScript, and TypeScript, I build high-performance cross-platform solutions,
                                seamlessly blending native capabilities with an agile development approach. </Text>
                        </Flex>
                        </Box>
                        </a.div>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  )
}
