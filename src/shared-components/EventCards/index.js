import { Flex, Box } from '@rebass/grid';
import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'shared-components/Typography/Paragraph';
import { TextWrapper, StyledImage, StyledBox } from './styled';

function EventCards({ name, discription, url }) {
  return (
    <StyledBox width={[.50, .33, .25, .20]} mt="2">
        <StyledImage src={url} alt="content" />
        <TextWrapper>
          <Paragraph
            text={name}
            variant="m"
            mt="xs"
            fontWeight={700}
            linesToShow="1"
          />
          <Paragraph
            text={discription}
            variant="m"
            mt="xs"
            mb="xs"
            linesToShow="3"
          />
        </TextWrapper>
    </StyledBox>
  );
}

EventCards.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default EventCards;
