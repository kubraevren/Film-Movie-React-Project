import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Film, FilmState } from '../types/Types';


const initialState: FilmState = {//Bu, uygulama ilk açıldığında state’in başlangıç değeridir.
    items: [],

};

export const fetchFilms = createAsyncThunk(
    'fetchFilms',
    async () => {
        const res = await fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=afb2e64e89209fbcf241d404a9d1dbad'
        );
        return (await res.json()).results;
        

    }
);

export const FilmSlice = createSlice({
    name: 'film',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.fulfilled, (state:FilmState, action:PayloadAction<Film[]>) => {
                state.items = action.payload;
            })
    }
})

export const {} = FilmSlice.actions;
export default FilmSlice.reducer;