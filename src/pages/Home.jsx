import React, { useEffect, useState } from "react";

import { Nav } from "../assets/components/Nav";
import { useDataMoviesNowPlayingQuery } from "../services/get-movies-nowplaying";
import { PopularMovie } from "../assets/components/PopularMovie";
import { Header } from "../assets/components/Header";
import { NowPlayingMovie } from "../assets/components/NowPlayingMovie";
import { Footer } from "../assets/components/Footer";
import { useDataMoviesPopularQuery } from "../services/Movies/get-movies-popular";
import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../redux/actions/authMovie";

export const Home = () => {
  // const [populars, setPopulars] = useState([]);

  // const { data: movies } = useDataMoviesPopularQuery();

  // useEffect(() => {
  //   setPopulars(movies);
  // }, [movies]);


  const dispatch = useDispatch()

    const getMovie = () => {
        dispatch(GetMovie())
    }

    useEffect(() => {
        getMovie()
    }, [] )

    const {movies} = useSelector((store) => store.movie)

    const populars = movies



  return (
    <div>
      <Nav color="transparent" />
      <Header populars={populars} />
      <PopularMovie />
      {/* <NowPlayingMovie /> */}
      <Footer />
    </div>
  );
};
