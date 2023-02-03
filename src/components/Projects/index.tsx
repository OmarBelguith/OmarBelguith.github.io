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
import introdus from '@/assets/Introdus.png';
import ItMatched from '@/assets/it-matched.png';
import yelp from '@/assets/yelp.png';
export default function Projects() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Projects</Heading>
            </Stack>
            <Container maxW={'7xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                    <ProjectCard imaegUrl={introdus.src} projectDescription={'YOUR PRE & ONBOARDING PLATFORM Give Your Employees a Flying Start An Employee Onboarding Software that makes new hires feel Connected, Prepared & Safe, even before the first day on the job.'}
                        projectTitle={'Introdus'} projectURL={'https://introdus.com/'} projectTag={'Angular'}
                    />
                    <ProjectCard imaegUrl={ItMatched.src} projectDescription={'ItMatched is a platform that helps you find your dream job. We are a team of passionate people who are committed to helping you find your dream job.'}
                        projectTitle={'ItMatched'} projectURL={'https://itmatched.com/'} projectTag={'Angular'}/>
                    <ProjectCard imaegUrl={yelp.src} projectDescription={'Yelp is a local search service and crowd-sourced review forum. Yelp was founded in 2004 by former PayPal employees, Jeremy Stoppelman and Russel Simmons.'}
                        projectTitle={'Yelp'} projectURL={'https://yelp.com/'} projectTag={'React'}/>
                </SimpleGrid>
            </Container>
        </Box>
    )
}