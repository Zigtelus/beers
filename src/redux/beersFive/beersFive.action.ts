import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsBeer } from "../beers/beers.slice";
import { createAPI, dataBeers } from "../creatApi";



const api = createAPI();



export const beersFiveAction = createAsyncThunk(
  'beer/beerFive',
  async (_, thunkAPI) => {


    let secondPartURL = `beers?beer_name=${dataBeers.beersFive}`;
    

    try {
      const res = await api.get<ItemsBeer[]>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      console.log('error ', error);
    };


  }
)