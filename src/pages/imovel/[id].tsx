import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {
  RiCarLine,
  RiHotelBedLine,
  RiRulerLine,
  RiTimeLine
} from 'react-icons/ri'
import { FaShower } from 'react-icons/fa'
import { BsTextParagraph } from 'react-icons/bs'

import Carousel from 'react-multi-carousel'
import { NextSeo } from 'next-seo'
import { formatPrice } from '@/utils'
const MapboxMap = dynamic(() => import('@/components/Mapbox'))

const defaultImages = [
  'https://i.picsum.photos/id/58/350/350.jpg?hmac=JlzT2Q8WTrPc88pgMgjz0b9BGGph1aPhA5B8jRQypTM',
  'https://i.picsum.photos/id/307/350/350.jpg?hmac=WOdME5rJgFx7QuKFQ2__dhXtUg9sN_f92yJBWAVRXoY ',
  'https://i.picsum.photos/id/476/350/350.jpg?hmac=yTf54LQ6v5CP0a_-OJ-7RPIt2BMiCkC2cYEVYw40lac',
  'https://i.picsum.photos/id/663/350/350.jpg?hmac=-qTCClSD5fFl-xMVm4aV5Vd2YpUUBxnPLzEey_oy9uE'
]

const defaultDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Aspernatur perferendis accusantium labore incidunt saepe
pariatur soluta sint delectus nisi, inventore nam, quia
atque architecto unde officia culpa doloribus mollitia
officiis? Lorem ipsum dolor sit amet consectetur adipisicing
elit. Aspernatur perferendis accusantium labore incidunt
saepe pariatur soluta sint delectus nisi, inventore nam,
quia atque architecto unde officia culpa doloribus mollitia
officiis? Lorem ipsum dolor sit amet consectetur adipisicing
elit. Aspernatur perferendis accusantium labore incidunt
saepe pariatur soluta sint delectus nisi, inventore nam,
quia atque architecto unde officia culpa doloribus mollitia
officiis?`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
}

type Props = {
  name: string;
  address: {
    neighbourhood: string;
    street: string;
  };
  images: string[];
  price: number;
  rooms: Record<string, unknown>;
  area: number;
  createdAt: string;
  description: string;
  taxes?: {
    condominium: number;
    iptu: number;
    fire: number;
    services: number;
  };
};

const defaultTaxes = {
  condominium: 0,
  iptu: 0,
  fire: 0,
  services: 0
}

export default function HousePage ({
  name,
  address,
  images = defaultImages,
  price,
  rooms,
  area,
  createdAt,
  description = defaultDescription,
  taxes = defaultTaxes
}: Props) {
  const formattedName = `${name}, ${area}m²`

  const formattedPrice = formatPrice(price)

  return (
    <>
      <NextSeo title="Studio para alugar com 1 quarto, 50m²" />
      <Flex as="section" direction="column" position={'relative'}>
        <Carousel ssr itemClass="image-item" responsive={responsive}>
          {images.map((image, idx) => (
            <Flex key={idx} height={[300, 300, 300, 450]}>
              <Image
                alt="Capa"
                src={image}
                layout={'fill'}
                objectFit={'cover'}
                sizes="100%"
              />
            </Flex>
          ))}
        </Carousel>
        <Grid
          as="main"
          maxWidth={1032}
          mx="auto"
          width={'100%'}
          px={4}
          mt={4}
          templateColumns={['1fr', '1fr', '1fr', '2fr 1fr']}
        >
          <GridItem mr={8} paddingBottom={24}>
            <Text fontSize={'3xl'} fontWeight="bold">
              {formattedName}
            </Text>

            <Text mt={4} color="gray.600">
              {address.street} - {address.neighbourhood}
            </Text>
            <Flex align="center" color="gray.600">
              <Icon as={RiTimeLine} />
              <Text ml={1} fontSize="sm">
                Publicado {createdAt}
              </Text>
            </Flex>

            <Stack
              direction={'row'}
              spacing={8}
              my={8}
              py={4}
              borderTopWidth={1}
              borderBottomWidth={1}
              borderColor="gray.400"
            >
              <Flex direction={'column'} align="center">
                <Icon color="red.500" as={RiRulerLine} />
                <Text fontSize={'sm'}>{area}m²</Text>
              </Flex>

              <Flex direction={'column'} align="center">
                <Icon color="red.500" as={RiHotelBedLine} />
                <Text fontSize={'sm'}>{rooms.bedrooms} quartos</Text>
              </Flex>

              <Flex direction={'column'} align="center">
                <Icon color="red.500" as={FaShower} />
                <Text fontSize={'sm'}>{rooms.bathrooms} banheiro</Text>
              </Flex>

              <Flex direction={'column'} align="center">
                <Icon color="red.500" as={RiCarLine} />
                <Text fontSize={'sm'}>{rooms.garage} vaga</Text>
              </Flex>
            </Stack>

            <Box>
              <Flex align={'flex-start'}>
                <Icon fontSize={'lg'} as={BsTextParagraph} />
                <Box paddingLeft={3} color="gray.700">
                  <Text as="strong">Sobre esse imóvel</Text>
                  <Text as="p" lineHeight={'tall'} mt={2}>
                    {description}
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box h={450} w="100%" mt={8} mx="auto">
              <Text as="h2" fontSize={'2xl'} fontWeight="bold" mb={4}>
                Como chegar?
              </Text>
              <MapboxMap />
            </Box>
          </GridItem>

          <GridItem>
            <Flex
              direction={'column'}
              p={4}
              position="sticky"
              top={4}
              mb={8}
              boxShadow="lg"
              borderWidth={1}
            >
              <VStack
                spacing={4}
                color="gray.600"
                borderBottomWidth={1}
                paddingBottom={4}
              >
                <Flex w="100%" justify="space-between">
                  <Text>Aluguel</Text>
                  <Text>{formattedPrice}</Text>
                </Flex>
                <Flex w="100%" justify="space-between">
                  <Text>Condomínio</Text>
                  <Text>{formatPrice(taxes.condominium)}</Text>
                </Flex>
                <Flex w="100%" justify="space-between">
                  <Text>IPTU</Text>
                  <Text>{formatPrice(taxes.iptu)}</Text>
                </Flex>
                <Flex w="100%" justify="space-between">
                  <Text>Seguro incêndio</Text>
                  <Text>{formatPrice(taxes.fire)}</Text>
                </Flex>
                <Flex w="100%" justify="space-between">
                  <Text>Taxa de serviço</Text>
                  <Text>{formatPrice(taxes.services)}</Text>
                </Flex>
              </VStack>

              <Button
                bg="red.500"
                color="white"
                _hover={{ bg: 'red.600' }}
                variant="unstyled"
                borderRadius={'none'}
                size="lg"
                mt={4}
              >
                Agendar visita
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export async function getStaticPaths () {
  return {
    paths: [
      { params: { id: 'id' } }
    ],
    fallback: true
  }
}

export async function getStaticProps () {
  return {
    props: {
      name: 'Studio para alugar',
      address: {
        neighbourhood: 'Vila Expedicionários',
        street: 'Rua dos Limões Vermelhos'
      },
      // images: [],
      price: 1000,
      rooms: {
        bedrooms: 2,
        bathrooms: 1,
        garage: 1
      },
      area: 90,
      createdAt: 'Wed Apr 27 2022 22:28:55 GMT-0300 (Brasilia Standard Time)',
      // description: string,
      taxes: {
        condominium: 120,
        iptu: 35,
        fire: 15,
        services: 20
      }
    }
  }
}
