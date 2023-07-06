/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-return */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(songid);

  return (
    <div className="flex flex-full">
      {/* <DetailsHeader artistId={artistId} songData={songid.data} /> */}

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default SongDetails;
