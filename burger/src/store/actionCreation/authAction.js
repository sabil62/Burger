import axios from "../../axios-gen";

export const fetch_order = (email, password, isSingedIn) => {
  return (dispatch) => {
    dispatch({ type: "AUTH_SUCCESS" });
    var url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZltb9Wt3sceZvuBibRg9WVE-meSr3Pew";

    if (isSingedIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZltb9Wt3sceZvuBibRg9WVE-meSr3Pew";
    }

    const postData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(url, postData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "FETCH_ORDER",
          idTokenss: res.data.idToken,
          userIdss: res.data.localId,
        });
        dispatch(logout_time(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch({ type: "ERROR", errorss: err });
      });
  };
};

export const logout_time = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: "LOGOUT" }), expirationTime * 1000);
  };
};
