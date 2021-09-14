import styled from 'styled-components';
import screen from 'styling/screen';
import spacing from 'styling/spacing';
import { Box } from '@rebass/grid';

export const StyledBox=styled(Box)` 
padding: 7px;
`;
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