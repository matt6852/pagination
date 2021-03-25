import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { data, loading } = useFetch();
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(0);

  const forward = () => {
    setPage((old) => {
      let newPage = old + 1;
      if (old >= data.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };
  const backward = () => {
    setPage((old) => {
      let newPage = old - 1;
      if (old <= 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };

  useEffect(() => {
    if (loading) return;
    setDogs(data[page]);
  }, [loading, page, data]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "dogs:"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {dogs.map((dog) => {
            return <Follower key={dog.id} {...dog} />;
          })}
        </div>
        {!loading ? (
          <div>
            <div className="btn-container">
              <button className="prev-btn" onClick={backward}>
                prev
              </button>

              <button className="active-btn page-btn">{page + 1}</button>

              <button className="next-btn" onClick={forward}>
                next
              </button>
            </div>
            <div className="btn-container">
              {data.map((_, index) => {
                return (
                  <button
                    className={`${
                      index === page ? "active-btn page-btn" : "page-btn"
                    }`}
                    key={index}
                    onClick={() => setPage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default App;
