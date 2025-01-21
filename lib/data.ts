
export const dishes = [
    {
      name: "Kyrgyz Beshbarmak",
      image: "/besh-barmak.jpeg",
      description: "Hand-rolled pasta with slow-cooked meat and rich broth",
    },
    {
      name: "Kazakh Kuurdak",
      image: "/kuurdak.jpg",
      description: "Sautéed meat with potatoes and local vegetables",
    },
    {
        name: "Uzbek Pilaf",
        image: '/uzbek-pilaf.jpg',
        description: "Traditional rice dish with tender lamb and aromatic spices",
      },
  ] as const 

export const menuCategories = {
    mains: [
     {
        name: "Kyrgyz Beshbarmak",
        description: "Hand-rolled pasta with slow-cooked lamb and rich broth",
        price: "£26",
        image: "/besh-barmak.jpeg",
      },
      {
        name: "Kazakh Kuurdak",
        description: "Sautéed lamb with potatoes and local vegetables",
        price: "£22",
        image: "/kuurdak.jpg",
      },
      {
        name: "Uzbek Pilaf",
        description: "Traditional rice dish with tender lamb, carrots, and aromatic spices",
        price: "£24",
        image: '/uzbek-pilaf.jpg',
      },
    ],
    starters: [
      {
        name: "Samsa",
        description: "Flaky pastry filled with spiced lamb and onions",
        price: "£5",
        image: "/samsa.png",
      },
      {
        name: "Shorpo",
        description: "Traditional lamb soup with vegetables",
        price: "£7",
        image: "/shorpo.jpeg",
      },
      {
        name: "Salad",
        description: "Fresh carrot and apple salad with herbs",
        price: "£6",
        image: "/salat.jpg",
      },
    ],
    desserts: [
      {
        name: "Chak-chak",
        description: "Honey-drizzled fried dough dessert",
        price: "£9",
        image: "/chak-chak.webp",
      },
      {
        name: "Boorsok",
        description: "Traditional fried dough with powdered sugar",
        price: "£8",
        image: "/boorsok.webp",
      },
      {
        name: "Honey cake",
        description: "Honey-flavored layers and creamy frosting.",
        price: "£7",
        image: "/honey-cake.jpg",
      },
    ],
  } as const
  export const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The most authentic Central Asian cuisine I've had outside of Kazakhstan. The lamb pilaf is outstanding!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Amazing atmosphere and even better food. The staff really knows their stuff and made great recommendations.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      text: "A hidden gem! The vegetarian options are creative and delicious. Can't wait to go back!",
      rating: 5,
    },
  ] as const

  export const teams = [
    {
      name: "Chef Happy",
      role: "Head Chef",
      image: "/master_chef.jpg",
      bio: "With over 20 years of experience in Central Asian cuisine, Chef Azamat brings authentic flavors and traditional techniques to every dish.",
    },
    {
      name: "Shy  Che",
      role: "Restaurant Manager",
      image: "/chef1.jpg",
      bio: "Shy Che ensures that every guest receives exceptional service and leaves with a memorable dining experience.",
    },
    {
      name: "Say Hello",
      role: "Sous Chef",
      image: "/chef3.webp",
      bio: "Timur specializes in traditional bread making and brings creativity to our menu while maintaining authenticity.",
    },
  ] as const