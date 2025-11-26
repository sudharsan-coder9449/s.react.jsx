const Banner = () => {
  return (
    <>
      <div className="banner-container">

        {/* Movie Trailer */}
        <div className="banner-video">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/tLeTx5OdjZs"
            title="KGF 2 Official Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Movie Info */}
        <div className="banner-content">
          <h1 className="movie-title">KGF CHAPTER 2</h1>

          <p className="movie-tagline">🔥 THE WORLD HAS A NEW POWER! 🔥</p>

          <p className="movie-desc">
            KGF Chapter 2 is an Indian Kannada-language action film directed by Prashanth Neel. 
            The movie continues the journey of Rocky, who rises as the savior of the oppressed.
            With intense power-packed action, emotional drama, and world-class visuals, KGF 2 
            became a massive blockbuster worldwide.
          </p>

          <div className="movie-details">
            <p><strong>⭐ Hero:</strong> Yash (Rocky Bhai)</p>
            <p><strong>⭐ Villain:</strong> Sanjay Dutt (Adheera)</p>
            <p><strong>⭐ Director:</strong> Prashanth Neel</p>
            <p><strong>⭐ Release Year:</strong> 2022</p>
            <p><strong>⭐ Box Office:</strong> ₹1200+ Crores Worldwide</p>
          </div>

          <button className="watch-btn">🎥 Watch Trailer</button>
        </div>

      </div>
    </>
  );
};

export default Banner;