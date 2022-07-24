import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsBeer } from "./beers.slice";
import { createAPI, dataBeers } from "../creatApi";



const api = createAPI();



export const beersAction = createAsyncThunk(
  'beer/beers',
  async (_, thunkAPI) => {


    let secondPartURL = `beers?beer_name=${dataBeers.name}`;

    try {
      const res = await api.get<ItemsBeer[]>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      console.log('error ', error);
    };


  }
)