import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    useColorModeValue,
    Center,
    Input,
    Flex,
    Image,
    List,
    ListItem,
    Icon
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetch_user_profile } from '../Redux/action';
import Navbar from './Navbar';
import NotFound from './NotFound';


const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];


export default function DisplayProfile() {

    const [user, setUser] = useState('');
    const [val, setVal] = useState(0);

    const profile = useSelector((state) => state.profile)
    //console.log(profile.profile)


    const dispatch = useDispatch();

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handledispatchValue = (user) => {
        setVal(val+1)
        console.log('x',val)
        dispatch(fetch_user_profile(user));
    }
  


    return (
        <>
            <Box><Navbar /></Box>

            <Box>
                <Center>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        p={6}>
                        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={{ base: '300px', sm: '320px', lg: '4xl' }}>
                            {/*Input Box*/}
                            <Input
                                type={'text'}
                                placeholder={'Enter Username'}
                                color={useColorModeValue('gray.800', 'gray.200')}
                                bg={useColorModeValue('gray.100', 'gray.600')}
                                rounded={'full'}
                                border={0}
                                _focus={{
                                    bg: useColorModeValue('gray.200', 'gray.800'),
                                    outline: 'none',
                                }}
                                onChange={(e) => handleUser(e)}
                            />
                            {/*Search Button*/}
                            <Button
                                bg={'blue.400'}
                                rounded={'full'}
                                color={'white'}
                                flex={'1 0 auto'}
                                _hover={{ bg: 'blue.500' }}
                                _focus={{ bg: 'blue.500' }}
                                onClick={() => handledispatchValue(user)}>
                                Search
                            </Button>
                        </Stack> 
                    </Flex>
                </Center>
            </Box>
            {profile.profile == undefined && val > 0 ? <NotFound/> : 
            profile.profile == undefined || Object.keys(profile.profile).length == 0 ? null :
            <Box>
                <Container maxW={'7xl'}>
                    <Stack
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 10, md: 20 }}
                        direction={{ base: 'column', md: 'row' }}>

                        <Flex
                            flex={1}
                            justify={'center'}
                            align={'center'}
                            position={'relative'}
                            w={'full'}>
                            <Box
                                position={'relative'}
                                rounded={'full'}
                                h={{ base: "250px", sm: '300px', lg: '500px' }}
                                boxShadow={'2xl'}
                                w={{ base: '250px', sm: '300px', lg: '500px' }}
                                overflow={'hidden'}>
                                <Image
                                    alt={'User Profile'}
                                    fit={'cover'}
                                    align={'center'}
                                    w={'100%'}
                                    h={'100%'}
                                    src={
                                        profile.profile.avatar_url
                                    }
                                />
                            </Box>
                        </Flex>

                        <Flex
                            maxW={'640px'}
                            direction={{ base: 'column-reverse', md: 'row' }}
                            width={'full'}
                            rounded={'xl'}
                            p={10}
                            justifyContent={'space-between'}
                            position={'relative'}
                            right={'0'}
                            _after={{
                                content: '""',
                                position: 'absolute',
                                height: '21px',
                                width: '29px',
                                left: '35px',
                                top: '-10px',
                                backgroundSize: 'cover'
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                zIndex: '-1',
                                height: 'full',
                                maxW: '640px',
                                width: 'full',
                                filter: 'blur(40px)',
                                transform: 'scale(0.98)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                top: 0,
                                left: 0,
                                backgroundImage: backgrounds[1 % 4],
                            }}>
                            <Stack
                                flex={1} spacing={{ base: 5, md: 10 }}>
                                <Blob
                                    w={'150%'}
                                    h={'150%'}
                                    position={'absolute'}
                                    top={'-20%'}
                                    left={-2}
                                    zIndex={-1}
                                    color={'white'}
                                />
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                                    <Text as={'span'} color={'red.400'}>
                                        {profile.profile.login}
                                    </Text>
                                    <br />
                                    <Text>
                                        {profile.profile.name}
                                    </Text>
                                </Heading>
                                <List>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            No. of public repos:
                                        </Text>{' '}
                                        {profile.profile.public_repos}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            No. of public gists:
                                        </Text>{' '}
                                        {profile.profile.public_repos}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Profile created at in time:
                                        </Text>{' '}
                                        {profile.profile.created_at}
                                        {' '}
                                    </ListItem>
                                </List>
                            </Stack>
                        </Flex>
                    </Stack>
                </Container>
            </Box>
                        
                    }

        </>
    );
}

export const Blob = (IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...IconProps}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};

