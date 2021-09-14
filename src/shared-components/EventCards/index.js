import { Flex, Box } from '@rebass/grid';
import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'shared-components/Typography/Paragraph';
import Header from 'shared-components/Typography/Header';
import { TextWrapper } from './styled';

function EventCards({ name, discription, url }) {
  return (
    <Box>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <img src={url} alt="content" />
        <TextWrapper>
          <Header text={name} variant="s" mt="2" linesToShow="1" />
          <Paragraph text={discription} variant="m" mt="2" mb="2" linesToShow="3" />
        </TextWrapper>
      </Flex>
    </Box>
  );
}

EventCards.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default EventCards;
