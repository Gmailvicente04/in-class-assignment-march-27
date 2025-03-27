const BASE_URL =
'https://jsonplaceholder.typicode.com/users';

export function getPosts () {
    return fetch(BASE_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();

        })
        .catch((error) => {
            console.error('fetch failed:', error);
            throw error;
        });

}
