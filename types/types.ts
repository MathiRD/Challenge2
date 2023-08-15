import type { StackScreenProps } from '@react-navigation/stack';
import type { RouteProp } from '@react-navigation/native';

export type RootObject = {
  statusCode: number;
  body: Body;
};

export type Body = {
  restaurants: Restaurant[];
};

export type Restaurant = {
  id: number;
  name: string;
  description: string;
  coverImageUrl: string;
  rating: number;
  menu: Menu[];
};

export type Menu = {
  title: string;
  imageUrl: string;
};

export type RootStackParamList = {
  InitialScreen: undefined;
  restaurantListScreen: undefined;
  DetailsScreen: { restaurantId: number };
};

export type DetailsScreenProp = StackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;

export type DetailsScreenNavigationProp = DetailsScreenProp['navigation'];

export type InitialScreenProp = StackScreenProps<
  RootStackParamList,
  'InitialScreen'
>;

export type InitialScreenNavigationProp = InitialScreenProp['navigation'];

export type RestaurantProp = {
  restaurant: Restaurant;
};

export type RenderingStarsProp = { rating: number };

export type ButtonProps = {
  children: string;
  onClick: () => void;
  style: Object;
};

export type RestaurantMenuProp = {
  restaurantMenu: Menu;
};
