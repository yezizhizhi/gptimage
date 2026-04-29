type LoadMoreButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export function LoadMoreButton({ onClick, disabled }: LoadMoreButtonProps) {
  return (
    <div className="gallery-load-more-wrap">
      <button type="button" className="gallery-load-more" onClick={onClick} disabled={disabled}>
        {disabled ? "已全部展示" : "Load More"}
      </button>
    </div>
  );
}
