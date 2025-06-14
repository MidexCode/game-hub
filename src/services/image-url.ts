import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  // Return placeholder if no image is available
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target);

  // If 'media/' is not found in URL, return original URL
  if (index === -1) return url;

  const targetEndIndex = index + target.length;
  return (
    url.slice(0, targetEndIndex) + "crop/600/400/" + url.slice(targetEndIndex)
  );
};

export default getCroppedImageUrl;
