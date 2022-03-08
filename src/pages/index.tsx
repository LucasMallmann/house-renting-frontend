// import { ChakraNextImage } from '@/components/ChakraImage'
import { Heading, Flex, Icon, Input } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { RiSearchLine } from 'react-icons/ri'

import coverImage from '../../public/images/cover.jpg'

const Home: NextPage = () => {
  return (
    <Flex w={'100vw'}>
      <Flex
        w="100%"
        h={452}
        justify="center"
        align="center"
        id='testando'
        position={'relative'}
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
      >
        <Image
          alt="Imagem de cover"
          src={coverImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
        <Flex direction="column" zIndex={2}>
          <Heading
            zIndex={2}
            color="gray.50"
            fontWeight="bold"
            fontSize="5xl"
            width={400}
            textAlign='center'
            margin='auto'
          >
            Your dream house is here
          </Heading>

          <Flex
            py={3}
            w={500}
            mt={7}
            alignSelf="center"
            position="relative"
            bg="gray.100"
            borderRadius={'lg'}
          >
            <Input
              color="gray.900"
              variant="unstyled"
              placeholder="Buscar na plataforma"
              _placeholder={{ color: 'gray.400' }}
              size="sm"
              px={4}
              mr={4}
            />
            <Icon as={RiSearchLine} fontSize="20" color={'gray.900'} mr={4} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
