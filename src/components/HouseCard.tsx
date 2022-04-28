import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
// import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { RiHeartLine, RiHotelBedLine, RiRulerLine } from 'react-icons/ri'
import { Carousel, CarouselItem } from './Carousel'

type Props = {
  name: string;
  address: {
    neighbourhood: string;
    street: string
  };
  images: string[];
  price: number;
  rooms: Record<string, unknown>;
  area: number;
};

export function HouseCard ({
  name,
  address,
  images,
  price,
  rooms,
  area
}: Props) {
  const handleLike = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const formattedPrice = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

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
                sizes="100%"
              />
            </CarouselItem>
          )
        })}
      </Carousel>

      <NextLink href={'/imovel/id'} passHref>
        <a>
          <Box p={3}>
            <Text
              as="span"
              fontSize={'small'}
              textTransform="capitalize"
              color={'gray.600'}
            >
              {name}
            </Text>
            <Box mt={3}>
              <Text fontWeight={'semibold'} color="gray.900">
                {address.street}
              </Text>
              <Text fontSize={'sm'} color="gray.600">
                {address.neighbourhood}
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
                <Icon as={RiRulerLine} /> {area} m²
              </Text>
              <Text ml={4}>
                <Icon as={RiHotelBedLine} /> {rooms.bedrooms} quartos
              </Text>
            </Flex>
            <Flex justify={'space-between'} mt={3} align="center">
              <Text color="gray.700">Aluguel {formattedPrice}</Text>
              <Flex direction="row">
                <Flex
                  as={'button'}
                  borderRadius={'full'}
                  w={8}
                  h={8}
                  borderWidth="1px"
                  borderColor={'gray.400'}
                  align={'center'}
                  justify={'center'}
                  onClick={handleLike}
                >
                  <Icon as={RiHeartLine} fontSize="20" color={'gray.600'} />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </a>
      </NextLink>
    </Flex>
  )
}
