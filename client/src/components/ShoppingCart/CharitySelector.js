import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MakeAWish from './ShoppingCart';

function CharitySelector() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/makeawish"
            component={() =>
              (window.location =
                'https://secure2.wish.org/site/SPageServer?pagename=donate_now&ft=SPEA&fi=20_10&otgmthg=true&level1=1000&level2=500&level3=250&level4=125&level5=75&presel=level4&Campaign_ID=MNOO%25fy%25&Appeal_ID=%25fy%25ON-XXX-SRCH&Package_ID=OT-NT-GIO&Subtype=DEV-Multimedia%20Online&gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_term=make-a-wish%20donate&utm_campaign=Paid&gclid=CjwKCAjwsan5BRAOEiwALzomX8ib8oQmm7PzZBAtSoOocwBC_g8bVXgovrxzFOmgVng1sKpS16vNhhoCF5EQAvD_BwE')
            }></Route>
          <Route pattern="/makeawish" component={MakeAWish}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default CharitySelector;
