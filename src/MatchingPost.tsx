import { getMatchingPosts, generateGradient } from "./blog-posts";
const MatchingPost = ({ query }: { query: string }) => {
  const matchingPosts = getMatchingPosts(query);
  return (
    <div className="flex justify-center items-center">
      <ul className="flex flex-wrap max-w-250 gap-5 justify-center">
        {matchingPosts.map((post) => (
          <li
            key={post.id}
            className="w-70 shadow-2xl flex flex-col items-center p-4"
          >
            <div
              className="w-60 h-60"
              style={{ background: generateGradient(post.id) }}
            ></div>
            <h3 className="text-2xl text-amber-600 text-center">
              {post.title}
            </h3>
            <p className="mt-4 text-center">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchingPost;
