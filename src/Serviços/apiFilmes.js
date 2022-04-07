import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTIxM2Q1NTVkNzY1YWFkNTMyZDY1Njc4NjRiNDFiNSIsInN1YiI6IjYyNGRkZTcxZDk1NTRiMDA1MDUyMjU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi47CIP6-mfxXrjoFtVemylBisyYeFkja10olYHVEao',
        'content-type': 'application/json;charset=utf-8',
    }
})


export default apiFilmes