type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="gallery-search">
      <span className="sr-only">搜索 Prompt</span>
      <input
        type="search"
        className="gallery-search-input"
        placeholder="搜索模板、场景或关键词"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
