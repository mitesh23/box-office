/* eslint-disable */
import React, { useState } from 'react';
import MainPageLayout from '../MainPageLayout';
import { apiGet } from '../misc/Config';
import ShowGrid from '../Show/ShowGrid';
import ActorGrid from '../Actor/ActorGrid';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setresult] = useState(null);
  const [searchoption, setsearchoprtion] = useState('shows');

  const isshowssearch = searchoption === 'shows';
  const OnInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = ev => {
    apiGet(`/search/${searchoption}?q=${input}`).then(result => {
      setresult(result);
    });
  };
  //https://api.tvmaze.com/search/shows?q=men
  //fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
  //.then(r => r.json())
  //.then(result => {
  //setresult(result);
  //  console.log(result);
  //  });
  //};

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setsearchoprtion(ev.target.value);
  };
  console.log(searchoption);

  const renderResult = () => {
    if (result && result.length === 0) {
      return <div>No Result</div>;
    }
    if (result && result.length > 0) {
      return result[0].show ? (
        <ShowGrid data={result} />
      ) : (
        <ActorGrid data={result} />
      );

      // {result.map(item => (
      // <div key={item.show.id}>{item.show.name}</div>
      //))}
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="search for something"
        onChange={OnInputChange}
        onKeyDown={onKeyDown}
      ></input>
      <div>
        <label htmlFor="shows-search">
          shows
          <input
            type
            id="shows-search"
            type="radio"
            value="shows"
            checked={isshowssearch}
            onChange={onRadioChange}
          ></input>
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isshowssearch}
            onChange={onRadioChange}
          ></input>
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
