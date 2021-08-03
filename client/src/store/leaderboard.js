const GET_LEADER_BOARD_INFO = "leaderboard/GET_LEADER_BOARD_INFO";

const setLeaderBoard = (users) => ({
  type: GET_LEADER_BOARD_INFO,
  payload: users,
});

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

// reducer
const initialState = { users: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEADER_BOARD_INFO:
      return { users: action.payload };
    default:
      return state;
  }
}
