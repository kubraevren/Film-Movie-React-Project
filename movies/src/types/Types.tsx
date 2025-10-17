export type FilmState = {
    items: Film[];
    
};

export type Film = {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    popularity: number;
    release_date:string;// (vizyon tarihi)
    original_language:string;
    genre_ids: number[],  // [18, 80](tür ID'leri - Drama, Polisiye vs.)

};


export type DiziState = {
    items: Dizi[];
    
};

export type Dizi = {
    id: number;
    name: string;
    poster_path: string;
    overview: string;
    popularity: number
    genre_ids: number[],  // [18, 80](tür ID'leri - Drama, Polisiye vs.)
    first_air_date:string;// (vizyon tarihi)

};







