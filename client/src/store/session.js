import { csrfFetch } from "../store/csrf";
// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const GET_LEADER_BOARD_INFO = "session/GET_LEADER_BOARD_INFO";
const UPDATE_USER_NUMBER_OF_GAME_WON = "session/UPDATE_USER_NUMBER_OF_GAME_WON";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const setLeaderBoard = (users) => ({
  type: GET_LEADER_BOARD_INFO,
  payload: users,
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
  dispatch(setUser(data.username));
};

// LOGOUT USER
export const logout = () => async (dispatch) => {
  await csrfFetch("/api/users/logout", {
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
  console.log(response);
  const data = await response.json();
  dispatch(setUser(data.name));
};

// Get leader board info from backend
export const getLeaderBoardInfo = () => async (dispatch) => {
  const response = await fetch("/api/users/leaderboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  dispatch(setLeaderBoard(data));
};

// UPDATE USER'S NUMBER OF GAME WON
export const updateUserGameStat = (user) => async (dispatch) => {
  const response = await csrfFetch("/api/users/updateGameStat", {
    method: "PUT",
    body: JSON.stringify({
      user,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }
  dispatch(updateUserNumberOfGameWon(data));
};

// reducer
const initialState = { user: null, users: [] };

// useSelector(state => state.session.user)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    case GET_LEADER_BOARD_INFO:
      return { ...state, users: action.payload };
    case UPDATE_USER_NUMBER_OF_GAME_WON:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
