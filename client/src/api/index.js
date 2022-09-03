import axios from "axios";

const url = "http://localhost:5000/user";

// const options = {
//   method: "GET",
//   url: "https://randomuser.me/api/",
//   params: { format: "json" },
// };

// function getData() {
//   axios
//     .request(options)
//     .then(function(response) {
//       console.log(response.data);
//     })
//     .catch(function(error) {
//       console.error(error);
//     });
// }

export const getData = () => axios.get(url);
export const postData = (user) => axios.post(url, user);
