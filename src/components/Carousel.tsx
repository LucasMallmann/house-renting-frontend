// eslint-disable-next-line no-use-before-define
import React, { ReactElement, useState } from 'react'
import { Box, Flex, BoxProps, Button, Icon, Fade } from '@chakra-ui/react'
import { useSwipeable } from 'react-swipeable'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

type ItemProps = BoxProps & {
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
};

export function CarouselItem ({
  width = 200,
  height = 200,
  children,
  ...rest
}: ItemProps) {
  return (
    <Box
      width={width}
      height={height}
      display="inline-flex"
      alignItems={'center'}
      justifyContent="center"
      {...rest}
    >
      {children}
    </Box>
  )
}

export function Carousel ({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHover, setIsHover] = useState(false)

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <Box
      {...handlers}
      overflow="hidden"
      position={'relative'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box
        whiteSpace={'nowrap'}
        transitionProperty={'transform'}
        transitionDuration="0.3s"
        transform={`translateX(-${activeIndex * 100}%)`}
      >
        {children &&
          React.Children.map(children, (child) => {
            return React.cloneElement(child as ReactElement, { width: '100%' })
          })}
      </Box>

      <Fade in={isHover}>
        <Flex
          position="absolute"
          zIndex={2}
          top={'50%'}
          transform="translateY(-50%)"
          width="100%"
          justify={'space-between'}
          px={2}
        >
          <Button
            variant={'unstyled'}
            onClick={() => updateIndex(activeIndex - 1)}
            _focus={{
              outline: 'none',
              boxShadow: 'none'
            }}
          >
            <Flex
              bg="white"
              w={9}
              h={9}
              opacity={0.7}
              align="center"
              justify={'center'}
              borderRadius="full"
            >
              <Icon as={RiArrowLeftLine} fontSize={20} />
            </Flex>
          </Button>

          <Button
            variant={'unstyled'}
            onClick={() => updateIndex(activeIndex + 1)}
            outline="none"
            _focus={{
              outline: 'none',
              boxShadow: 'none'
            }}
          >
            <Flex
              bg="white"
              w={9}
              h={9}
              borderRadius="full"
              opacity={0.7}
              align="center"
              justify={'center'}
            >
              <Icon as={RiArrowRightLine} fontSize={20} />
            </Flex>
          </Button>
        </Flex>
      </Fade>

      <Flex
        position={'absolute'}
        bottom={0}
        mb={4}
        w="100%"
        justify="center"
        align={'center'}
      >
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeIndex
          return (
            <Box
              as="span"
              mx={1}
              onClick={() => updateIndex(index)}
              h={isActive ? 2.5 : 2}
              w={isActive ? 2.5 : 2}
              borderRadius="full"
              bg="white"
              opacity={isActive ? 1 : 0.8}
              _focus={{
                outline: 'none',
                boxShadow: 'none'
              }}
            />
          )
        })}
      </Flex>
    </Box>
  )
}
