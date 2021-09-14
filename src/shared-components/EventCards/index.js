import { Flex, Box } from '@rebass/grid';
import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'shared-components/Typography/Paragraph';
import { TextWrapper, StyledImage, StyledFlex } from './styled';

function EventCards({ name, discription, url }) {
  return (
    <Box width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]} mt="2">
      <Box
        width={.95}
      >
        <StyledImage src={url} alt="content" />
        <TextWrapper>
          <Paragraph
            text={name}
            variant="m"
            mt="2"
            fontWeight={700}
            linesToShow="1"
          />
          <Paragraph
            text={discription}
            variant="m"
            mt="2"
            mb="2"
            linesToShow="3"
          />
        </TextWrapper>
      </Box>
    </Box>
  );
}

EventCards.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default EventCards;
