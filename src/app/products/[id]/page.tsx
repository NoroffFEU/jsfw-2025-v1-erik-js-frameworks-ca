"use client";
import { useParams } from "next/navigation";
import { useProducts } from "../../../features/products/hooks";
import Image from "next/image";
import { useCartStore } from "../../../features/cart/store";
import { Star } from "lucide-react";
import { useToastStore } from "../../../features/toast/toast";

export default function ProductDetailPage() {
  const { data, isLoading, error } = useProducts();
  const params = useParams();
  const { id } = params;
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  if (isLoading) {
    return <p className="text-center mt-8">Getting your product...</p>;
  }
  if (error) {
    return (
      <p className="text-center mt-8">
        Sorry! We got an error while loading your product.
      </p>
    );
  }
  const product = data?.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center mt-8">Sorry. Product not found.</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={product.image.url}
          alt={product.title}
          className="w-full md:w-1/2 object-cover rounded-lg"
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <Star size={20} className="fill-yellow-400 text-yellow-400" />
            {product.rating > 0 ? (
              <span className="text-sm text-gray-500">
                {product.rating.toFixed(1)} / 5
              </span>
            ) : (
              <span className="text-sm text-gray-500">Not rated yet</span>
            )}
          </div>

          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold">
            Price: ${product.discountedPrice.toFixed(2)}
          </p>
          {product.discountedPrice < product.price && (
            <p className="text-sm text-gray-500 line-through">
              Original Price: ${product.price.toFixed(2)}
            </p>
          )}
          <button
            onClick={() => {
              addItem(product.id);
              addToast(`${product.title} added to your cart`);
            }}
            className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors font-bold  cursor-pointer"
          >
            Add to Cart
          </button>
          <div className="mt-2">
            <h2 className="text-md mb-2 text-gray-700 font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <p
                  className="bg-green-200 px-2 py-1 rounded text-sm shadow"
                  key={tag}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="flex flex-wrap gap-2"> Reviews</h2>
        {product.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-200 shadow p-4 rounded"
              >
                <p className="font-semibold flex flex-row items-center gap-1">
                  {review.username}{" "}
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />{" "}
                  {review.rating}
                </p>

                <p className="text-sm text-gray-500">
                  &quot;{review.description}&quot;
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
