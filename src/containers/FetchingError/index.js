import React from 'react';
import {Message} from 'semantic-ui-react';
import store from '../../store';

const FetchingError = () => {
  const {fetchingError} = store.getState();
  if (fetchingError) {
    const errorMsg = fetchingError.reason || 'internal error';
    return (
      <Message error
        icon='warning'
        header={fetchingError.type}
        content={`We experienced a problem fetching this data due to ${errorMsg}`}
      />
    )
  }

  return (<label></label>);
};

export default FetchingError;