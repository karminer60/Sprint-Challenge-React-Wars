import React, {useState} from 'react'
import styled from 'styled-components';

const StyledHeading = styled.div`
.Character {
    display: flex;
    justify-content: space-evenly;
    padding: 100px;
    background-color: rgb(244, 244, 244, 0.4);
  }

`

const Character = (props) => {
  const { character } = props
    
    
    return (
    <StyledHeading>
      <div className="Character">
        <h1 className="Character">Name: {character.name}</h1>
        <ul>
        
        <p>Gender: {character.gender}</p>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        </ul>
        
      </div>
      
      
    </StyledHeading>
    );
  }
  
  export default Character;