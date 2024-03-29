import React, { useState } from 'react';
import { Box, Stack, Heading, Text, Input, Button } from '@chakra-ui/react';
import { useAuth } from '../context/authContext';
import { loginUser } from './../service/loginUser';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ email: '', password: '' });
  const { authDispatch, authState } = useAuth();
  function changeHandler(e) {
    setAuth(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  console.log(authState);
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
            name="email"
            value={auth.email}
            onChange={changeHandler}
            placeholder="firstname@lastname.io"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            name="password"
            type="password"
            value={auth.password}
            onChange={changeHandler}
            placeholder="*******"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
        </Stack>
        <Button
          onClick={() => loginUser({ auth, authDispatch, navigate })}
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
          Login
        </Button>
        <Button
          onClick={() =>
            setAuth({
              email: 'adarshbalika@gmail.com',
              password: 'adarshBalika123',
            })
          }
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
          Login with Test Credentials
        </Button>
      </Box>
      form
    </Stack>
  );
}

export default Login;
