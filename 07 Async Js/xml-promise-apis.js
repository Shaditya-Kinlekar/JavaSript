function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject('There is an Error!');
      }
    };
    req.onerror = function () {
      reject('Network Error');
    };
    req.send();
  });
  return promise;
}

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

let promise = getPromise(ALL_POKEMONS_URL);

promise
  .then((result) => {
    let onePokemon = JSON.parse(result).results[0].url;
    return onePokemon;
  })
  .then((onePokemonURL) => {
    const onePokemonPromise = getPromise(onePokemonURL);
    return onePokemonPromise;
  })
  .then((onePokemonPromise) => {
    const onePokemonData = JSON.parse(onePokemonPromise);
    console.log(onePokemonData);
  })
  .catch((error) => {
    console.log('In the catch', error);
  });

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.all([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => {
    console.log('An Error Occured');
  });
