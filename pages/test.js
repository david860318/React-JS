import React from 'react';

export default function Test() {

const foo = ()=>{
  if(true){
    console.log(123);
  }
}

  return (
    <>
      {foo()}
    </>
  );
}
