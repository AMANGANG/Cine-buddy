// export const API_URL = process.env.REACT_APP_API_URL;
export const API_URL = 'https://api.themoviedb.org/3';
// export const  API_KEY_3 = process.env.REACT_APP_API_KEY_3;
export const API_KEY_3 = 'f6092e2ee2b34d11424d896088d6ac2d';


export const GENRES = [
		{id:28,name:"Action"},
		{id:12,name:"Adventure"},
		{id:16,name:"Animation"},
		{id:35,name:"Comedy"},
		{id:80,name:"Crime"},
		{id:99,name:"Documentary"},
		{id:18,name:"Drama"},
		{id:10751,name:"Family"},
		{id:14,name:"Fantasy"},
		{id:36,name:"History"},
		{id:27,name:"Horror"},
		{id:10402,name:"Music"},
		{id:9648,name:"Mystery"},
		{id:10749,name:"Romance"},
		{id:878,name:"Science Fiction"},
		{id:10770,name:"TV Movie"},
		{id:53,name:"Thriller"},
		{id:10752,name:"War"},
		{id:37,name:"Western"}
	];
 
export const SORT_BY = [
	{filter:"popularity.desc", name: "Popularity"}, 
	{filter: "release_date.desc", name: "Release Date"}, 
	{filter: "revenue.desc", name: "Revenue"},
	{filter: "vote_average.desc", name: "Top Rated"}, 
	{filter: "vote_count.desc", name: "Vote Count"}
]
 