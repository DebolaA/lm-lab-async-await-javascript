import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  try {
    const apiResponse = await fetch(apiEndPoint);
    const responseJson = await apiResponse.json();
    console.log(responseJson);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
