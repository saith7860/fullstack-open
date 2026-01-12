import Blog from "../models/blogSchema.js";
const getBlogs = async (request, response) => {
  try {
    await Blog.find({}).then((blogs) => {
      response.json(blogs);
    });
  } catch (error) {
    console.log("errro fetching blog", error);
  }
};
const postBlogs = async (request, response) => {
  try {
    const blog = new Blog(request.body);

    blog.save().then((result) => {
      response.status(201).json(result);
    });
  } catch (error) {
    console.log("error posting blog", error);
  }
};
export { getBlogs, postBlogs };
