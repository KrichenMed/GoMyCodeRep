import React, { useState, useEffect } from "react";
import axios from "axios";
//useEffect(() => {
//const fetchData = async () => {
//      try {
//        const response = await axios.get(
//          "https://jsonplaceholder.typicode.com/posts"
//        );
//        setData(response.data);
//      } catch (error) {
//        console.error("Error", error);
//      }
//    };

//    fetchData();
//}, []);
function Api() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="container mt-5">
      <div className="row">
        {data ? (
          data.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Api;
