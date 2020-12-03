import React from 'react';
import { useQuery, gql } from "@apollo/client";
import '../App.css';
import { Languages } from '../components/Languages';


interface Props {
    languages: {
      code: string,
      name: string,
      native: string,
  }[]
}

const GET_LANGUAGES = gql`
query{
    languages{
      code
      name
      native
    }
    }
`;

const TodoPrivateList: React.FC<Props> = ({languages})=> {
  console.log(languages);
  return (
    <div className="App">
     <h4 data-testid="title">World Languages</h4>
     <p>Total: {languages.length}</p>
      <Languages languages= {languages}/>
    </div>
  );
}

// export default App;

export const Languagesinfo = () => {
  const { loading, error, data } = useQuery(GET_LANGUAGES);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <TodoPrivateList languages={data.languages} />;
};
// export default Languagesinfo;
export { GET_LANGUAGES };
