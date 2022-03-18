import React from 'react'
import Image from 'next/image'
import Gradient from 'rgt'

import {
  Flex,
  Text,
  Container,
  VStack,
  Box,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'

function BankSection() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <Container maxW={{ base: 'container.sm', md: 'container.xl' }} p={0}>
      <Flex direction={{ base: 'column-reverse', md: 'row' }}>
        <VStack h='full' w='full' p={10} spacing={10} align='flex-start'>
          {!isMobile ? (
            <Image
              src='/images/bank-token.png'
              alt='bankToken'
              height={422}
              width={402}
            />
          ) : (
            <Image
              src='/images/bank-token-mobile.png'
              alt='bankToken'
              height={113}
              width={180}
            />
          )}
        </VStack>
        <VStack spacing={5} align='flex-start'>
          <Text fontWeight={700} fontSize='7xl'>
            BANK
          </Text>
          <Gradient
            dir='top-to-bottom'
            from='#FF1013'
            to='#000000
'>
            <Text fontSize='4xl' fontWeight={700}>
              The Most widely-held Token{' '}
            </Text>
          </Gradient>
          <Text fontWeight={400} lineHeight='22px' fontSize='lg'>
            BANK is the native token of BanklessDAO. As a tool for the Bankless
            community, it determines membership level and voting power in
            on-chain votes. To be a Level 1 member, which means you can access
            the Discord server without needing a guest pass, you must hold
            35,000 BANK.
          </Text>
          <Container className='border-box' width='458px' height='131px'>
            <Text
              paddingTop={5}
              fontWeight={400}
              lineHeight='22px'
              fontSize='lg'>
              BANK is available on both{' '}
              <Link
                color='#D02128'
                href='https://app.uniswap.org/#/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH&chain=mainnet'
                isExternal>
                Uniswap
              </Link>{' '}
              and{' '}
              <Link
                color='#D02128'
                href='https://app.sushi.com/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH'
                isExternal>
                Sushiswap
              </Link>{' '}
              and can be earned by working in the DAO. Many guest pass holders
              earn their 35,000 BANK rather than buy it outright.
            </Text>
          </Container>
          <Box>
            <Text>
              Current market cap and price is{' '}
              <Link
                color='#D02128'
                href='https://www.coingecko.com/en/coins/bankless-dao'
                isExternal>
                Available Here
              </Link>
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Container>
  )
}

export default BankSection