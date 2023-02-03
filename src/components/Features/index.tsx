import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { features } from './features';
export default function Features() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Building Better Technology, Together</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    With a focus on front-end and back-end development and expertise in cloud computing solutions, we bring your ideas to life.
                </Text>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}