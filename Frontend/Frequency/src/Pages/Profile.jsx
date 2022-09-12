import React from 'react'
// import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Badge,Flex, Avatar, Box, Text } from '@chakra-ui/react'
import { Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function Profile(props) {
  const chrray = ["5", "4", "6", "7", "9"]
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem bg='gray.200' height={'max-content'} width={'270px'} area={'nav'}>
        {chrray.map((e) => 
          <Box w='100%' p={4} color='white'>
            <Flex>
              <Avatar src='https://bit.ly/sage-adebayo' />
              <Box ml='3'>
                <Text color={'black'} fontWeight='bold'>
                  Segun Adebayo
                  <Badge borderRadius={'4px'} ml='1' colorScheme='blue'>
                    {e + '+'}
                  </Badge>
                </Text>
                <Text color={'black'} fontSize='sm'>UI Engineer</Text>
              </Box>
            </Flex>
          </Box>
          )}
      </GridItem>
    </Grid>
  )
}

export default Profile