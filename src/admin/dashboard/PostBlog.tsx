import { useState } from "react";
import { ImagePlus, Send, User, BookOpen, Tag } from "lucide-react";

const Postblog = () => {
  const [formData, setFormData] = useState<{
    title: string;
    author: string;
    content: string;
    category: string;
    image: File | null;
  }>({
    title: "",
    author: "",
    content: "",
    category: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categories = [
    "Technology",
    "Security",
    "Innovation",
    "Training",
    "Industry News",
    "Best Practices",
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className=" h-screen w-full overflow-y-scroll p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <BookOpen className="mr-2" />
          Create a New Blog Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Post Title
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter post title..."
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          {/* Author Input */}
          <div>
            <label className=" text-gray-700 font-semibold mb-2 flex items-center">
              <User className="mr-2" size={20} />
              Author
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter author name..."
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              required
            />
          </div>

          {/* Category Select */}
          <div>
            <label className="text-gray-700 font-semibold mb-2 flex items-center">
              <Tag className="mr-2" size={20} />
              Category
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 items-center">
              <ImagePlus className="mr-2" size={20} />
              Featured Image
            </label>
            <div className="mt-2">
              <div className="flex items-center justify-center w-full">
                <label className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-52 object-cover rounded-lg"
                      />
                    ) : (
                      <>
                        <ImagePlus className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG or JPEG (MAX. 800x400px)
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Post Content
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg h-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Write your post content here..."
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all flex items-center justify-center space-x-2 mb-4"
          >
            <Send className="w-5 h-5" />
            <span>Publish Post</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postblog;
