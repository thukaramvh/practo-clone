import React, { useState } from 'react';
import { Box, Stack, Heading, Text, Input, Button } from '@chakra-ui/react';
import { signupUser } from '../service/signupUser';
import { useAuth } from '../context/authContext';
export default function SignUp() {
  const [auth, setAuth] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { authDispatch } = useAuth();
  function changeHandler(e) {
    setAuth(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
    >
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          Join our cause
          <Text
            as={'span'}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          Consult top doctors online for any health concern Private online
          consultations with verified doctors in all specialists
        </Text>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <Input
            value={auth.firstName}
            name="firstName"
            onChange={changeHandler}
            placeholder="Firstname"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            value={auth.lastName}
            name="lastName"
            onChange={changeHandler}
            placeholder="Lastname"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            value={auth.email}
            name="email"
            onChange={changeHandler}
            placeholder="firstname@lastname.com"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            value={auth.password}
            name="password"
            onChange={changeHandler}
            placeholder="*********"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
        </Stack>
        <Button
          onClick={() => signupUser({ auth, authDispatch })}
          fontFamily={'heading'}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, red.400,pink.400)',
            boxShadow: 'xl',
          }}
        >
          Sign Up
        </Button>
      </Box>
      form
    </Stack>
  );
}
