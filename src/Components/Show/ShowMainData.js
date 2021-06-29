/* eslint-disable */

import React from 'react';

import styled from 'styled-components';

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { MainDataWrapper } from './ShowMainData.Styled';
import { Headline } from './ShowMainData.Styled';
import { TagList } from './ShowMainData.Styled';

import { Star } from './Styled';
const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMAGE_NOT_FOUND} alt="show-cover" />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          Tags:{' '}
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};
export default ShowMainData;
