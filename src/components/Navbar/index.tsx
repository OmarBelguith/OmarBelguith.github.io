import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  Image,
  IconButton,
  useDisclosure,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import logoBlack from '@/assets/omar-b-logos_black.png';
import logoWhite from '@/assets/omar-b-logos_white.png';
import { navigation } from './navigation';
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={4}
    py={2}
    rounded={'lg'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
              <Link href={''}>
                <Image
                  src={colorMode === 'light' ? logoBlack.src : logoWhite.src}
                  alt={'logo'}
                  width={100}
                />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={'2'}
              display={{ base: 'none', md: 'flex' }}>
              {navigation.map(({ label }, index) => (
                <NavLink key={index}>{label}</NavLink>
              ))}
            </HStack>
          <Box gap={4}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>
        </Flex>
        {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {navigation.map(({ label }, index) => (
                  <NavLink key={index}>{label}</NavLink>
                ))}
              </Stack>
            </Box>) : null}
      </Box>
    </>
  );
}