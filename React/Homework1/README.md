# Project Description: User Data Retrieval

This project includes a function named `getData` that retrieves user information and posts based on the provided user ID. The function fetches data using the Axios library, merging user details with their posts into a single object.

### Function Details

- The `getData` function is defined as an **async** function, exported as the default.
- It takes a single parameter of type **Number**, representing the user ID.
- The function fetches user data from [https://jsonplaceholder.typicode.com/users/{userID}](https://jsonplaceholder.typicode.com/users/1) and user posts from [https://jsonplaceholder.typicode.com/posts?userId={userID}](https://jsonplaceholder.typicode.com/posts?userId=1).
- Upon retrieval, it merges user details and posts into an object as shown below:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  },
  "posts": [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat",
      "body": "quia et suscipit suscipit recusandae"
    }
  ]
}
