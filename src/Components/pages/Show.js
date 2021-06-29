/* eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';
import ShowMainData from '../Show/ShowMainData';
import Cast from '../Show/Cast';
import Seasons from '../Show/Seasons';
import Details from '../Show/Details';
import { ShowPageWrapper } from './Show.Styled';
import { InfoBlock } from './Show.Styled';

const Show = () => {
  const { id } = useParams();
  const { shows, isloading, error } = useshow(id);

  console.log('Show', Show);
  console.log('isLoading', isLoading);

  if (isLoading) {
    return <div>Date is being loaded</div>;
  }
  if (error) {
    return <div>error occured: {error}</div>;
  }
  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details network={show.network} premiered={show.premiered} />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
