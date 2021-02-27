import axios from "../../axios-gen";

export const fetch_order = (email, password) => {
  return (dispatch) => {
    dispatch({ type: "AUTH_SUCCESS" });
    var url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZltb9Wt3sceZvuBibRg9WVE-meSr3Pew";

    const postData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios.post(url, postData).then((res) => {
      console.log(res.data);
    });
  };
};
