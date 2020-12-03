import React from 'react';
import { useQuery, gql } from "@apollo/client";
import '../App.css';
import { Country } from '../components/Country';


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
  },
    location:{
            state: {
                code : string
            }
        },
}

const GET_MY_COUNTRY_INFO = gql`
query($code: ID!){
  country(code:$code){
    code
    name
    capital
    currency
    languages{
      code
      name
      native
    }
    states{
      code
      name
    }
  }
}`;


const CountryInfoDetail: React.FC<Props> = (props)=> {
    const {country} = props;
  // console.log(country+" ***"+location);
  return (
    <div className="App">
      <Country country= {country}/>
    </div>
  );
}


export const Countryinfo: React.FC<Props> = (props)=> {
  const {location} = props;
  const code = location.state;
  // console.log(location);
  const { loading, error, data } = useQuery(GET_MY_COUNTRY_INFO,{ variables: { code } });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <CountryInfoDetail country={data.country} location={location}/>;
};
export { GET_MY_COUNTRY_INFO };
