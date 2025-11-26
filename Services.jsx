import one from '../assets/images/a.jpg'
import two from '../assets/images/b.jpg'
import three from '../assets/images/c.jpg'
import { useState } from "react";

const Service = () => {

  // 1️⃣ Multiple Strings
  const [title, setTitle] = useState("KGF");
  const [hero, setHero] = useState("Yash");
  const [director, setDirector] = useState("Prashanth Neel");
  const [company, setCompany] = useState("Hombale Films");
  const [language, setLanguage] = useState("Kannada");
  const [genre, setGenre] = useState("Action");

  // 2️⃣ Numbers
  const [year, setYear] = useState(2022);
  const [rating, setRating] = useState(9.2);
  const [budget, setBudget] = useState(100);

  // 3️⃣ Null value
  const [selectedActor, setSelectedActor] = useState(null);

  // 4️⃣ Boolean
  const [isReleased, setIsReleased] = useState(true);
  const [isHit, setIsHit] = useState(false);

  // 5️⃣ Arrays
  const [songs, setSongs] = useState(["Sultan", "Garuda", "Dheera", "Jokae"]);
  const [villains, setVillains] = useState(["Garuda", "Adheera", "Guru"]);
  const [languages, setLanguages] = useState(["Kannada", "Tamil", "Telugu", "Hindi"]);
  const [collection, setCollection] = useState([100, 200, 300, 500]);

  // 6️⃣ Objects with Images
  const [poster, setPoster] = useState({
    img: one,
    alt: "KGF Poster",
  });

  const [actor, setActor] = useState({
    name: "Rocky Bhai",
    img: "https://example.com/rocky.jpg"
  });

  const [producer, setProducer] = useState({
    name: "Vijay Kiragandur",
    img: "https://example.com/hombale.jpg"
  });

  // 7️⃣ Array of objects
  const [cast, setCast] = useState([
    { name: "Yash", role: "Rocky", img: "https://example.com/yash.jpg" },
    { name: "Srinidhi", role: "Reena", img: "https://example.com/srinidhi.jpg" },
    { name: "Raveena", role: "Ramika Sen", img: "https://example.com/raveena.jpg" },
  ]);

  return (
    <>
      <div className="service-container">

        <h1 className="service-title">{title} - {year}</h1>

        <p className="service-text">Hero: {hero}</p>
        <p className="service-text">Director: {director}</p>
        <p className="service-text">Genre: {genre}</p>
        <p className="service-text">Released: {isReleased ? "Yes" : "No"}</p>
        <p className="service-text">Selected Actor: {selectedActor ?? "Nothing Selected"}</p>

        <h2 className="section-heading">Songs List</h2>
        <ul className="song-list">
          {songs.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h2 className="section-heading">Cast</h2>
        {cast.map((c, i) => (
          <div key={i} className="cast-card">
            <img src={c.img} />
            <div>
              <div className="cast-name">{c.name}</div>
              <div className="cast-role">{c.role}</div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}

export default Service;
