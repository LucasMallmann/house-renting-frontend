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
import { NextPage } from 'next'
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
const MapboxMap = dynamic(() => import('@/components/Mapbox'))

const images = [
  'https://i.picsum.photos/id/58/350/350.jpg?hmac=JlzT2Q8WTrPc88pgMgjz0b9BGGph1aPhA5B8jRQypTM',
  'https://i.picsum.photos/id/307/350/350.jpg?hmac=WOdME5rJgFx7QuKFQ2__dhXtUg9sN_f92yJBWAVRXoY ',
  'https://i.picsum.photos/id/476/350/350.jpg?hmac=yTf54LQ6v5CP0a_-OJ-7RPIt2BMiCkC2cYEVYw40lac',
  'https://i.picsum.photos/id/663/350/350.jpg?hmac=-qTCClSD5fFl-xMVm4aV5Vd2YpUUBxnPLzEey_oy9uE'
]

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

const HousePage: NextPage = () => {
  return (
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
            Studio para alugar com 1 quarto, 50m²
          </Text>

          <Text mt={4} color="gray.600">
            Rua Paim, Consolação, São Paulo
          </Text>
          <Flex align="center" color="gray.600">
            <Icon as={RiTimeLine} />
            <Text ml={1} fontSize="sm">
              Publicado há 7 horas
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
              <Text fontSize={'sm'}>90m²</Text>
            </Flex>

            <Flex direction={'column'} align="center">
              <Icon color="red.500" as={RiHotelBedLine} />
              <Text fontSize={'sm'}>2 quartos</Text>
            </Flex>

            <Flex direction={'column'} align="center">
              <Icon color="red.500" as={FaShower} />
              <Text fontSize={'sm'}>1 banheiro</Text>
            </Flex>

            <Flex direction={'column'} align="center">
              <Icon color="red.500" as={RiCarLine} />
              <Text fontSize={'sm'}>1 vaga</Text>
            </Flex>
          </Stack>

          <Box>
            <Flex align={'flex-start'}>
              <Icon fontSize={'lg'} as={BsTextParagraph} />
              <Box paddingLeft={3} color="gray.700">
                <Text as="strong">Sobre esse imóvel</Text>
                <Text as="p" lineHeight={'tall'} mt={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur perferendis accusantium labore incidunt saepe
                  pariatur soluta sint delectus nisi, inventore nam, quia atque
                  architecto unde officia culpa doloribus mollitia officiis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur perferendis accusantium labore incidunt saepe
                  pariatur soluta sint delectus nisi, inventore nam, quia atque
                  architecto unde officia culpa doloribus mollitia officiis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur perferendis accusantium labore incidunt saepe
                  pariatur soluta sint delectus nisi, inventore nam, quia atque
                  architecto unde officia culpa doloribus mollitia officiis?
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box h={450} w="100%" mt={8} mx='auto'>
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
                <Text>R$ 1000</Text>
              </Flex>
              <Flex w="100%" justify="space-between">
                <Text>Condomínio</Text>
                <Text>R$ 200</Text>
              </Flex>
              <Flex w="100%" justify="space-between">
                <Text>IPTU</Text>
                <Text>R$ 240,50</Text>
              </Flex>
              <Flex w="100%" justify="space-between">
                <Text>Seguro incêndio</Text>
                <Text>R$ 35</Text>
              </Flex>
              <Flex w="100%" justify="space-between">
                <Text>Taxa de serviço</Text>
                <Text>R$ 0</Text>
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
  )
}

export default HousePage
