import {
    Flex,
    Text,
    Box,
    Container,
    Spacer,
    Image,
    Input,
    Tabs,
    TabList,
    TabPanels,
    TabPanel, Tab, HStack, Heading, Badge, Link
} from '@chakra-ui/react'
import usesus from '../../assets/usesus.png'
import seek from '../../assets/seek.png'
import radepro from '../../assets/radepro.png'
import etical from '../../assets/etical.png'
import whatsapp from '../../assets/whats.png'
import dashboard from '../../assets/dashboard.png'
import tickets from '../../assets/tickets.png'
import sockets from '../../assets/socketphp.png'
import aiIndication from '../../assets/aiindication.png'
import lib from '../../assets/lib.png'

import {isScreenHeightHD} from '../../utils/isHd'
import {useState} from "react";

export const Projects = () => {

    const [projects] = useState([
        {
            name: 'UseSUS',
            image: usesus,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'mobile'
        },
        {
            name: 'Seek',
            image: seek,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'mobile'
        },
        {
            name: 'Rade Profissional',
            image: radepro,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'mobile'
        },
        {
            name: 'Etical Venda Direta',
            image: etical,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'front-end'
        },
        {
            name: 'Dashboards',
            image: dashboard,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'front-end'
        },
        {
            name: 'Clone whatsapp',
            image: whatsapp,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'mobile'
        },
        {
            name: 'Gerador de boleto',
            image: tickets,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'back-end'
        },
        {
            name: 'Modelo de recomendação de filmes',
            image: aiIndication,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'AI'
        },
        {
            name: 'WebSockets PHP',
            image: sockets,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'back-end'
        },
        {
            name: 'React Native Resize (Package React Native)',
            image: lib,
            description: 'Introducing UseSUS, an application designed to streamline and simplify the\n' +
                '        process of tracking procedures within the Brazilian Unified Health System\n' +
                '        (SUS). With UseSUS\n' +
                '        platform.',
            link: '#',
            tags: 'mobile'
        },
    ])

    const [filteredArray, setFilteredArray] = useState();

    function filterObjectsByKeyword(array: any[], keyword: string): any[] {
        function removeSpecialCharacters(str: string): string {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }

        const filteredArray = array.filter(item => {
            const normalizedKeyword = removeSpecialCharacters(keyword);
            const normalizedDescription = removeSpecialCharacters(item.description);
            const normalizedTags = removeSpecialCharacters(item.name);

            return (
                normalizedDescription.includes(normalizedKeyword) ||
                normalizedTags.includes(normalizedKeyword)
            );
        });

        return filteredArray;
    }

    return (
        <Box minH={'100vh'} bg={'background.50'}>
            <Container maxW="container.xl" pt={'50px'} style={{
                zoom: isScreenHeightHD() ? 0.7 : 0
            }}>
                <Text color={'secondary'} fontSize="24px" fontFamily={"body"}
                      letterSpacing="3px" fontWeight="bold">
                    What I've done
                </Text>
                <Text color={'light'} fontSize="48px" fontFamily={"body"}
                      fontWeight="bold" letterSpacing="3px">
                    My Projects
                </Text>
                <Box border="1px solid" borderColor={"secondary"} width="150px" mr="4"/>
                <Spacer mt={'50px'}/>
                <Input
                    placeholder='Filter projects'
                    bg={"dark"}
                    border={'0'}
                    color={'light'}
                    letterSpacing="3px"
                    onChange={(e) => {
                        setFilteredArray(filterObjectsByKeyword(projects, e.target.value))
                    }}

                    fontFamily={"body"}
                    _placeholder={{
                        color: 'light', fontFamily: "body", letterSpacing: "3px"
                    }}
                    focusBorderColor='light'
                    w={'40%'}
                    h={'44px'}
                />

                <Tabs isLazy>
                    <TabList borderBottom="none" bg={'dark'} borderRadius={'5px'} p={'2'} mt={'50px'} h={'44px'}>
                        <Tab color={'light'} fontSize="sm" fontFamily={"body"}
                             letterSpacing="3px"
                             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>All Projects
                            (42)</Tab>
                        <Tab color={'light'} fontSize="sm" fontFamily={"body"}
                             letterSpacing="3px"
                             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Mobile</Tab>
                        <Tab color={'light'} fontSize="sm" fontFamily={"body"}
                             letterSpacing="3px"
                             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Web</Tab>
                        <Tab color={'light'} fontSize="sm" fontFamily={"body"}
                             letterSpacing="3px"
                             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Others</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel ps={0} pe={0}>
                            <HStack overflowX="auto" css={{
                                '&::-webkit-scrollbar': {
                                    width: '6px',
                                    borderRadius: '4px',
                                    height: '8px',

                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#4C5252',
                                    borderRadius: '4px',


                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#BFBFBF',
                                    borderRadius: '4px',


                                },
                            }} spacing={4} pb={'12px'}>

                                {(filteredArray || projects).map((item) => {
                                    return (
                                        <Box flex="0 0 350px" borderRadius="md" bg='dark'>
                                            <Image src={item.image} alt="Imagem"/>
                                            <Box p={4}>
                                                <Flex align="center" mb={2}>
                                                    <Heading color={'white'} fontSize="md" fontFamily={"body"}
                                                             fontWeight="bold" letterSpacing="3px">{item.name}</Heading>
                                                    <Badge bg="light" ms={'12px'} borderRadius={'50px'}
                                                           color={'dark'}
                                                           fontSize="10px" fontFamily={"body"}
                                                           fontWeight="regular" px={'15px'}>{item.tags}</Badge>

                                                </Flex>

                                                <Text mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                      fontWeight="regular" letterSpacing="3px">
                                                    {item.description}
                                                </Text>

                                                <Flex justify="flex-end">
                                                    <Link mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                          fontWeight="bold" letterSpacing="3px">See More</Link>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    )


                                })}

                            </HStack>

                        </TabPanel>
                        <TabPanel>
                            <HStack overflowX="auto" css={{
                                '&::-webkit-scrollbar': {
                                    width: '6px',
                                    borderRadius: '4px',
                                    height: '8px',

                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#4C5252',
                                    borderRadius: '4px',


                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#BFBFBF',
                                    borderRadius: '4px',


                                },
                            }} spacing={4} pb={'12px'}>
                                {projects.map((item) => {
                                    return item.tags === 'mobile' && (
                                        <Box flex="0 0 350px" borderRadius="md" bg='dark'>
                                            <Image src={item.image} alt="Imagem"/>
                                            <Box p={4}>
                                                <Flex align="center" mb={2}>
                                                    <Heading color={'white'} fontSize="md" fontFamily={"body"}
                                                             fontWeight="bold" letterSpacing="3px">{item.name}</Heading>

                                                    <Badge bg="light" ms={'12px'} borderRadius={'50px'}
                                                           color={'dark'}
                                                           fontSize="10px" fontFamily={"body"}
                                                           fontWeight="regular" px={'15px'}>{item.tags}</Badge>
                                                </Flex>

                                                <Text mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                      fontWeight="regular" letterSpacing="3px">
                                                    {item.description}
                                                </Text>

                                                <Flex justify="flex-end">
                                                    <Link mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                          fontWeight="bold" letterSpacing="3px">See More</Link>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </HStack>

                        </TabPanel>
                        <TabPanel>
                            <HStack overflowX="auto" css={{
                                '&::-webkit-scrollbar': {
                                    width: '6px',
                                    borderRadius: '4px',
                                    height: '8px',

                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#4C5252',
                                    borderRadius: '4px',


                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#BFBFBF',
                                    borderRadius: '4px',


                                },
                            }} spacing={4} pb={'12px'}>
                                {projects.map((item) => {
                                    return (item.tags === 'front-end' || item.tags === 'back-end') && (
                                        <Box flex="0 0 350px" borderRadius="md" bg='dark'>
                                            <Image src={item.image} alt="Imagem"/>
                                            <Box p={4}>
                                                <Flex align="center" mb={2}>
                                                    <Heading color={'white'} fontSize="md" fontFamily={"body"}
                                                             fontWeight="bold" letterSpacing="3px">{item.name}</Heading>

                                                    <Badge bg="light" ms={'12px'} borderRadius={'50px'}
                                                           color={'dark'}
                                                           fontSize="10px" fontFamily={"body"}
                                                           fontWeight="regular" px={'15px'}>{item.tags}</Badge>
                                                </Flex>

                                                <Text mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                      fontWeight="regular" letterSpacing="3px">
                                                    {item.description}
                                                </Text>

                                                <Flex justify="flex-end">
                                                    <Link mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                          fontWeight="bold" letterSpacing="3px">See More</Link>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </HStack>
                        </TabPanel>

                        <TabPanel>
                            <HStack overflowX="auto" css={{
                                '&::-webkit-scrollbar': {
                                    width: '6px',
                                    borderRadius: '4px',
                                    height: '8px',

                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#4C5252',
                                    borderRadius: '4px',


                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#BFBFBF',
                                    borderRadius: '4px',


                                },
                            }} spacing={4} pb={'12px'}>
                                {projects.map((item) => {
                                    return (item.tags !== 'front-end' && item.tags !== 'back-end' && item.tags !== 'mobile') && (
                                        <Box flex="0 0 350px" borderRadius="md" bg='dark'>
                                            <Image src={item.image} alt="Imagem"/>
                                            <Box p={4}>
                                                <Flex align="center" mb={2}>
                                                    <Heading color={'white'} fontSize="md" fontFamily={"body"}
                                                             fontWeight="bold" letterSpacing="3px">{item.name}</Heading>

                                                    <Badge bg="light" ms={'12px'} borderRadius={'50px'}
                                                           color={'dark'}
                                                           fontSize="10px" fontFamily={"body"}
                                                           fontWeight="regular" px={'15px'}>{item.tags}</Badge>
                                                </Flex>

                                                <Text mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                      fontWeight="regular" letterSpacing="3px">
                                                    {item.description}
                                                </Text>

                                                <Flex justify="flex-end">
                                                    <Link mb={4} color={'light'} fontSize="xs" fontFamily={"body"}
                                                          fontWeight="bold" letterSpacing="3px">See More</Link>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </HStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Container>

        </Box>
    )

}
