'use client';

interface ProductFilterProps {
  tags: string[]
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onClearFilters?: () => void;
}

export const ProductFilter = ({ tags, selectedTags, onTagSelect, onClearFilters }: ProductFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
       {onClearFilters && (
        <button
          className="px-3 py-1 rounded-full text-sm bg-red-500 text-white"
          onClick={onClearFilters}
        >
          Show All Products
        </button>
      )}
      {tags.map((tag) => (
        <span
          key={tag}
          className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
            selectedTags?.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => onTagSelect(tag)}
        >
          {tag.at(0)?.toUpperCase() + tag.slice(1)}
        </span>
      ))}
    
    </div>
  );
};