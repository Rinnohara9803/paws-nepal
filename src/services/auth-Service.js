import { auth, db } from "../firebase";
import { authSliceActions } from "../slices/auth-slice";
export const registerUser = async (theUser) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      theUser.email,
      theUser.password
    );

    const user = userCredential.user;

    await db
      .collection("users")
      .doc(user.uid)
      .set({ ...theUser })
      .then(() => {
        localStorage.setItem("user", JSON.stringify(theUser));
      });
  } catch (e) {
    let message = "Something went wrong!";

    if (e.code === "auth/email-already-in-use") {
      message = "Email is already in use";
    }
    throw new Error(message);
  }
};

export const signInUser = async (email, password) => {
  console.log(email);
  console.log(password);
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );

    const user = userCredential.user;
    console.log(user.uid);

    const fetchedUser = await db.collection("users").doc(user.uid).get();

    const userData = fetchedUser.data();
    console.log(userData);

    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  } catch (e) {
    console.log(e);
    let message = "Something went wrong!";

    if (e.code === "auth/wrong-password") {
      message = "Please enter correct credentials.";
    } else if (e.code === "auth/network-request-failed") {
      message = "Network Error";
    } else if (e.code === "auth/user-not-found") {
      message = "No user found.";
    }
    throw new Error(message);
  }
};

export const logoutUser = async () => {
  try {
    await auth.signOut().then(() => {
      localStorage.removeItem("user");
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchProfile = async () => {
  const userId = auth.currentUser.uid;
  try {
    const user = await db.collection("users").doc(userId).get();

    localStorage.setItem("username", user.data().username);
    localStorage.setItem("email", user.data().email);
    localStorage.setItem("profileId", user.data().id);
  } catch (e) {
    throw new Error(e.message);
  }
};

// export const fetchTheChatUsers = async (role, userId) => {
//   console.log("fetch the users");
//   let users = [];

//   try {
//     if (role === "doctor") {
//       const collectionRef = await db.collection(`doctors/${userId}/followers`);
//       const snapshot = await collectionRef.get();

//       users = snapshot.docs.map((doc) => doc.data());
//       console.log(users);
//       return users;
//     } else {
//       const collectionRef = await db.collection(
//         `patients/${userId}/followings`
//       );
//       const snapshot = await collectionRef.get();

//       users = snapshot.docs.map((doc) => doc.data());
//       console.log(users);
//       return users;
//     }
//   } catch (e) {
//     throw Error(e.message);
//   }
// };

export const getLoggedInState = () => {
  return (dispatch) => {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);

    console.log(user === null);

    if (!user) {
      dispatch(
        authSliceActions.replaceLoggedInState({
          user: null,
          token: null,
        })
      );
    } else {
      dispatch(
        authSliceActions.replaceLoggedInState({
          user: user,
          token: null,
        })
      );
    }
  };
};
