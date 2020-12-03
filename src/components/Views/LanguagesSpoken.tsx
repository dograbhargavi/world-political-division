import React from 'react'

interface Props {
    history: {};
    location: {
      state:{
          country:string,
          languages: {
            code: string,
             name: string,
             native:string,
        }[];
      }
    };
  }

  export const LanguagesSpoken: React.FC<Props> = (props) => {
      const languages = props.location.state.languages;
      const country = props.location.state.country;
    const articleValue = languages.map((article, index) => {
        return (
          <tr data-testid="article" key={index}>
            <td data-testid="article-title">{article.code}</td>
        <td data-testid="article-upvotes">{article.name}</td>
        <td data-testid="article-date" >{article.native}</td>
          </tr>
        );
      });

    
      return (
        <div className="App">
             <h4 data-testid="title">Languages Spoken in {country}</h4>
             <p>Total: {languages.length}</p>
          <div className="card w-50 mx-auto">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Language</th>
                  <th>Native</th>
                </tr>
              </thead>
              <tbody>{articleValue}</tbody>
            </table>
          </div>
        </div>
      );
}

