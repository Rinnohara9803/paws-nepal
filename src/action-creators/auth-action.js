import { authSliceActions } from "../slices/auth-slice";

export const registerUser = async (user) => {
  const url = "http://localhost:3009/user/signup";

  const imageFile = new File([user.image], user.image.name);
  const formData = new FormData();

  formData.append("name", user.username);
  formData.append("email", user.email);
  formData.append("address", user.address);
  formData.append("password", user.password);
  formData.append("image", imageFile);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {},
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log(jsonData);

    if (response.status === 200) {
      localStorage.setItem("token", jsonData.token);
      localStorage.setItem("role", jsonData.result.role);
      localStorage.setItem("user", JSON.stringify(jsonData.result));
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export const loginUser = async (email, password) => {
  const url = "http://localhost:3009/user/login";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log("login data");
    console.log(jsonData);
    if (response.status === 200) {
      // currentUser = jsonData.user;
      localStorage.setItem("token", jsonData.token);
      localStorage.setItem("role", jsonData.user.role);
      localStorage.setItem("user", JSON.stringify(jsonData.user));
      console.log("tada");
      return jsonData;
    } else {
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export const logoutUser = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
  } catch (e) {
    console.log(e.message);
  }
};

export const getLoggedInState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    console.log("get loggedIn state.");
    console.log(token);
    console.log(user);
    console.log("get loggedIn state.");

    if (!token) {
      console.log("bad");
      dispatch(
        authSliceActions.replaceLoggedInState({
          role: null,
          user: null,
          token: null,
        })
      );
    } else {
      console.log("good");
      dispatch(
        authSliceActions.replaceLoggedInState({
          role: role,
          user: user,
          token: token,
        })
      );
    }
  };
};
