import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Dizi, Film, } from '../types/Types';

export const tvAra = createAsyncThunk(
    'home/tvAra',
    async (arananDizi: string) => {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/tv?query=${arananDizi}&api_key=afb2e64e89209fbcf241d404a9d1dbad`

        );
        return (await res.json()).results as Dizi[];
    }
);
export const filmAra = createAsyncThunk(
    'home/filmAra',
    async (arananFilm: string) => {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${arananFilm}&api_key=afb2e64e89209fbcf241d404a9d1dbad`

        );
        return (await res.json()).results as Film[];
    }
);

export const HomeSlice = createSlice({
    name: 'tv',
    initialState: { tvItems: [] as Dizi[], movieItems: [] as Film[] },
    reducers: {
        clearTv: (state) => { state.tvItems = [] },
        clearMovie: (state) => { state.movieItems = [] },
    },
    extraReducers: (builder) => {
        builder
            .addCase(tvAra.fulfilled, (state, action) => {
                state.tvItems = action.payload;
            })
            .addCase(filmAra.fulfilled, (state, action) => {
                state.movieItems = action.payload;
            })
    }
})

export const { clearTv, clearMovie } = HomeSlice.actions;
export default HomeSlice.reducer;