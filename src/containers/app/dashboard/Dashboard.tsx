import React from 'react';
import withAuthenticate from 'hoc/withAuthenticate';

function Dashboard() {
  return <div>Dashboard</div>;
}

export default withAuthenticate(Dashboard);
