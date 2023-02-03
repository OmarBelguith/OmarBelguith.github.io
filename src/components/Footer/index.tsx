import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import Link from 'next/link';
import logoBlack from '@/assets/omar-b-logos_black.png';
import logoWhite from '@/assets/omar-b-logos_white.png';


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Link href={''}>
          <img
            src={colorMode === 'light' ? logoBlack.src : logoWhite.src}
            alt={'logo'}
            width={100}
          />
        </Link>
        <Text>© 2023 Omar Belghith. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/omarbelghith2'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/OmarBelguith'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/omar-belguith-profile/'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}