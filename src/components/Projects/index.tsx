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
import ProjectCard from '../ProjectCard';

export default function Projects() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Projects</Heading>
            </Stack>
            <Container maxW={'7xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                    <ProjectCard/>
                </SimpleGrid>
            </Container>
        </Box>
    )
}