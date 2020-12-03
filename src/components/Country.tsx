import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    country: {
        code: string,
        name: string,
        capital: string,
        currency: string,
        languages: {
           code: string,
           name: string,
           native:string,
        }[],
        states:{
          code: string,
          name: string
        }[],
    }
  }

  export const Country: React.FC<Props> = (props) => {
      const {country} = props;
      return (
        <div className="App">
        <div id="slide" className="card text-center">
    <h1 data-testid="title">Country - {country.name}</h1>

        <table>
              <thead>
                <tr>
                  <th>Code: {country.code}</th>
                  <th>Capital: {country.capital}</th>
                  <th>Currency: {country.currency}</th>
                </tr>
              </thead>
            </table>
            <Link
        to={{
          pathname: `/languages-Spoken`,
          state: { country:country.name, languages:country.languages}
        }}
      >
        <button>Languages</button>
      </Link>
      <Link
        to={{
          pathname: `/States-list`,
          state: { country:country.name, states:country.states}
        }}
      >
        <button>View States</button>
      </Link>
            </div>
            </div>
      );
}

