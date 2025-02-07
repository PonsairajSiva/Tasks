import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const Card = ({ title, image, description }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{description}</p>
        <Button>Read More</Button>
      </div>
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Beauty of Nature",
    image: "../images/david-jusko-KQoo7nOV62Y-unsplash.jpg",
    description: "Discover the wonders of nature and its breathtaking landscapes...",
  },
  {
    id: 2,
    title: "The Future of Technology",
    image: "../images/possessed-photography-U3sOwViXhkY-unsplash.jpg",
    description: "How AI and automation are shaping the future of our world...",
  },
  {
    id: 3,
    title: "Healthy Living Tips",
    image: "../images/nadine-primeau--ftWfohtjNw-unsplash.jpg",
    description: "Simple habits to improve your lifestyle and well-being...",
  },{
    id: 4,
    title: "Space Exploration: The Next Frontier",
    image: "../images/ivana-cajina-asuyh-_ZX54-unsplash.jpg",
    description: "The latest advancements in space technology and missions...",
    },
    {
    id: 5,
    title: "Mindfulness and Mental Health",
    image: "../images/dan-meyers-hluOJZjLVXc-unsplash.jpg",
    description: "Techniques to improve mental well-being and reduce stress...",
    },
    {
    id: 6,
    title: "Sustainable Living and Eco-Friendly Choices",
    image: "../images/jan-kopriva-j3qBMRLTmOQ-unsplash.jpg",
    description: "How to make choices that help the environment and future generations...",
    }
];

export default function BlogPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen p-6`}> 
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} title={post.title} image={post.image} description={post.description} />
        ))}
      </div>
    </div>
  );
}
