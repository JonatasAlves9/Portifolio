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
            description: 'Introducing "Seek" - my React Native app, crafted with TypeScript and sleek design. Subtle animations elevate usability, merging tech and design seamlessly.',
            link: '#',
            tags: 'mobile'
        },
        {
            name: 'Rade Profissional',
            image: radepro,
            description: 'Introducing "Rade Profissional" - a React Native app crafted using TypeScript. This task management application stands out with its intricate business logic and robust security implementation. A seamless blend of advanced features and data protection assurance.',
            link: '#',
            tags: 'mobile'
        },
        {
            name: 'Etical Venda Direta',
            image: etical,
            description: 'Introducing "Etical Venda Direta" - a PWA tailored for direct sales. Developed to cater to the dynamic needs of sales representatives, its standout feature is its paramount responsiveness. This application ensures seamless access across all devices, empowering salespeople to engage effectively, regardless of their choice of technology.',
            link: '#',
            tags: 'front-end'
        },
        {
            name: 'Dashboards',
            image: dashboard,
            description: 'Within my portfolio, I take great pride in showcasing my CRM projects - a series of groundbreaking endeavors where I led the development team to success. I served as the primary mentor, guiding the process from inception to final delivery, and championing the application of clean architecture as a central pillar.\n' +
                '\n' +
                'Each CRM project is more than software; it\'s a testament to software engineering excellence. The clean architecture approach enabled the creation of highly modular and cohesive systems, ensuring scalability and maintainability without compromising code clarity.\n' +
                '\n' +
                'In my role as a leader and mentor, I witnessed the team\'s growth as we worked together to achieve ambitious goals. The dedication of each team member, combined with my guidance and expertise, resulted in CRM products that not only met expectations but exceeded them.\n' +
                '\n' +
                'These projects were more than technical tasks; they were a journey of continuous learning, innovation, and collaboration. Through the application of clean architecture, we were able to achieve highly efficient, adaptable, and high-quality systems that left a lasting impact on both business processes and the team that created them. I look forward to continuing to lead and contribute to future projects with the same level of excellence and passion.',
            link: '#',
            tags: 'front-end'
        },
        {
            name: 'Clone whatsapp',
            image: whatsapp,
            description: 'Within my portfolio, I\'m excited to highlight a noteworthy project - a WhatsApp clone. This endeavor wasn\'t just a technical reproduction; it was an exploration of modern and responsive interfaces that are paramount in today\'s landscape.\n' +
                '\n' +
                'The project aimed to align with market trends by delving into creating an interface that not only echoed WhatsApp\'s aesthetics but also ensured maximum usability and accessibility across diverse devices.\n' +
                '\n' +
                'The WhatsApp clone was an opportunity to meticulously study design choices and interaction patterns that made the original app so successful. By replicating these features, I deepened my understanding of interface design best practices, app architecture, and crafting responsive layouts.\n' +
                '\n' +
                'The ability to faithfully recreate a complex application like WhatsApp not only honed my technical skills but also allowed me to navigate the unique challenges and considerations that arise when designing modern interfaces. The cloning wasn\'t just a quest for superficial replication; it was an exploration seeking valuable insights for future projects.\n' +
                '\n' +
                'This project showcases my drive to be at the forefront of design and technology, embracing continuous learning and applying it to craft exceptional user experiences.',
            link: '#',
            tags: 'mobile'
        },
        {
            name: 'Gerador de boleto',
            image: tickets,
            description: 'In my portfolio, I proudly showcase a significant project - a billing generator developed using Node.js. This challenging endeavor was conceived to streamline the process of generating valid invoices for a specific company.\n' +
                '\n' +
                'The primary objective was to automate and optimize the billing generation procedure, offering a more efficient and accurate solution for the company. Leveraging Node.js, I harnessed the robust capabilities of the programming language to create an application that collects essential information and then utilizes it to produce ready-to-use invoices.\n' +
                '\n' +
                'The project not only entailed technical implementation but also integration with the company\'s existing systems and workflows. I was tasked with crafting a system that was secure, agile, and highly functional, ensuring that the generated invoices were accurate and compliant with financial validation requirements.\n' +
                '\n' +
                'Upon completing the billing generator, I delivered to the company a tool that significantly reduced the time and effort required to create invoices, while also minimizing the possibility of human errors. This resulted in operational efficiency and an overall enhancement in financial processes.\n' +
                '\n' +
                'This project stands as a testament to my commitment to finding creative solutions for complex challenges, all the while harnessing technological capabilities to deliver tangible value to my clients and business partners.',
            link: '#',
            tags: 'back-end'
        },
        {
            name: 'Modelo de recomendação de filmes',
            image: aiIndication,
            description: 'Within my portfolio, I\'m excited to share a project that emerged as a result of a company\'s demand - a movie recommendation model. This endeavor was a proactive initiative, crafted with the intention of exploring new domains and expanding my skill set.\n' +
                '\n' +
                'The project\'s focus was on creating a movie recommendation system that could effectively suggest films to users based on their past choices. With a foundation in data analysis and machine learning, I developed an algorithm that processed users\' previous selections to infer their preferences and tailor recommendations accordingly.\n' +
                '\n' +
                'The goal was to provide users with personalized movie suggestions, enhancing their entertainment experience and engaging them with content that aligns with their tastes. This project required me to dive into the world of recommendation systems, data preprocessing, and algorithm implementation.\n' +
                '\n' +
                'Beyond the technical aspects, the project offered valuable insights into user behavior analysis and the practical application of machine learning concepts. It provided an opportunity to explore new areas and push my boundaries, all while contributing to a practical solution that could potentially benefit a real-world audience.\n' +
                '\n' +
                'This project reflects my eagerness to expand my horizons, experiment with emerging technologies, and create solutions that can have a tangible impact. It underscores my commitment to continuous learning and my enthusiasm for tackling diverse challenges within the realm of technology.',
            link: '#',
            tags: 'AI'
        },
        {
            name: 'WebSockets PHP',
            image: sockets,
            description: 'One of my educational endeavors involved a project centered around studying websockets using PHP. This initiative was aimed at delving into the real-time capabilities of web applications and understanding how websockets could enhance user experiences.\n' +
                '\n' +
                'The project revolved around creating a chat application that allowed users to communicate instantly with each other, utilizing the power of websockets. I harnessed PHP to build the backend logic, establishing a persistent connection between the server and the clients. This connection enabled seamless, bidirectional communication, ensuring that messages were transmitted in real-time.\n' +
                '\n' +
                'Through this project, I gained a comprehensive understanding of websockets, including their architecture, protocols, and implementation techniques. I learned how to handle different events, manage connections, and effectively transmit data between the server and clients.\n' +
                '\n' +
                'Additionally, I explored the potential applications of websockets beyond chat functionalities, such as live notifications, real-time updates, and collaborative features in web applications. This project not only enriched my technical skills but also broadened my horizons by introducing me to a powerful tool for creating interactive and dynamic web experiences.\n' +
                '\n' +
                'By engaging in this project, I demonstrated my commitment to staying at the forefront of web development trends and technologies, constantly seeking opportunities to expand my knowledge and skill set.',
            link: '#',
            tags: 'back-end'
        },
        {
            name: 'React Native Resize (Package React Native)',
            image: lib,
            description: 'I\'m thrilled to discuss a project that holds a special place in my journey - a React Native library that I\'m immensely proud of. This library came to life as a solution to a personal need I identified, and it marks my first step into contributing to the developer community.\n' +
                '\n' +
                'The core problem I set out to solve was achieving consistent and real sizes across all devices, disregarding density, aspect ratios, and screen dimensions. Understanding the significance of uniformity in user interfaces, I embarked on creating a library that would provide a seamless solution for this challenge.\n' +
                '\n' +
                'The result was a React Native library that simplifies the process of maintaining uniform sizes across diverse devices. By abstracting the intricacies of screen variations, the library allows developers to focus on creating compelling user experiences without worrying about the nuances of different hardware specifications.\n' +
                '\n' +
                'This project showcases my ability to identify practical needs and craft effective solutions within the realm of mobile app development. The library not only reflects my technical skills but also underscores my dedication to contributing value to the developer community. It\'s immensely satisfying to know that this library, born from a personal requirement, has found a place in your app development arsenal and continues to enhance your projects.\n' +
                '\n' +
                'Moving forward, I\'m excited to build upon this experience and contribute further innovations that simplify and elevate the mobile development process.',
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
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
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
                            (10)</Tab>
                        <Tab color={'light'} fontSize="sm" fontFamily={"body"}
                             letterSpacing="3px"
                             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Mobile (5)</Tab>
                        <Tab color={'light'} fontSize="sm" fontFamily={"body"}
                             letterSpacing="3px"
                             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Web (4)</Tab>
                        <Tab color={'light'} fontSize="sm" fontFamily={"body"}
                             letterSpacing="3px"
                             _selected={{borderBottomWidth: '2px', fontWeight: "bold", color: 'white'}}>Others (1)</Tab>
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
                                                      fontWeight="regular" letterSpacing="3px" h={55}
                                                      overflowY={'hidden'}>
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
