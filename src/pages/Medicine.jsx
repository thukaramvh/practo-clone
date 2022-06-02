import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Checkbox,
  Text,
  CheckboxGroup,
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import ProductList from '../components/ProductList';
import { useFilter } from '../context/filterContext';
function Medicine() {
  const [range, setRange] = useState([10, 5000]);
  const { filterDispatch, filterState } = useFilter();
  console.log(filterState.rating === 2);
  return (
    <>
      <Navbar />
      <Box display="flex" flexDirection="row" gap="4">
        <Box pl="6" minW="200px" pt="2">
          <Heading size="md" py="2">
            Price
          </Heading>
          <RangeSlider
            max={10000}
            onChangeEnd={val => setRange(val)}
            aria-label={['min', 'max']}
            defaultValue={[10, 5000]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Box>
            <Heading size="md" py="2">
              Category
            </Heading>
            <Stack spacing={3} direction="column">
              <Checkbox
                onChange={e => {
                  filterDispatch({
                    type: 'category',
                    payload: {
                      checked: e.target.checked,
                      category: 'medicine',
                    },
                  });
                }}
                colorScheme="blue"
                isChecked={filterState.medicine}
              >
                Medicine
              </Checkbox>
              <Checkbox
                colorScheme="blue"
                onChange={e => {
                  filterDispatch({
                    type: 'category',
                    payload: {
                      checked: e.target.checked,
                      category: 'protein',
                    },
                  });
                }}
                isChecked={filterState.protein}
              >
                Gym Supplements
              </Checkbox>
              <Checkbox
                colorScheme="blue"
                onChange={e => {
                  filterDispatch({
                    type: 'category',
                    payload: {
                      checked: e.target.checked,
                      category: 'babyCare',
                    },
                  });
                }}
                isChecked={filterState.babyCare}
              >
                Baby Care
              </Checkbox>
            </Stack>
          </Box>
          <Box>
            <Heading size="md" py="2">
              Rating
            </Heading>
            <Stack spacing={3} direction="column">
              <RadioGroup>
                <Stack direction="column">
                  <Radio
                    isChecked={filterState.rating === 4}
                    onChange={() => {
                      filterDispatch({ type: 'rating', payload: '4' });
                    }}
                  >
                    4 stars and above
                  </Radio>
                  <Radio
                    isChecked={filterState.rating === 3}
                    onChange={() => {
                      filterDispatch({ type: 'rating', payload: '3' });
                    }}
                  >
                    3 stars and above
                  </Radio>
                  <Radio
                    isChecked={filterState.rating === 2}
                    onChange={() => {
                      filterDispatch({ type: 'rating', payload: '2' });
                    }}
                  >
                    2 stars and above
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </Box>
          <Box>
            <Heading size="md" py="2">
              Sort By
            </Heading>
            <Stack spacing={3} display="flex" flexDirection="column">
              <RadioGroup>
                <Stack direction="column">
                  <Radio
                    value="High To Low"
                    onChange={() => {
                      filterDispatch({ type: 'HIGH_TO_LOW' });
                    }}
                  >
                    High To Low
                  </Radio>
                  <Radio
                    onChange={() => {
                      filterDispatch({ type: 'LOW_TO_HIGH' });
                    }}
                    value="Low To High"
                  >
                    Low To High
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </Box>
          <Box>
            <Heading size="md" py="2">
              Availability
            </Heading>
            <Stack spacing={3} direction="column">
              <Checkbox colorScheme="red" defaultChecked>
                Exclude Out Of Stock
              </Checkbox>
            </Stack>
          </Box>
        </Box>

        <ProductList range={range} />
      </Box>
    </>
  );
}

export default Medicine;
