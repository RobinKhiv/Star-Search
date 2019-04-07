import config from '../config';

const StarSearchApiService = {
  get(searchParams, searchValue){
    return fetch(`${config.API_ENDPOINT}/${searchParams}/?search=${searchValue}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}
export default StarSearchApiService;