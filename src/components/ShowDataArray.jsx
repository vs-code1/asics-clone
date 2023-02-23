import { useState } from "react";

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" }
];

function List() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <div>
      <h1>Inspiring Scluptors</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() =>
                setArtists(artists.filter((a) => a.id !== artist.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
