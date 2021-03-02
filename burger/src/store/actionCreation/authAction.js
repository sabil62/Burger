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
        //================save in localstorage-----
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        const expirationDate = new Date(
          //10 + 1=11
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("expirationDate", expirationDate);
        //-----------------------------------------

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

//new one-----------------------

export const checklocalauth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expirationDate = new Date(localStorage.getItem("expirationDate"));

    if (!token) {
      dispatch({ type: "LOGOUT" });
    } else {
      if (expirationDate <= new Date()) {
        dispatch({ type: "LOGOUT" });
      } else {
        //yesle refresh bhaye ni localstorage ko userId ra token dinxa
        dispatch({ type: "FETCH_ORDER", idTokenss: token, userIdss: userId });
        dispatch(
          logout_time((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};
