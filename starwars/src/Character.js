import React, {useState} from 'react'
import styled from 'styled-components';

const StyledHeading = styled.div`
.Character {
    display: flex;
    justify-content: space-evenly;
    padding: 100px;
    background-color: red;
  }

`

const Character = (props) => {
  const { character } = props
    
    
    return (
    <StyledHeading>
      <div className="Character">
        <h1 className="Character">Name: {character.name}</h1>
        <ul>
        <li>Gender: {character.gender}</li>
        <li>Age: {character.gender}</li>
        </ul>
        
      </div>
      
      
    </StyledHeading>
    );
  }
  
  export default Character;