import axios from "axios";
import { defaultHttpConfig } from "./config";

export const http = axios.create(defaultHttpConfig());
export const pokeApi = axios.create(
  defaultHttpConfig({ baseURL: "https://pokeapi.co/api/v2/pokemon" })
);
export const countriesApi = axios.create(
  defaultHttpConfig({ baseURL: "https://restcountries.com/v3.1/all/" })
);
