
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function HackerNews() {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const articles = useSelector(state => state.hackerNews.article);
  const loading = useSelector(state => state.hackerNews.loading)

  useEffect(() => {
    dispatch(requestArticles);
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
