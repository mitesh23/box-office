/* eslint-disable */
import React, { useState } from 'react';
import MainPageLayout from '../MainPageLayout';
import { apiGet } from '../misc/Config';
import ShowGrid from '../Show/ShowGrid';
import ActorGrid from '../Actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hooks';
import { SearchButtonWrapper } from './Home.styled';
import { RadioInputsWrapper } from './Home.styled';
import { SearchInput } from './Home.styled';
import CustomRadio from '../customRadio';

const Home = () => {
  const [input, setInput] = useLastQuery();
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
      <SearchInput
        type="text"
        placeholder="search for something"
        onChange={OnInputChange}
        onKeyDown={onKeyDown}
      ></SearchInput>

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isshowssearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="actors-search"
            id="actors-search"
            value="people"
            type="text"
            checked={!isshowssearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          search
        </button>
      </SearchButtonWrapper>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
