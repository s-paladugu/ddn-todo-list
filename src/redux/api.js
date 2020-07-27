export const BASE_URL = "https://ddn-todo-app.herokuapp.com/";

export const doRequest = (verb, url, body = null, headers = {}) => {
  const jsonBody = JSON.stringify(body);

  const request = {
    method: verb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (verb === "POST" || verb === "PUT") {
    request["body"] = jsonBody;
  }

  return fetch(url, request)
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "error") {
        // Application Level Error
        console.log("Something went wrong", response);
      }
      return response;
    })
    .catch((error) => {
      console.error("error: ", error);
    });
};
