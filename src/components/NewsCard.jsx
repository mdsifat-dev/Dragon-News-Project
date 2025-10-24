import { FaRegBookmark, FaRegShareSquare, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,

    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-accent" />
          <FaRegShareSquare className="cursor-pointer hover:text-accent" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 text-lg font-bold text-gray-800 leading-snug">
        {title}
      </h3>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img src={thumbnail_url} alt={title} className="rounded-lg w-full" />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-600">
        {details.length > 250 ? (
          <p>
            {details.slice(0, 250)}...{" "}
            <span className="text-accent font-semibold cursor-pointer">
              Read More
            </span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 border-t pt-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={
                index < Math.round(rating?.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-sm font-medium text-gray-700">
            {rating?.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
