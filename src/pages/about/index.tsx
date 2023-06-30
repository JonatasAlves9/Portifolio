import {Flex, Text, Box, Container, Spacer, Grid, Button} from '@chakra-ui/react'

export const About = () => {

    return (
        <Box minH={'100vh'} bg={'background.100'}>
            <Container maxW="container.xl" pt={'100px'}>
                <Text color={'secondary'} fontSize="24px" fontFamily={"body"}
                      letterSpacing="3px" fontWeight="bold">
                    Discover
                </Text>
                <Text color={'light'} fontSize="48px" fontFamily={"body"}
                      fontWeight="bold" letterSpacing="3px">
                    About me
                </Text>
                <Box border="1px solid" borderColor={"secondary"} width="150px" mr="4"/>
                <Spacer mt={'50px'}/>
                <Text color={'light'} fontSize="15px" fontFamily={"body"}
                      letterSpacing="3px">
                    Welcome to my portfolio!
                </Text>
                <Text color={'light'} fontSize="15px" fontFamily={"body"}
                      letterSpacing="3px" mt={'20px'}>
                    My name is Jonatas Alves, and I have been working as a software developer for the past 6 years. With
                    expertise in JavaScript, TypeScript, React, React Native, and Node.js, I have developed a strong
                    foundation in building robust and efficient applications. Additionally, my knowledge of software
                    architecture allows me to design scalable and maintainable systems. At 21 years old, I am driven by
                    a passion for coding and a commitment to delivering high-quality solutions.
                </Text>

                <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={6} border="1px solid white" p={10}
                      mt={'50px'} width={['100%', '100%', '80%', '60%']}>
                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Nome:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}Jonatas Alves</Text>
                    </Flex>

                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Age:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}21</Text>
                    </Flex>

                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Phone:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}+55 81 99252-8586</Text>
                    </Flex>

                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Address:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}Caruaru, Brazil</Text>
                    </Flex>

                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Experience:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}6 Years</Text>
                    </Flex>

                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Freelancer:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}Available</Text>
                    </Flex>

                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Linkedin:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}Jônatas Alves</Text>
                    </Flex>

                    <Flex>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="bold">Github:</Text>
                        <Text color={'light'} fontSize="15px" fontFamily={"body"}
                              letterSpacing="3px" fontWeight="thin" ms={'10px'}>{' '}JonatasAlves9</Text>
                    </Flex>
                </Grid>
                <Button color='dark' border="1px solid" borderColor={'secondary'} bg={'secondary'}
                        _hover={{bg: 'background.100', borderColor: 'secondary', border: "1px solid", color: 'light'}} p={'25px'}
                        w='200px' mt={'50px'} fontSize="12px" fontFamily={"body"} letterSpacing="3px">DOWNLOAD
                    CV</Button>
            </Container>

        </Box>
    )

}
