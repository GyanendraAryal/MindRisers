import React from 'react';

export const Product = ({
  title,
  description,
  rating,
  price,
  buttonText,
  onButtonClick,
  imageUrl, // Added image URL prop
  imageAlt, // Optional alt text for accessibility
}) => {
  // Simple array to generate 5 rating stars
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="max-w-[350px] p-5 rounded-2xl border border-gray-200 bg-white shadow-sm font-sans">
      {/* Product Image */}
      {imageUrl && (
        <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={imageAlt || title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="m-0 mb-2 text-xl font-bold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </h3>
      
      {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
            <div className="flex text-lg">
            {stars.map((star) => (
                <span 
                key={star} 
                className={`mr-0.5 ${
                    star <= Math.round(rating) ? 'text-amber-500' : 'text-gray-300'
                }`}
                >
                ★
                </span>
            ))}
            </div>
            <span className="text-sm font-semibold text-gray-600">{rating}</span>
        </div>

      {/* Description */}
      <p className="m-0 mb-5 text-sm leading-normal text-gray-600 line-clamp-3">
        {description}
      </p>

      {/* Price & Action Button */}
      <div className="flex justify-between items-center gap-4">
        <span className="text-2xl font-bold text-orange-600">
          {typeof price === 'number' ? `$${price.toFixed(2)}` : price}
        </span>
        <button 
          onClick={onButtonClick} 
          className="py-2.5 px-4.5 rounded-xl bg-blue-600 text-white border-none text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-700 active:bg-blue-800"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Product;
