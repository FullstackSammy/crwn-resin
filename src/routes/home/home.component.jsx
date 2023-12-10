import CategoryMenu from "../../components/category-menu/category-menu.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "One Piece",
      imageUrl: "https://i.imgur.com/1gjkQ2t.jpg",
    },
    {
      id: 2,
      title: "Naruto",
      imageUrl: "https://i.imgur.com/qweq6kH.jpg",
    },
    {
      id: 3,
      title: "Dragon Ball",
      imageUrl: "https://i.imgur.com/WrbFJNx.jpg",
    },
    {
      id: 4,
      title: "Demon Slayer",
      imageUrl: "https://i.imgur.com/5kGSoAH.jpg",
    },
    {
      id: 5,
      title: "Pokémon",
      imageUrl: "https://i.imgur.com/lxYYEmi.jpg",
    },
  ];

  return (
    <CategoryMenu categories={categories} />
  )
}

export default Home;