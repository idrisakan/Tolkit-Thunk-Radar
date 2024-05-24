export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.654293',
    bl_lng: '25.514642',
    tr_lat: '42.793449',
    tr_lng: '43.185981',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': 'e6621f0f34msh1fe5eb1834aa74cp153ecdjsnddb6ee16fc8d',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};
export const headers = {
  'X-RapidAPI-Key': 'e6621f0f34msh1fe5eb1834aa74cp153ecdjsnddb6ee16fc8d',
  'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  'Content-Type': 'application/json',
};