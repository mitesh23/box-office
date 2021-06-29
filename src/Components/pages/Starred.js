/*eslint-disable*/
import { React, useEffect, useState } from 'react';
import MainPageLayout from '../MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/Config';
import ShowGrid from '../Show/ShowGrid';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showid => apiGet(`/shows/${showid}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsloading(false);

          console.log('results', 'results');
        })
        .catch(err => {
          setError(err.message);
          setIsloading(false);
        });
    } else {
    }
  }, [starred]);
  return (
    <MainPageLayout>
      {isloading && <div>shows are still loading</div>}
      {error && <div>Error occured:{error}</div>}
      {!isloading && !shows && <div>No shows were added</div>}
      {!isloading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};
export default Starred;
