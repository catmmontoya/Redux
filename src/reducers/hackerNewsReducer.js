import axios from "axios";

let initialState = {
  loading: false,
  article: [],
};

const PENDING = "PENDING";
const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const requestArticles = async (dispatch) => {
  dispatch({ type: PENDING }); //before the request runs it will say pending
  let articles = await axios.get("/api/hacker-news").then((res) => res.data);
  dispatch({ type: REQUEST_ARTICLES, payload: articles });
};

export default function hackerNewsReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      console.log("Hit PENDING");
      return { ...state, loading: true };

    case REQUEST_ARTICLES:
      return { loading: false, articles: action.payload };

    default:
      return state;
  }
}
