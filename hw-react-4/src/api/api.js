const url = 'https://fakestoreapi.com/products?limit=5';

const getApi = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
export default getApi