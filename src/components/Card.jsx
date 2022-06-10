import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { addToCart } from '../service/addToCart';
import { useAuth } from '../context/authContext';
import { useCart } from '../context/cartContext';
const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
      </Box>

      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}
const placeholderImg =
  'https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png';
export default function Card({ title, imgSrc, inStock, price, rating, _id }) {
  const { authState } = useAuth();
  const { cartDispatch, cartState } = useCart();
  console.log(cartState.cart);
  console.log(authState);
  return (
    <Flex p={4} w="300px" alignItems="center" justifyContent="center">
      <Box
        width="300px"
        height="450px"
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {!inStock && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          mt="50px"
          objectFit="contain"
          width="100%"
          height="200px"
          src={imgSrc || placeholderImg}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {!inStock && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Out Of Stock
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title.length > 30 ? title.slice(0, 10) : title}...
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}
            >
              <Button
                bg="transparent"
                disabled={!inStock}
                onClick={() =>
                  addToCart({
                    token: authState.token,
                    product: { title, imgSrc, inStock, price, rating, _id },
                    cartDispatch,
                  })
                }
              >
                {cartState.cart.some(item => item.title === title) ? (
                  <Icon
                    as={AiOutlineArrowRight}
                    h={7}
                    w={7}
                    alignSelf={'center'}
                  />
                ) : (
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                )}
              </Button>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                ₹
              </Box>
              {price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
