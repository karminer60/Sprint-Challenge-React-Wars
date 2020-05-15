import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
.topDiv {
    display: flex;
    justify-content: space-evenly;
    padding: 100px;
    background-color: red;
  }

  .photo {
    display: flex;
    justify-content: space-evenly;
  }

`

const Character = (props) => {
    const { data } = props
    return (
    <StyledHeading>
      <div className="Characters">
        <h1 className="Character">Character</h1>
      </div>
      
      
      {data.map(( index) => <li key={index}><p>Name: {data.name}</p>
        <p>Age: {data.age}</p></li>)}

        
      
        


    </StyledHeading>
    );
  }
  
  export default Character;