"use client";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  alt,
  className = "",
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder ${aspectRatio} ${className} rounded-lg overflow-hidden`}
    >
      <span className="text-sm opacity-60">{alt}</span>
    </div>
  );
}
