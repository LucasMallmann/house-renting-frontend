import { Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { RiUser2Line } from 'react-icons/ri'

export function Header () {
  return (
    <Flex
      as={'header'}
      h={24}
      px={6}
      justify="space-between"
      align={'center'}
      borderBottomWidth="1px"
      borderBottomColor={'gray.200'}
    >
      <Flex as="nav" align={'center'}>
        <Heading fontSize={'xl'} color="red.500" mr={4} p={0}>
          House
        </Heading>

        <NextLink href={'/'} passHref>
          <Link ml={4}>Link</Link>
        </NextLink>
        <NextLink href={'/'} passHref>
          <Link ml={4}>Link</Link>
        </NextLink>
        <NextLink href={'/'} passHref>
          <Link ml={4}>Link</Link>
        </NextLink>
      </Flex>

      <Flex
        align={'center'}
        borderWidth="1px"
        p={3}
        width={32}
        justify="center"
        borderColor={'gray.700'}
        transitionProperty={'background'}
        transitionDuration="0.25s"
        _hover={{
          background: 'gray.100'
        }}
        cursor="pointer"
      >
        <Icon as={RiUser2Line} fontSize="20px" />
        <Text ml={2} fontWeight="bold">
          Entrar
        </Text>
      </Flex>
    </Flex>
  )
}
