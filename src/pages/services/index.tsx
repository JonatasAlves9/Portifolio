import {Flex, Text, Box, Container, Spacer, Grid, Image} from '@chakra-ui/react'
import icon from '../../assets/Vector.png'

export const Services = () => {

    return (
        <Box minH={'100vh'} bg={'background.75'}>

            <Container maxW="container.xl" pt={'100px'}>
                <Text color={'secondary'} fontSize="24px" fontFamily={"body"}
                      letterSpacing="3px" fontWeight="bold">
                    What i Do
                </Text>
                <Text color={'light'} fontSize="48px" fontFamily={"body"}
                      fontWeight="bold" letterSpacing="3px">
                    My Services
                </Text>
                <Box border="1px solid" borderColor={"secondary"} width="150px" mr="4"/>
                <Spacer mt={'50px'}/>

                <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']} gap={6}
                      mt={'50px'}>
                    <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}>
                        <Flex direction="column" justify="center" h="100%">
                            <Image w={'47px'} h={'47px'} src={icon} mb={'15px'}/>
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
                    <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}>
                        <Flex direction="column" justify="center" h="100%">
                            <Image w={'47px'} h={'47px'} src={icon} mb={'15px'}/>
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Frontend + Backend Development</Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">As a mobile developer, I take pride in crafting
                                innovative and
                                user-friendly applications that deliver exceptional experiences. With expertise in React
                                Native, JavaScript, and TypeScript, I build high-performance cross-platform solutions,
                                seamlessly blending native capabilities with an agile development approach. </Text>
                        </Flex>
                    </Box>
                    <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}>
                        <Flex direction="column" justify="center" h="100%">
                            <Image w={'47px'} h={'47px'} src={icon} mb={'15px'}/>
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Project Management </Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">As a mobile developer, I take pride in crafting
                                innovative and
                                user-friendly applications that deliver exceptional experiences. With expertise in React
                                Native, JavaScript, and TypeScript, I build high-performance cross-platform solutions,
                                seamlessly blending native capabilities with an agile development approach. </Text>
                        </Flex>
                    </Box>
                    <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}>
                        <Flex direction="column" justify="center" h="100%">
                            <Image w={'47px'} h={'47px'} src={icon} mb={'15px'}/>
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Architectural Solutions
                            </Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">As a mobile developer, I take pride in crafting
                                innovative and
                                user-friendly applications that deliver exceptional experiences. With expertise in React
                                Native, JavaScript, and TypeScript, I build high-performance cross-platform solutions,
                                seamlessly blending native capabilities with an agile development approach. </Text>
                        </Flex>
                    </Box>

                </Grid>

            </Container>

        </Box>
    )

}
