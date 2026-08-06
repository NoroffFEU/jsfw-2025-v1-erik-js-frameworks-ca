"use client";

interface ProductFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onClearFilters?: () => void;
}

export const ProductFilter = ({
  tags,
  selectedTags,
  onTagSelect,
  onClearFilters,
}: ProductFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {onClearFilters && (
        <button
          className="px-3 py-1 rounded-full text-sm bg-green-800 text-white cursor-pointer hover:bg-green-700 transition-colors font-bold"
          onClick={onClearFilters}
        >
          Show All
        </button>
      )}
      {tags.map((tag) => (
        <span
          key={tag}
          className={`px-3 py-1 rounded-full text-sm  cursor-pointer hover:opacity-80 ${
            selectedTags?.includes(tag)
              ? "bg-gray-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => onTagSelect(tag)}
        >
          {tag.at(0)?.toUpperCase() + tag.slice(1)}
        </span>
      ))}
    </div>
  );
};
