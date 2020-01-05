// @flow

import * as React from "react";
import Trip from '../component/main'
import {
  Page,
  Grid

} from "tabler-react";


import SiteWrapper from "./wrapper.js";

function Home() {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row>
          <Grid.Col width={12}>
            <Trip />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
