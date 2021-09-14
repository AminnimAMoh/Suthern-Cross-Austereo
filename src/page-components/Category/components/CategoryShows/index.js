import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import Header from 'shared-components/Typography/Header';
import EventCards from 'shared-components/EventCards';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';

function CategoryShows({ shows, description }) {
  const sortedShows = shows.sort((a, b) => {
    // First, we have to convert the both indexes name key to lower case
    // so they always comparable
    let aName = a.name.toLowerCase(),
      bName = b.name.toLowerCase();
    // Then we can compare them and return the -1,1 0 depending on the
    // string comparison.
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });
  console.log(sortedShows);
  return (
    <StyledCategoryShows>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <StyledBox width={1}>
          {shows && (
            <TextWrapper>
              <Header
                text={`${shows.length} Podcasts`}
                variant="s"
                mt="m"
                mb="m"
              />
            </TextWrapper>
          )}
          {description && (
            <TextWrapper>
              <Paragraph text={description} variant="l" transparent />
            </TextWrapper>
          )}
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="top"
            flexWrap="wrap"
          >
            {shows &&
              sortedShows.map(
                ({
                  name,
                  description,
                  images: {
                    squareLarge: { url },
                  },
                }) => {
                  return (
                    <EventCards
                      name={name}
                      discription={description}
                      url={url}
                    />
                  );
                }
              )}
          </Flex>
        </StyledBox>
      </Flex>
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.shape({
        squareLarge: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;
