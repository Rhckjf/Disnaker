/* eslint-disable react/prop-types */
export default function Card({ img, title, content, onClick }) {
  return (
    <div
      className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition"
      onClick={onClick}
    >
      {img && (
        <img
          src={img}
          alt={title}
          className="rounded-md mb-3 h-40 w-full object-cover"
        />
      )}
      <h4 className="font-semibold text-lg">{title}</h4>
      {content && <p className="text-sm text-gray-600 mt-1">{content}</p>}
    </div>
  );
}
