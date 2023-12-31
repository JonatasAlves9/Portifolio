import {Box, Center, Container, Input, Spacer, Text} from '@chakra-ui/react'
import {isScreenHeightHD} from '../../utils/isHd'

export const Blog = () => {

    return (
        <Box minH={'100vh'} bg={'background.20'}>
            <Container maxW="container.xl" pt={'50px'} style={{
                        zoom: isScreenHeightHD() ? 0.7 : 0
                  }}>
                <Text color={'secondary'} fontSize="24px" fontFamily={"body"}
                      letterSpacing="3px" fontWeight="bold">
                    What I wrote
                </Text>
                <Text color={'light'} fontSize="48px" fontFamily={"body"}
                      fontWeight="bold" letterSpacing="3px">
                    Blog
                </Text>
                <Box border="1px solid" borderColor={"secondary"} width="150px" mr="4"/>
                <Spacer mt={'50px'}/>
                <Input
                    placeholder='Filter articles'
                    bg={"dark"}
                    border={'0'}
                    color={'light'}
                    letterSpacing="3px"
                    fontFamily={"body"}
                    _placeholder={{
                        color: 'light', fontFamily: "body", letterSpacing: "3px"
                    }}
                    focusBorderColor='light'
                    w={'40%'}
                    h={'44px'}
                />

                {/*<Tabs isLazy>*/}
                {/*    <TabList borderBottom="none" bg={'dark'} borderRadius={'5px'} p={'2'} mt={'50px'} h={'44px'}>*/}
                {/*        <Tab color={'light'} fontSize="sm" fontFamily={"body"}*/}
                {/*             letterSpacing="3px"*/}
                {/*             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>All Articles*/}
                {/*            (42)</Tab>*/}
                {/*        <Tab color={'light'} fontSize="sm" fontFamily={"body"}*/}
                {/*             letterSpacing="3px"*/}
                {/*             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Mobile</Tab>*/}
                {/*        <Tab color={'light'} fontSize="sm" fontFamily={"body"}*/}
                {/*             letterSpacing="3px"*/}
                {/*             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Web</Tab>*/}
                {/*        <Tab color={'light'} fontSize="sm" fontFamily={"body"}*/}
                {/*             letterSpacing="3px"*/}
                {/*             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Others</Tab>*/}
                {/*    </TabList>*/}
                {/*    <TabPanels>*/}
                {/*        <TabPanel ps={0} pe={0}>*/}
                {/*            <HStack overflowX="auto" css={{*/}
                {/*                '&::-webkit-scrollbar': {*/}
                {/*                    width: '6px',*/}
                {/*                    borderRadius: '4px',*/}
                {/*                    height: '8px',*/}

                {/*                },*/}
                {/*                '&::-webkit-scrollbar-track': {*/}
                {/*                    background: '#4C5252',*/}
                {/*                    borderRadius: '4px',*/}


                {/*                },*/}
                {/*                '&::-webkit-scrollbar-thumb': {*/}
                {/*                    background: '#BFBFBF',*/}
                {/*                    borderRadius: '4px',*/}
                {/*                },*/}
                {/*            }} spacing={4} pb={'12px'}>*/}
                {/*                <Box flex="0 0 350px" borderRadius="md" bg='dark'>*/}
                {/*                    <Image src={usesus} alt="Imagem" width={'auto'} m={'10px'}/>*/}
                {/*                    <Box p={4}>*/}
                {/*                        <Flex align="center" mb={2}>*/}
                {/*                            <Heading color={'white'} fontSize="md" fontFamily={"body"}*/}
                {/*                                     fontWeight="bold" letterSpacing="3px">Clear Architecture...</Heading>*/}
                {/*                            <Badge bg="light" ms={'12px'} borderRadius={'50px'} color={'dark'}*/}
                {/*                                   fontSize="10px" fontFamily={"body"}*/}
                {/*                                   fontWeight="regular" px={'15px'}>Mobile</Badge>*/}
                {/*                        </Flex>*/}

                {/*                        <Text mb={4} color={'light'} fontSize="xs" fontFamily={"body"}*/}
                {/*                              fontWeight="regular" letterSpacing="3px">*/}
                {/*                            Introducing UseSUS, an application designed to streamline and simplify the*/}
                {/*                            process of tracking procedures within the Brazilian Unified Health System*/}
                {/*                            (SUS). With UseSUS*/}
                {/*                            platform.*/}
                {/*                        </Text>*/}

                {/*                        <Flex justify="flex-end">*/}
                {/*                            <Link mb={4} color={'light'} fontSize="xs" fontFamily={"body"}*/}
                {/*                                  fontWeight="bold" letterSpacing="3px">See More</Link>*/}
                {/*                        </Flex>*/}
                {/*                    </Box>*/}
                {/*                </Box>*/}
                {/*            </HStack>*/}

                {/*        </TabPanel>*/}
                {/*        <TabPanel>Content 2</TabPanel>*/}
                {/*        <TabPanel>Content 3</TabPanel>*/}
                {/*    </TabPanels>*/}
                {/*</Tabs>*/}


                <Center  bg={"dark"} mt={10} p={20} borderRadius={10}>
                    <Text color={'light'} fontSize="20px" fontFamily={"body"}
                          fontWeight="bold" letterSpacing="3px">
                        Coming soon...
                    </Text>
                </Center>
            </Container>

        </Box>
    )

}
