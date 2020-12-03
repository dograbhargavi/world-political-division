import React from "react";
import { Link } from "react-router-dom";

interface Props {
  history: {};
  location: {
    state: {
      continent: string,
      countries:  {
        code: string;
        name: string;
      }[];
    }
  };
}

export const Countries: React.FC<Props> = (props) => {
  const countries = props.location.state.countries;
  const continent = props.location.state.continent;
  console.log(props);
  const articleValue = countries.map((article, index) => {
    return (
      <tr data-testid="article" key={index}>
        <td data-testid="article-title">{article.code}</td>
        <td data-testid="article-upvotes">{article.name}</td>
        <td data-testid="article-upvotes">
          <Link
            to={{
              pathname: `/country-info`,
              state: article.code,
            }}
          >
            View Details
          </Link>
        </td>
      </tr>
    );
  });
  console.log(countries);

  return (
    <div className="App">
      <h4 data-testid="title">Countries in {continent}</h4>
      <p>Total: {countries.length}</p>
       <div className="card w-50 mx-auto">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Countries</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>{articleValue}</tbody>
        </table>
      </div>
      </div>
  );
};
