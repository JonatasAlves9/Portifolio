import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Spacer,
    Text,
    Textarea,
    useToast
} from '@chakra-ui/react'
import {isScreenHeightHD} from '../../utils/isHd'
import * as Yup from 'yup'
import {Field, Form, Formik} from "formik";
import emailjs from 'emailjs-com';
import {useState} from "react";

export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('O nome é obrigatório.'),
        email: Yup.string().email('Email inválido.').required('O email é obrigatório.'),
        mensagem: Yup.string().required('A mensagem é obrigatória.'),
    });

    const toast = useToast()

    // Função para lidar com o envio do formulário
    const handleSubmit = (values) => {
        setLoading(true);
        enviarEmail(values)
    };

    const enviarEmail = (e: any) => {

        // Configure suas informações de conta do EmailJS
        const serviceID = 'service_i05qnwo';
        const templateID = 'template_oxiy7wp';
        const userID = 'user_5h98Bdcashgeg3SJnQLJG';

        // Dados para enviar o e-mail
        const data = {
            to_email: 'alvesjonatas99@gmail.com',
            message: `Mensagem de: ${e.nome} com o email ${e.email}: ${e.mensagem}`,
        };

        emailjs.send(serviceID, templateID, data, userID).then(
            () => {
                toast({
                    title: 'E-mail enviado!',
                    description: 'O e-mail foi enviado com sucesso.',
                    status: 'success',
                    duration: 5000,
                    position: 'top',
                    isClosable: true,
                });
                setLoading(false);

            },
            (error) => {
                toast({
                    title: 'Erro ao enviar!',
                    description: 'Tente novamente mais tarde.',
                    status: 'error',
                    duration: 5000,
                    position: 'top',
                    isClosable: true,
                });
                setLoading(false);
            }
        );
    };

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
                <Formik
                    initialValues={{nome: '', email: '', mensagem: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <FormControl>
                            <FormLabel color={'light'} fontSize={'sm'} fontFamily={"body"}
                                       letterSpacing="3px">Your name</FormLabel>
                            <Field
                                as={Input}
                                name="nome"
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
                            <Field
                                as={Input}
                                name="email"
                                type={'email'}
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
                            <Field
                                as={Textarea}
                                bg={"dark"}
                                name="mensagem"
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

                            <Button color='dark' border="1px solid" borderColor={'secondary'} bg={'secondary'}
                                    type={'submit'}
                                    isLoading={loading}
                                    _hover={{
                                        bg: 'background.100',
                                        borderColor: 'secondary',
                                        border: "1px solid",
                                        color: 'light'
                                    }}
                                    p={'25px'}
                                    w='200px' mt={'50px'} fontSize="12px" fontFamily={"body"}
                                    letterSpacing="3px">SUBMIT</Button>
                        </FormControl>
                    </Form>
                </Formik>
            </Container>
        </Box>
    )

}
