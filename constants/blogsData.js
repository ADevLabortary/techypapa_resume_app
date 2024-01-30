export const blogsData = [
  {
    category: "ELECTRONICS",
    date: formatDate(new Date()),
    imgSrc:
      "https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais",
    blogName: "How To Make a Paper Plane",
    author: "Roxx",
    slug: "how-to-make-a-paper-plane",
    blogDesc:
      "Explore the art of crafting a perfect paper plane with our step-by-step guide. Learn folding techniques, aerodynamics, and unleash your creativity. Embark on a journey of paper aviation mastery!",
  },
  {
    category: "TECH",
    imgSrc:
      "https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais",
    date: formatDate(new Date()),
    blogName: "The Future of Virtual Reality",
    author: "Yusuf",
    slug: "The-Future-of-Virtual-Reality",
    blogDesc:
      "Dive into the evolving landscape of virtual reality technology. Discover its applications, advancements, and the exciting possibilities that await in this immersive digital realm.",
  },
  {
    category: "SCIENCE",
    imgSrc:
      "https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais",
    date: formatDate(new Date()),
    blogName: "Unraveling the Mysteries of Dark Matter",
    author: "Faran",
    slug: "Unraveling-the-Mysteries-of-Dark-Matter",
    blogDesc:
      "Join us on a scientific exploration as we delve into the enigmatic realm of dark matter. Uncover the current research, theories, and the quest to understand the invisible force shaping our universe.",
  },
  {
    category: "TRAVEL",
    date: formatDate(new Date()),
    imgSrc:
      "https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais",
    blogName: "Hidden Gems: Off the Beaten Path Travel Destinations",
    author: "John",
    slug: "Hidden-Gems",
    blogDesc:
      "Escape the ordinary and discover lesser-known travel destinations. Immerse yourself in the charm of hidden gems, away from the tourist crowds. Your next adventure awaits!",
  },
];

function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

author: "Faran";
