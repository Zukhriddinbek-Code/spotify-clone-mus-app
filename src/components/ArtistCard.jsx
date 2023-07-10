/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable operator-linebreak */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-return */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="artist"
        src={track?.images?.coverart}
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncat">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
