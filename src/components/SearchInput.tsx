import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  icon?: any;
};

export function Input ({ name, label, icon, type, ...rest }: InputProps) {
  return (
    <FormControl>
      <Flex border={'1px'} borderColor="gray.300" padding={3}>
        {icon && <Icon as={icon} fontSize={24} color="gray.600" />}
        <Flex direction={'column'} flex="1" ml={3}>
          {!!label && (
            <FormLabel htmlFor="city" fontWeight={'normal'}>
              {label}
            </FormLabel>
          )}
          <ChakraInput
            id={name}
            name={name}
            variant={'unstyled'}
            size="sm"
            fontSize={'md'}
            color='gray.700'
            {...rest}
          />
        </Flex>
      </Flex>
    </FormControl>
  )
}
