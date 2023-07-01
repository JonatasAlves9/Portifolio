import {
    Text,
    Box,
    Container,
    Spacer,
    FormControl,
    Input,
    FormLabel,
    FormHelperText,
    Textarea,
    Button
} from '@chakra-ui/react'
import { isScreenHeightHD } from '../../utils/isHd'

export const Contact = () => {

    return (
        <Box minH={'100vh'} bg={'background.0'}>
            <Container maxW="container.xl" pt={'50px'} style={{
                        zoom: isScreenHeightHD() ? 0.7 : 0
                  }}>
                <Text color={'secondary'} fontSize="24px" fontFamily={"body"}
                      letterSpacing="3px" fontWeight="bold">
                    Talk to me
                </Text>
                <Text color={'light'} fontSize="48px" fontFamily={"body"}
                      fontWeight="bold" letterSpacing="3px">
                    Contact
                </Text>
                <Box border="1px solid" borderColor={"secondary"} width="150px" mr="4"/>
                <Spacer mt={'50px'}/>

                <FormControl>
                    <FormLabel color={'light'} fontSize={'sm'} fontFamily={"body"}
                               letterSpacing="3px">Your name</FormLabel>
                    <Input
                        bg={"dark"}
                        border={'0'}
                        color={'light'}
                        fontFamily={"body"}
                        _placeholder={{
                            color: 'light', fontFamily: "body", letterSpacing: "3px"
                        }}
                        focusBorderColor='light'
                        w={'40%'}
                        h={'44px'}
                    />
                </FormControl>

                <FormControl mt={'15px'}>
                    <FormLabel color={'light'} fontSize={'sm'} fontFamily={"body"}
                               letterSpacing="3px">Your email</FormLabel>
                    <Input
                        bg={"dark"}
                        border={'0'}
                        color={'light'}
                        fontFamily={"body"}
                        _placeholder={{
                            color: 'light', fontFamily: "body", letterSpacing: "3px"
                        }}
                        focusBorderColor='light'
                        w={'40%'}
                        h={'44px'}
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl mt={'15px'}>
                    <FormLabel color={'light'} fontSize={'sm'} fontFamily={"body"}
                               letterSpacing="3px">Message</FormLabel>
                    <Textarea
                        bg={"dark"}
                        border={'0'}
                        color={'light'}
                        fontFamily={"body"}
                        _placeholder={{
                            color: 'light', fontFamily: "body", letterSpacing: "3px"
                        }}
                        focusBorderColor='light'
                        w={'100%'}
                        h={'250px'}
                    />
                </FormControl>

                <Button color='dark' border="1px solid" borderColor={'secondary'} bg={'secondary'}
                        _hover={{bg: 'background.100', borderColor: 'secondary', border: "1px solid", color: 'light'}}
                        p={'25px'}
                        w='200px' mt={'50px'} fontSize="12px" fontFamily={"body"} letterSpacing="3px">SUBMIT</Button>

            </Container>

        </Box>
    )

}
