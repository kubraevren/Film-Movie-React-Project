import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Dizi, DiziState} from '../types/Types';


const initialState: DiziState = {//Bu, uygulama ilk açıldığında state’in başlangıç değeridir.
    items: [],

};

export const fetchTv = createAsyncThunk(
    'fetchTv',
    async () => {
        const res = await fetch(
            'https://api.themoviedb.org/3/tv/popular?api_key=afb2e64e89209fbcf241d404a9d1dbad'
        );
        return (await res.json()).results;
        

    }
);

export const TvSlice = createSlice({
    name: 'tv',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTv.fulfilled, (state:DiziState, action:PayloadAction<Dizi[]>) => {
                state.items = action.payload;
            })
    }
})

export const {} = TvSlice.actions;
export default TvSlice.reducer;