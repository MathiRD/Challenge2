import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getRestaurants() {
  const {} = await axios
    .get("https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev")
    .then((response) => response.data.body.restaurants);
}

export default function useFetchRestaurants() {
  return useQuery(["restaurants"], getRestaurants);
}
