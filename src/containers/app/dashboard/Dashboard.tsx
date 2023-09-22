import React from 'react';
import withAuthenticate from 'hoc/withAuthenticate';
import Button from 'components/button/Button';

function Dashboard() {
  return (
    <div>
      <Button color="facebook" colorWhite={true}>
        Add
      </Button>
    </div>
  );
}

export default withAuthenticate(Dashboard);
