import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
export default function Hero() {
  return (
    <Stack paddingY={'10'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Empowering the next generation
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              to reach their full potential
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Dedicated to guiding and inspiring the future of technology.
          Helping the next generation of technologists reach their full potential through education and mentorship.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Let's Build Something Great
            </Button>
            <Link href="https://www.codementor.io/@omarbelguith?refer=badge">
              <Button rounded={'full'}>Find Me On Codementor</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src='hero.png'
          rounded={'full'}
        />
      </Flex>
    </Stack>
  );
}