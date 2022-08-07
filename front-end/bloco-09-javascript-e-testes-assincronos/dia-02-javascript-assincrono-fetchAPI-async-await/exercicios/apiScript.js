// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
    try {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const response = await fetch(API_URL, myObject)
    const data = await response.json();
    const getSpot = document.getElementById('jokeContainer')
    getSpot.innerText = data.joke;
    } catch (err) {
        console.log(err);
    }
};


window.onload = () => fetchJoke();