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
import Link from 'next/link';

export default function ProjectCard({ imaegUrl, projectDescription, projectTag, projectTitle, projectURL }: { imaegUrl: string, projectDescription: string, projectTag: string, projectTitle: string, projectURL: string }) {
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
            src={imaegUrl}
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
              {projectTag}
            </Text>
          </Box>
          <Heading color={useColorModeValue('black', 'white')} fontSize={'2xl'} noOfLines={1}>
            {projectTitle}
          </Heading>
          <Text color={useColorModeValue('gray.500', 'gray.200')} noOfLines={2}>
            {projectDescription}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color={useColorModeValue('black', 'white')}>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w="full"
              as={'a'}
              href={projectURL}
              >
              <Text fontSize={'md'} fontWeight={'semibold'}>
                View Website
              </Text>
              <BsArrowUpRight />
            </Flex>

        </HStack>
      </Box>
    </Center>
  );
}