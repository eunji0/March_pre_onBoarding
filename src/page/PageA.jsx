import React from 'react';
import styled from 'styled-components';

const BackTxt = styled.div`
    display: flex;
    height: 100%;
    font-size: 40px;
    font-weight: 600;
    color: #4e6dde;
    margin-left: 500px;
    align-items: center;
`


function PageA() {

  return (
    <div>
        <BackTxt>This is Page A!</BackTxt>
      
    </div>
  )
}

export default PageA
