import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navigation/NavBar';
import { authenticate } from './store/session';
import SpotsPage from './components/Spots/SpotsPage';
import SpotDetails from './components/SpotDetails/SpotDetails';
import CreateSpotForm from './components/CreateSpot/CreateSpot';
import Footer from './components/Footer/Footer'
import ErrorPage from './components/404/404';
import { getAllSpots} from './store/spot';
import {getBookings} from './store/booking'

import UserBookings from './components/Bookings/UserBookings/UserBookings';



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllSpots());
      await dispatch(getBookings());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' >
          <SpotsPage/>
        </Route>
        <Route exact path='/spots/new'>
          <CreateSpotForm />
        </Route>
        <Route exact path='/spots/:id'>
          <SpotDetails />
        </Route>
        <Route exact path='/users/:id/bookings'>
          <UserBookings/>
        </Route>
        <Route path='/404-Page-Not-Found'>
          <ErrorPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
