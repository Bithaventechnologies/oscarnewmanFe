import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  author?: string;
  date?: string;
  readTime?: string;
  image?: string;
}

const PostList = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "First Blog Post",
      summary:
        "This is my first post about security innovations and modern practices in the industry. We explore the latest trends and technologies.",
      author: "John Doe",
      date: "Feb 6, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      title: "Another Post",
      summary:
        "Learning React is fun! Discover how we implement cutting-edge security solutions using modern web technologies.",
      author: "Jane Smith",
      date: "Feb 5, 2024",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Latest Blog Posts</h2>
        <Link
          to="/dash/postblog"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
        >
          Create Post
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-sm px-3 py-1 bg-blue-600 rounded-full">
                  Security
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>

              <div className="flex items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No posts yet
          </h3>
          <p className="text-gray-600">Be the first one to create a post!</p>
        </div>
      )}

      {posts.length > 4 && (
        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mx-auto">
            Load More Posts
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
