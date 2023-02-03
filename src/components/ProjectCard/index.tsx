import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart, BsGithub } from 'react-icons/bs';

export default function ProjectCard() {
  const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg={useColorModeValue('white', 'gray.800')}
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg={useColorModeValue('black', 'white')}
            display={'inline-block'}
            px={2}
            py={1}
            color={useColorModeValue('white', 'black')}
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              React
            </Text>
          </Box>
          <Heading color={useColorModeValue('black', 'white')} fontSize={'2xl'} noOfLines={1}>
            React v18.0
          </Heading>
          <Text color={useColorModeValue('gray.500', 'gray.200')} noOfLines={2}>
            In this post, we will give an overview of what is new in React 18,
            and what it means for the future.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color={useColorModeValue('black', 'white')}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
              <BsGithub/>
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}