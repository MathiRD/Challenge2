import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Restaurant, RootObject } from '../types/types';

const getRestaurants = async (): Promise<Restaurant[]> => {
  return await axios
    .get('https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev')
    .then((response) => response.data.body.restaurants);
};

export default function useFetchRestaurants() {
  return useQuery(['restaurants'], getRestaurants);
}
