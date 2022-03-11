// import { ChakraNextImage } from '@/components/ChakraImage'
import { Input } from '@/components/SearchInput'
import {
  Heading,
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  Stack,
  Button
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { MdBed, MdHouse, MdLocationCity, MdMoney } from 'react-icons/md'

import coverImage from '../../public/images/cover.jpg'

const Home: NextPage = () => {
  return (
    <Box as="main" mt={24}>
      <Flex
        h={670}
        p={12}
        position={'relative'}
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.2)'
        }}
      >
        <Image
          alt="Capa"
          src={coverImage}
          layout={'fill'}
          objectFit={'cover'}
          placeholder={'blur'}
          quality={100}
        />

        <Flex width={'xl'} padding={8} bg="white" zIndex={1} direction="column">
          <Heading as="h1" size={'2xl'} fontWeight="bold">
            Encontre a casa dos seus sonhos
          </Heading>

          <Tabs colorScheme={'red'} mt={4} size="sm">
            <TabList>
              <Tab
                _selected={{
                  color: 'red.500',
                  borderBottomColor: 'red.500',
                  borderBottomWidth: '4px',
                  fontWeight: 'bold'
                }}
                paddingBottom={2}
                paddingX={0}
                fontSize="md"
              >
                Alugar
              </Tab>
              <Tab
                _selected={{
                  color: 'red.500',
                  borderBottomColor: 'red.500',
                  borderBottomWidth: '4px',
                  fontWeight: 'bold'
                }}
                paddingBottom={2}
                paddingX={0}
                marginLeft={8}
                fontSize="md"
              >
                Comprar
              </Tab>
            </TabList>

            <TabPanels py={1}>
              <TabPanel paddingX={0}>
                <form>
                  <VStack>
                    <Input
                      name="city"
                      label="Cidade"
                      icon={MdLocationCity}
                      placeholder="Digite a cidade"
                    />

                    <Input
                      name="neighbourhood"
                      label="Bairro"
                      icon={MdHouse}
                      placeholder="Digite a cidade"
                    />

                    <Stack direction={'row'}>
                      <Input
                        name="price"
                        label="Aluguel até"
                        icon={MdMoney}
                        placeholder="Escolha o valor"
                      />

                      <Input
                        name="rooms"
                        label="Quartos"
                        icon={MdBed}
                        placeholder="N° de quartos"
                      />
                    </Stack>
                  </VStack>

                  <Flex flex={1} justify="center" mt={4}>
                    <Button
                      type="submit"
                      background={'red.500'}
                      color="white"
                      width={'100%'}
                      marginTop={4}
                      size="lg"
                      _hover={{
                        background: 'red.600'
                      }}
                    >
                      Buscar imóveis
                    </Button>
                  </Flex>
                </form>
              </TabPanel>
              <TabPanel paddingX={0}>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home
