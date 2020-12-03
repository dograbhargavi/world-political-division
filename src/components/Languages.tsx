import React from 'react'

interface Props {
    languages: {
        code: string,
        name: string,
        native: string,
    }[]
  }

  export const Languages: React.FC<Props> = ({languages}) => {
    const articleValue = languages.map((article, index) => {
        return (
          <tr data-testid="article" key={index}>
            <td data-testid="article-title">{article.code}</td>
        <td data-testid="article-upvotes">{article.name}</td>
            <td data-testid="article-date" >{article.native} </td>
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
                  <th>Languages</th>
                  <th>Native</th>
                </tr>
              </thead>
              <tbody>{articleValue}</tbody>
            </table>
          </div>
        </>
      );
}

