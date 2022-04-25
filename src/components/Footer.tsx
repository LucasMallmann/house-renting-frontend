import {
  Box,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
  Link
} from '@chakra-ui/react'

import NextLink from 'next/link'

export default function Footer () {
  return (
    <Box as="footer" p={10} bg="gray.800" color="gray.200">
      <Grid templateColumns={'repeat(3, 1fr)'} maxWidth={1032} mx="auto">
        <GridItem>
          <Text as="strong" fontSize="lg">
            Homefast
          </Text>
          <UnorderedList
            listStyleType={'none'}
            marginX="none"
            spacing={1}
            mt={2}
          >
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Lorem ipsum dolor sit amet</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Consectetur adipiscing elit</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Integer molestie lorem at massa</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Facilisis in pretium nisl aliquet</Link>
              </NextLink>
            </ListItem>
          </UnorderedList>
        </GridItem>

        <GridItem>
          <Text as="strong" fontSize="lg">
            Homefast
          </Text>
          <UnorderedList
            listStyleType={'none'}
            marginX="none"
            spacing={1}
            mt={2}
          >
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Lorem ipsum dolor sit amet</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Consectetur adipiscing elit</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Integer molestie lorem at massa</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Facilisis in pretium nisl aliquet</Link>
              </NextLink>
            </ListItem>
          </UnorderedList>
        </GridItem>

        <GridItem>
          <Text as="strong" fontSize="lg">
            Homefast
          </Text>
          <UnorderedList
            listStyleType={'none'}
            marginX="none"
            spacing={1}
            mt={2}
          >
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Lorem ipsum dolor sit amet</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Consectetur adipiscing elit</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Integer molestie lorem at massa</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={'/'} passHref>
                <Link>Facilisis in pretium nisl aliquet</Link>
              </NextLink>
            </ListItem>
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  )
}
