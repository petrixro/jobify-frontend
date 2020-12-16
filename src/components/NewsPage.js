import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const NewsPage = () => {
  const [loadedNews, setLoadedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3beb4c78175e4a98a4c2909ce2e6680b"
    )
      .then((res) => res.json())
      .then((data) => setLoadedNews(data.articles));
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>News</h1>
      </div>
      {!isLoading ? (
        loadedNews.map((article) => (
          <div className="mx-auto">
            <div
              className="card mt-4"
              style={{
                backgroundColor: "AliceBlue",
                margin: "auto",
                width: "60%",
              }}
            >
              <div className="card-body">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                  style={{ width: "80%" }}
                />
                <hr />
                <h5 className="card-title mt-4">
                  <a href={article.url}>{article.title}</a>
                </h5>
                <p className="card-text">{article.description}</p>
                <p className="card-text">
                  <small className="text-muted">{article.publishedAt}</small>
                  <br />
                  <small className="text-muted">Author: {article.author}</small>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default NewsPage;
