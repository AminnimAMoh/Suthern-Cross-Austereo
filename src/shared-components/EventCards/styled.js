import styled from 'styled-components';
import { Box } from '@rebass/grid';
import spacing from 'styling/spacing';
import screen from 'styling/screen';

export const StyledImage=styled.img`
    width:100%;
    border-radius:1em;
`;
export const TextWrapper = styled.div`
   margin-bottom: 12px;

   ${screen.mobile} {
    margin-bottom: 0;
  }
`;