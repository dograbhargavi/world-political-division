import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    articles: {
        code: string,
        name: string,
        countries: {
           code: string,
           name: string
        }[]
    }[]
  }

  export const Continents: React.FC<Props> = ({articles}) => {
    const articleValue = articles.map((article, index) => {
        return (
          <tr data-testid="article" key={index}>
            <td data-testid="article-title">{article.code}</td>
        <td data-testid="article-upvotes">{article.name}</td>
            <td data-testid="article-date" > <Link to={{
     pathname: `/countries`,
     state: { continent:article.name ,countries:article.countries}
}}>View Countries... </Link></td>
          </tr>
        );
      });
    
      return (
        <>
          <div className="card w-50 mx-auto">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Continent</th>
                  <th>Countries</th>
                </tr>
              </thead>
              <tbody>{articleValue}</tbody>
            </table>
          </div>
        </>
      );
}

