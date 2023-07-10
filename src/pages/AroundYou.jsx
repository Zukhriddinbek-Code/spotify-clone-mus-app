/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable operator-linebreak */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-return */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  //api key - at_62JlbNUp50VjcJTB9JkpTFhjsKPGL
  //api request url - https://geo.ipify.org/api/v2/country?apiKey=at_62JlbNUp50VjcJTB9JkpTFhjsKPGL&ipAddress=8.8.8.8
  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_62JlbNUp50VjcJTB9JkpTFhjsKPGL"
      )
      .then((res) => {
        setCountry(res?.data?.location?.country);
        setRegion(res?.data?.location?.region);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading songs around you" />;

  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You -{" "}
        <span>
          {country}, {region}
        </span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
