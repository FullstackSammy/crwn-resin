const App = () => {
  
  const categories = [
    {
      id: 1,
      title: "One Piece",
    },
    {
      id: 2,
      title: "Naruto",
    },
    {
      id: 3,
      title: "Dragon Ball",
    },
    {
      id: 4,
      title: "Demon Slayer",
    },
    {
      id: 5,
      title: "Pokémon",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-cointainer">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
