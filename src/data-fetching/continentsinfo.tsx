import React from 'react';
import { useQuery, gql } from "@apollo/client";
import '../App.css';
import { Continents } from '../components/Continents';


interface Props {
  continents: {
      code: string,
      name: string,
      countries: {
         code: string,
         name: string
      }[]
  }[]
}

const GET_MY_CONTINENTS = gql`
query{
  continents{
    code
    name
    countries{
      code
      name
    }
  }
  }
`;

const TodoPrivateList: React.FC<Props> = ({continents})=> {
  // console.log(continents);
  return (
    <div className="App">
      <h4 data-testid="title">World Continents And Countries</h4>
      <p>Total: {continents.length}</p>
      <Continents articles= {continents}/>
    </div>
  );
}

// export default App;

const Continentsinfo = () => {
  const { loading, error, data } = useQuery(GET_MY_CONTINENTS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <TodoPrivateList continents={data.continents} />;
};
export default Continentsinfo;
export { GET_MY_CONTINENTS };
