import * as api from "../api";

//action creators

export const fetchData = () => async (dispatch) => {
  console.log("hey");
  try {
    const { data } = await api.getData();
    // console.log(data);
    dispatch({
      type: "FETCH_ALL",
      payload: { data: data },
    });
  } catch (error) {
    console.log({ message: error.message, type: "Error" });
  }
};

// export const postData = async (post) => {
//   try {
//     const newUserData = New;
//   } catch (error) {}
// };
