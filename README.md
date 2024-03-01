# VIEWR

This repository is a [json-server](https://github.com/typicode/json-server) created to feed data into the React Application below.

#### [Client Repo here](https://github.com/Abranucu/Viewr-server)

# Server Structure

## Collections

### reviews

```javascript
{
      rating,
      review,
      username,
      showID,
      showTitl,
      showImage,
      date,
      id,
    }
```

## Used API Endpoints in the App

| HTTP Method | URL            | Request Body                                             | Description             |
| ----------- | -------------- | -------------------------------------------------------- | ----------------------- |
| GET         | `/reviews`     |                                                          | Sends all reviews       |
| POST        | `/reviews`     | {rating, review, username, showID, showTitle, showImage} | Creates a new review    |
| PUT         | `/reviews/:id` | {rating, review, username}                               | Edits a review object   |
| DELETE      | `/reviews/:id` |                                                          | Deletes a review object |

## Links

### Collaborators

[Abraham Castiello](www.github-url.com)

[Josep Climent](www.github-url.com)

### Project

[Repository Link Client](https://github.com/josepcliment92/Viewr-app)

[Repository Link Server](https://github.com/Abranucu/Viewr-server)

[Deploy Link](https://viewr-app.netlify.app/)
