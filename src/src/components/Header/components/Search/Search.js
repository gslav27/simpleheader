import React, { useState } from 'react';

import IconButton from '_Ui_/IconButton';
import SearchIcon from '_Ui_/Icons/Search';

import SearchForm from '../../../../containers/SearchForm';


const Search = () => {
  const [showInputForm, setShowInputForm] = useState(false);

  return (
    < >
      <IconButton
        type='button'
        title='искать'
        onClick={() => setShowInputForm(true)}
      >
        <SearchIcon />
      </IconButton>
      {showInputForm && <SearchForm onClose={() => setShowInputForm(false)} />}
    </>
  );
};

export default Search;
