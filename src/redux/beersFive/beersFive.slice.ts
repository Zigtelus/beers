import { createSlice } from "@reduxjs/toolkit";
import { beersFiveAction } from "./beersFive.action";


export type ItemsBeer = {
  "id": number;
  "name": string;
  "tagline": string;
  "first_brewed": string;
  "description": string;
  "image_url": string;
  "abv": number;
  "ibu": number;
  "target_fg": number;
  "target_og": number;
  "ebc": number;
  "srm": number;
  "ph": number;
  "attenuation_level": number;
  "volume": {
    "value": number;
    "unit": string;
  };
  "boil_volume": {
  "value": number;
  "unit": string;
  };
  "method": {
    "mash_temp": {
      "temp": {
        "value": number;
        "unit": string;
      };
      "duration": number;
    }[];
    "fermentation": {
      "temp": {
        "value": number;
        "unit": string;
      };
    };
    "twist": null;
  };
  "ingredients": {
    "malt": {
      "name": string;
      "amount": {
        "value": number;
        "unit": string;
      };
    }[];
    "hops": {
      "name": string;
      "amount": {
        "value": number;
        "unit": string;
      };
      "add": string;
      "attribute": string;
    }[];
    "yeast": string;
  };
  "food_pairing": string[];
  "brewers_tips": string;
  "contributed_by": string;
};

type InitialState = {
  beers: ItemsBeer[];
  loading: boolean;
}

const initialState: InitialState = {
  beers: [
    {
      "id": 0,
      "name": '',
      "tagline": '',
      "first_brewed": '',
      "description": '',
      "image_url": '',
      "abv": 0,
      "ibu": 0,
      "target_fg": 0,
      "target_og": 0,
      "ebc": 0,
      "srm": 0,
      "ph": 0,
      "attenuation_level": 0,
      "volume": {
        "value": 0,
        "unit": '',
      },
      "boil_volume": {
      "value": 0,
      "unit": '',
      },
      "method": {
        "mash_temp": [
          {
            "temp": {
              "value": 0,
              "unit": '',
            },
            "duration": 0,
          }
        ],
        "fermentation": {
          "temp": {
            "value": 0,
            "unit": '',
          }
        },
        "twist": null
      },
      "ingredients": {
        "malt": [
          {
            "name": '',
            "amount": {
              "value": 0,
              "unit": '',
            }
          }
        ],
        "hops": [
          {
            "name": '',
            "amount": {
              "value": 0,
              "unit": '',
            },
            "add": '',
            "attribute": '',
          }
        ],
        "yeast": '',
      },
      "food_pairing": [''],
      "brewers_tips": '',
      "contributed_by": '',
    }
  ],
  loading: false

}

const beersFiveSlice = createSlice({
  name: 'beersFive',
  initialState,
  reducers: {
    numberPlus(state, action) {
    }
  },
  extraReducers: {
    [beersFiveAction.fulfilled.type]: (state, action) => {
      state.beers = [...action.payload];
      state.loading = false;
    },
    [beersFiveAction.pending.type]: (state, action)=> {
      state.loading = true;
    },
    [beersFiveAction.rejected.type]: (state, action) => console.log('error')
  }
})


export default beersFiveSlice.reducer;