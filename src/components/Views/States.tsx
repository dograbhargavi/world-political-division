import React from 'react'

interface Props {
    history: {};
    location: {
      state: {
          country:string,
          states:{
            code: string,
            name: string,
          }[];
      }
    };
  }

  export const States: React.FC<Props> = (props) => {
      const states = props.location.state.states;
      const country = props.location.state.country;
      let havestates = true;
      if(states.length===0)
      {
         havestates=false;
      }
      console.log(states);
    const articleValue = states.map((article, index) => {
        return (
          <tr data-testid="article" key={index}>
            <td data-testid="article-title">{article.code}</td>
        <td data-testid="article-upvotes">{article.name}</td>
          </tr>
        );
      });

    
      return (
        <div className="App">
              {havestates ?
              <>
              <h4 data-testid="title">States in {country}</h4>
              <p>Total: {states.length}</p>
              <div className="card w-50 mx-auto">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>State Name</th>
                </tr>
              </thead>
              <tbody>{articleValue}</tbody>
            </table> 
            </div>
            </>
            : 
            <div id="slide" className="card text-center">
            <h1 data-testid="title">{country} Is Not Divided into states! </h1> 
          </div>
  }
 
  </div>
      );
}

