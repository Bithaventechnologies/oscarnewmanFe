/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../config/axiosConfig";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  author?: string;
  createdAt: string;
  readTime?: string;
  img?: string;
}

const PostList = () => {
  const token = localStorage.getItem("AdminToken");
  const [Bloglist, setBloglist] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const getAllBlog = async () => {
    const toastloadingId = toast.loading("Please wait....");
    try {
      const response = await axios.get("/getBlogs", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setBloglist(response.data);
    } catch (error: any) {
      console.log(error);
      toast.error("Failed to fetch blog posts");
    } finally {
      toast.dismiss(toastloadingId);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="h-screen overflow-y-scroll w-full p-6 ">
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
        {Bloglist.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
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
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                  onClick={() => setSelectedPost(post)}
                >
                  Quick View
                </button>
                <Link
                  to={`/post/${post.id}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedPost(null)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            <p className="text-gray-700 mb-4">{selectedPost.content}</p>
            <div className="flex justify-end">
              <Link
                to={`/post/${selectedPost.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Read Full Post
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
