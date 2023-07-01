import {Avatar, Center, Flex, Text, Box} from '@chakra-ui/react'
import bgimage from '../../assets/trees-1587301.jpg'
import foto from '../../assets/foto.png'
import { isScreenHeightHD } from '../../utils/isHd'

export const Home = () => {

    return (
        <Box minH={'100vh'} bgImage={bgimage}>
            <Box minH={'100vh'} bg={'primary.85'} >
                <Center flexDir="column" minH={'100vh'} style={{
                        zoom: isScreenHeightHD() ? 0.7 : 0
                  }}>
                    <Avatar width="197px" height="197px" name='Jônatas Alves' src={foto}/>{' '}
                    <Text mt="4" color={'light'} fontSize="48px" textAlign="center" fontFamily={"body"}
                          fontWeight="bold" letterSpacing="3px">
                        Jônatas Alves
                    </Text>
                    <Text color={'secondary'} fontSize="24px" textAlign="center" fontFamily={"body"}
                          letterSpacing="3px">
                        Software Architecture
                    </Text>

                    <Flex alignItems="center" position={'fixed'} left={20} bottom={20}>
                        <Box border="1px solid white" width="100px" mr="4"/>
                        <Text color={'white'} fontFamily={"body"} overflowX="auto" whiteSpace="nowrap"
                              fontWeight={"thin"} letterSpacing="3px">
                            Scroll Down
                        </Text>
                    </Flex>
                </Center>
            </Box>
        </Box>
    )

}
