// const axios = require("axios");

// async function createTrailerLink(filmName) {
//   const linkYotube = 'https://www.youtube.com';
//   const apiKeyYoutube = 'AIzaSyC-gBgYIHjGzNVAuL1eVz1FWpMAxDYSMxc';
//   const apiYoutube = 'https://youtube.googleapis.com/youtube/v3';
//   const finalUrl = `${apiYoutube}/search?part=snippet&key=${apiKeyYoutube}&q=${filmName}&maxResults=1`
//   const youtubeFetch = await axios.get(finalUrl);
//   const { data } = youtubeFetch;
//   const { items } = data;
//   const [film] = items;
//   const { id } = film;
//   const videoId = id.videoId
//   return videoId
// }
// export default createTrailerLink