import React from 'react'
// import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Badge,Flex, Avatar, Box, Text } from '@chakra-ui/react'
import { Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function Profile(props) {
  const chrray = ["5", "4", "6", "7", "9"]
  const gg = [{"results":[{"gender":"female","name":{"title":"Ms","first":"Avery","last":"Reyes"},"location":{"street":{"number":3109,"name":"The Drive"},"city":"Buncrana","state":"Longford","country":"Ireland","postcode":59002,"coordinates":{"latitude":"-2.0629","longitude":"149.2788"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"email":"avery.reyes@example.com","login":{"uuid":"1cc54e28-8250-4db8-b808-297b30ea88f2","username":"lazydog658","password":"a12345","salt":"kub1RF0H","md5":"23612e7ff6ee62e819f4465f3fcb7eef","sha1":"2e5f8551148996babf9a4d1f0349bb03f13f3a3a","sha256":"59a9d8d6870888e961bb1aef0d9189d794662d78666494a71e9a37a285f92856"},"dob":{"date":"1971-09-30T13:31:50.430Z","age":50},"registered":{"date":"2017-03-30T12:27:58.010Z","age":5},"phone":"011-965-5918","cell":"081-001-2688","id":{"name":"PPS","value":"6675426T"},"picture":{"large":"https://randomuser.me/api/portraits/women/23.jpg","medium":"https://randomuser.me/api/portraits/med/women/23.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/23.jpg"},"nat":"IE"}],"info":{"seed":"8c7397a396532bfb","results":1,"page":1,"version":"1.4"}}, {"results":[{"gender":"male","name":{"title":"Mr","first":"Ali","last":"Atan"},"location":{"street":{"number":8028,"name":"Talak Göktepe Cd"},"city":"Denizli","state":"Ankara","country":"Turkey","postcode":43982,"coordinates":{"latitude":"72.0412","longitude":"-122.0361"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"ali.atan@example.com","login":{"uuid":"018c4316-f49c-4371-9d20-189d9cdea0b3","username":"blackbear205","password":"sporty","salt":"8qJWlEff","md5":"5036d88377d4aa4e76488c17815dc580","sha1":"08e9411daa87ff679c707888316f4dc84d26c70c","sha256":"330693a6451294fd9463df5537b1d26a7f8ad7f64aa15c259d4fb5af3ad56a31"},"dob":{"date":"1976-01-09T02:24:38.114Z","age":46},"registered":{"date":"2014-02-27T06:12:55.713Z","age":8},"phone":"(578)-860-7291","cell":"(448)-765-8273","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/86.jpg","medium":"https://randomuser.me/api/portraits/med/men/86.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/86.jpg"},"nat":"TR"}],"info":{"seed":"8b1e996573a677af","results":1,"page":1,"version":"1.4"}}, {"results":[{"gender":"male","name":{"title":"Mr","first":"Magnus","last":"Hauer"},"location":{"street":{"number":1618,"name":"Fasanenweg"},"city":"Ulm","state":"Sachsen","country":"Germany","postcode":99823,"coordinates":{"latitude":"-48.8659","longitude":"-164.0507"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"magnus.hauer@example.com","login":{"uuid":"a4724ecf-1031-44e7-ae54-f2597ff6f178","username":"goldenelephant963","password":"thunderb","salt":"fangt6D6","md5":"8865667c0b5e183844fb0f9dce6d0601","sha1":"82c31111a225741c2cd77f14dd3494e563c4787a","sha256":"7de7b16eba73cdaf958dac79204cf7b1f015490aa04c3311f3a8473a56b7d748"},"dob":{"date":"1954-05-01T19:53:49.888Z","age":68},"registered":{"date":"2009-08-16T13:46:56.327Z","age":13},"phone":"0499-4904514","cell":"0170-5987980","id":{"name":"SVNR","value":"55 010554 H 475"},"picture":{"large":"https://randomuser.me/api/portraits/men/56.jpg","medium":"https://randomuser.me/api/portraits/med/men/56.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/56.jpg"},"nat":"DE"}],"info":{"seed":"59c43b5dcc9b813a","results":1,"page":1,"version":"1.4"}}, {"results":[{"gender":"female","name":{"title":"Mrs","first":"Anita","last":"Chambers"},"location":{"street":{"number":5384,"name":"Wycliff Ave"},"city":"Bunbury","state":"Victoria","country":"Australia","postcode":6713,"coordinates":{"latitude":"-82.8817","longitude":"28.8255"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"anita.chambers@example.com","login":{"uuid":"02608f3d-9e9b-4187-99ad-0560ddc4540c","username":"ticklishbear417","password":"passw0rd","salt":"5KThHEeK","md5":"6bb0dc9715fb943bd4d296f779702400","sha1":"aefc11f22e4417c231bb61972b7f1a0ac9eeb171","sha256":"879cc05a72a72ac86e729044ac6f72571e9d3d0ac2f875515ac634a63d1c3965"},"dob":{"date":"1966-02-13T16:51:30.555Z","age":56},"registered":{"date":"2003-03-22T02:10:57.780Z","age":19},"phone":"08-7233-0706","cell":"0464-285-797","id":{"name":"TFN","value":"602208867"},"picture":{"large":"https://randomuser.me/api/portraits/women/80.jpg","medium":"https://randomuser.me/api/portraits/med/women/80.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/80.jpg"},"nat":"AU"}],"info":{"seed":"7891ec1a59f85bc0","results":1,"page":1,"version":"1.4"}}]

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

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
        {shuffle(gg).map((elem) => 
          <Box as='button' onClick={() => console.log('gg')} w='100%' p={4} color='white'>
            <Flex>
              <Avatar src={elem.results[0].picture.large} />
              <Box ml='3'>
                <Text color={'black'} fontWeight='bold'>
                  {elem.results[0].name.first + ' ' + elem.results[0].name.last}
                  <Badge borderRadius={'4px'} ml='1' colorScheme='blue'>
                    {elem.results[0].dob.age + '+'}
                  </Badge>
                </Text>
                <Text color={'black'} fontSize='sm' textAlign={'left'}>{elem.results[0].location.country}</Text>
              </Box>
            </Flex>
          </Box>
          )}
      </GridItem>
    </Grid>
  )
}

export default Profile