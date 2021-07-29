import { csrfFetch } from "../store/csrf";
// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

// thunks
export const authenticate = () => async (dispatch) => {
  const response = await csrfFetch("/api/users/restore", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(setUser(data.user.username));
};

export const login = (username, password) => async (dispatch) => {
  // console.log(username, "username");
  const response = await csrfFetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }
  dispatch(setUser(data));
  return {};
};

export const logout = () => async (dispatch) => {
  await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const data = await response.json();
  dispatch(removeUser());
};

export const signUp = (username, password) => async (dispatch) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    // headers: {
    //     "Content-Type": "application/json",
    // },
    body: formData,
  });
  const data = await response.json();
  dispatch(setUser(data));
};

// reducer
const initialState = { user: null };

// useSelector(state => state.session.user)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case REMOVE_USER:
      return { user: null };
    default:
      return state;
  }
}
