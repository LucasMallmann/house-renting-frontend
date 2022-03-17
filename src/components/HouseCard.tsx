import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { RiHeartLine, RiHotelBedLine, RiRulerLine } from 'react-icons/ri'

export function HouseCard () {
  return (
    <Flex
      direction={'column'}
      flex={1}
      borderWidth="2px"
      borderColor={'gray.200'}
      _hover={{
        boxShadow: 'md'
      }}
      transitionProperty={'box-shadow'}
      transitionDuration="0.25s"
      cursor={'pointer'}
    >
      <Box h={250} background="gray.200" />
      <Box p={3}>
        <Text
          as="span"
          fontSize={'small'}
          textTransform="capitalize"
          color={'gray.600'}
        >
          Casa
        </Text>
        <Box mt={3}>
          <Text fontWeight={'semibold'} color="gray.900">
            Rua Rachel de Queiroz
          </Text>
          <Text fontSize={'sm'} color="gray.600">
            Vila Expedicionários, Cruzeiro
          </Text>
        </Box>
        <Flex
          direction={'row'}
          mt={3}
          align="center"
          color="gray.700"
          fontSize={'sm'}
        >
          <Text verticalAlign={'center'}>
            <Icon as={RiRulerLine} /> 120 m²
          </Text>
          <Text ml={4}>
            <Icon as={RiHotelBedLine} /> 3 quartos
          </Text>
        </Flex>
        <Flex justify={'space-between'} mt={3} align="center">
          <Text color="gray.700">Aluguel R$ 1.000,00</Text>
          <Flex direction="row">
            <Flex
              borderRadius={'full'}
              w={8}
              h={8}
              borderWidth="1px"
              borderColor={'gray.400'}
              align={'center'}
              justify={'center'}
            >
              <Icon as={RiHeartLine} fontSize="20" color={'gray.600'} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
