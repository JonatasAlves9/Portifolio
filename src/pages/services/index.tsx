import {Flex, Text, Box, Container, Spacer, Grid, Image} from '@chakra-ui/react'
import icon from '../../assets/Vector.png'
import {isScreenHeightHD} from '../../utils/isHd'

export const Services = () => {

    return (
        <Box minH={'100vh'} bg={'background.75'}>

            <Container maxW="container.xl" pt={'100px'} style={{
                zoom: isScreenHeightHD() ? 0.7 : 0
            }}>
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
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Mobile Development </Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">My mobile development skills showcase a strong
                                grasp of design, clean architecture, React Native, Redux, and structured folder
                                organization. I navigate design adeptly, merging it into visually appealing and
                                seamlessly functioning apps. Proficiency in clean architecture, React Native, and Redux
                                leads to robust and scalable apps. Organized folder structures reflect my approach to
                                clean and collaborative coding.</Text>
                        </Flex>
                    </Box>
                    <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}>
                        <Flex direction="column" justify="center" h="100%">
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Frontend + Backend Development</Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">I possess skills in both front-end and back-end
                                development. I integrate design seamlessly and implement clean architecture. I work with
                                technologies like React.js, Redux, Node.js, and TypeScript to craft robust and scalable
                                solutions. </Text>
                        </Flex>
                    </Box>
                    <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}>
                        <Flex direction="column" justify="center" h="100%">
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Project Management </Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">My project management skills shine through as I
                                led a development team, overseeing code reviews, testing, developer support, and
                                documentation. I conducted Scrum rituals, estimated tasks, and managed sprints, ensuring
                                seamless workflow and successful project execution.</Text>
                        </Flex>
                    </Box>
                    <Box w="100%" h="250px" border="2px solid" borderColor="gray.300" p={4}>
                        <Flex direction="column" justify="center" h="100%">
                            <Text color={'white'} fontSize="15px" fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">
                                Architectural Solutions
                            </Text>
                            <Text mt={2} fontSize="12px" color={'light'} fontFamily={"body"}
                                  letterSpacing="3px" fontWeight="bold">My software architecture skills shine as I
                                transformed unstructured projects by studying and implementing tailored architectures.
                                Balancing project, team, and company needs, I identify optimal solutions to enhance the
                                project's efficiency and success.</Text>
                        </Flex>
                    </Box>

                </Grid>

            </Container>

        </Box>
    )

}
