import axios from "axios";

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
  const response = await fetch("/api/users/restore", {
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
  const response = await fetch("/api/users/login", {
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
  dispatch(setUser(data.username));
};

// LOGOUT USER
export const logout = () => async (dispatch) => {
  await fetch("/api/users/logout", {
    method: "DELETE",
  });
  dispatch(removeUser());
};

export const signUp = (username, password) => async (dispatch) => {
  const response = await fetch("/api/users/signup", {
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
  dispatch(setUser(data.name));
};

// UPDATE USER'S NUMBER OF GAME WON
export const updateUserGameStat = (user) => async (dispatch) => {
  const obj = {
    username: user,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.put("/api/users/updateGameStat", obj, config);
  const data = await response.data;
  const { username } = data;

  if (data.errors) {
    return data;
  }
  dispatch(updateUserNumberOfGameWon(username));
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
