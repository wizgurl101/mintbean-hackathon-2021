import { csrfFetch } from "../store/csrf";
// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const UPDATE_USER_NUMBER_OF_GAME_WON = "session/UPDATE_USER_NUMBER_OF_GAME_WON";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const updateUserNumberOfGameWon = (user) => ({
  type: UPDATE_USER_NUMBER_OF_GAME_WON,
  payload: user,
});

// RESTORE USER
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
  if (data.user) {
    dispatch(setUser(data.user.username));
  }
};

// LOGIN USER
export const login = (username, password) => async (dispatch) => {
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

  // add username to local storage
  localStorage.setItem("userInfo", JSON.stringify(data));

  dispatch(setUser(data.username));
};

// LOGOUT USER
export const logout = () => async (dispatch) => {
  await csrfFetch("/api/users/logout", {
    method: "DELETE",
  });
  dispatch(removeUser());
  localStorage.clear();
};

export const signUp = (username, password) => async (dispatch) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  const response = await fetch("/api/users/signup", {
    method: "POST",
    // headers: {
    //     "Content-Type": "application/json",
    // },
    body: formData,
  });
  const data = await response.json();
  dispatch(setUser(data));
};

// UPDATE USER'S NUMBER OF GAME WON
export const updateUserGameStat = (username) => async (dispatch) => {
  const response = await fetch("/api/users/updateGameStat", {
    method: "PUT",
    body: JSON.stringify({
      username,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }
  dispatch(updateUserNumberOfGameWon(data.username));
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
    case UPDATE_USER_NUMBER_OF_GAME_WON:
      return { user: action.payload };
    default:
      return state;
  }
}
