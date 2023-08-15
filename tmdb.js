const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTdlN2Q4ZTczOGM4MDFjOTQyYTMxMGQ4M2ZhY2UyMCIsInN1YiI6IjY0YzkxYTVjZjc5NGFkMDBlMjZjYjYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hAiQYK0qeRAEXMzPwiO9oYkrq6xk6EQPfDQZRzwD8Yk",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const movies = response.results;
    const moviesListContainer = document.getElementById("movies-list");
    console.log(response);

    const movieDetails = movies.map((movie) => {
      const { title, overview, poster_path, release_date, backdrop_path } =
        movie;
      return {
        title,
        overview,
        poster_path,
        release_date,
        backdrop_path,
      };
    });

    const movieHtml = movieDetails
      .map(
        (movie) => `
        <div>
          <h2>${movie.title}</h2>
          <p><strong>Release Date:</strong> ${movie.release_date}</p>
          <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
          <p>${movie.overview}</p>
        </div>
      `
      )
      .join("");

    moviesListContainer.innerHTML = movieHtml;
  })
  .catch((err) => console.error(err));
