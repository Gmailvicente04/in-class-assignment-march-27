const Base_URL =
'hhtps://jsonplaceholder.typicode.com/posts';

export function getposts () {
    return fetch(BASE_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('HTTP error: ${response.status}');
            }
            return response.json();

        })
        .catch((error) => {
            console.error('Error fetching posts:', error);
            throw error;
        });

}
