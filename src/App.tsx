import React from 'react';

interface AppProps {
  message:string
}
const App = (props:AppProps) => {
//  const App = ({ message }: { message: string }) => {  
  //console.log(props);
  //const { message } = props;
  return <div>{props.message} React Starter Kit in TypeScript</div>;
};

export default App;
