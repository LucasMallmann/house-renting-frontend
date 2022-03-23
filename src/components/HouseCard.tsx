import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { RiHeartLine, RiHotelBedLine, RiRulerLine } from 'react-icons/ri'
// import Image from 'next/image'
import { Carousel, CarouselItem } from './Carousel'

const images = [
  'https://i.picsum.photos/id/1049/400/250.jpg?hmac=cYYI0-hDxy_zQPNCHSlAmNeFZQWar62P08T9qKvMSzc',
  'https://i.picsum.photos/id/879/400/250.jpg?hmac=yiVHF5dDlgEt5EBQa8Y25mxUoZ-AlKB-GONqZ0psmk8',
  'https://i.picsum.photos/id/493/400/250.jpg?hmac=Aug-iuFdKnb20RywtFrQKmEV1nZ-g_9tZRP3w_t_PFE'
]

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
      <Carousel>
        {images.map((img, idx) => {
          return (
            <CarouselItem
              key={idx}
              height={250}
              width="100%"
              position={'relative'}
            >
              <Image
                alt="Capa"
                src={img}
                layout={'fill'}
                objectFit={'cover'}
                sizes='100%'
              />
            </CarouselItem>
          )
        })}
      </Carousel>

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
