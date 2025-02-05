import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const latestBlogs = [
    {
      id: 1,
      title: "Latest Technology Trends",
      excerpt: "Explore the cutting-edge technologies shaping our future...",
      date: "February 5, 2025",
      image: "/api/placeholder/400/250?text=Tech+Trends",
    },
    {
      id: 2,
      title: "Design Principles for Modern Web Apps",
      excerpt:
        "Key insights into creating intuitive and responsive interfaces...",
      date: "January 28, 2025",
      image: "/api/placeholder/400/250?text=Web+Design",
    },
    {
      id: 3,
      title: "Sustainable Innovation in Tech",
      excerpt: "How technology can drive environmental sustainability...",
      date: "January 15, 2025",
      image: "/api/placeholder/400/250?text=Green+Tech",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Our Blog <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
