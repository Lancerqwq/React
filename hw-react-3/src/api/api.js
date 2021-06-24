const url = 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple'

const getApi = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
export default getApi