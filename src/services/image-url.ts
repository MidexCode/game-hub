const getCroppedImageUrl = (url: string) => {
  // Return placeholder if no image is available
  return url || "https://via.placeholder.com/600x400?text=No+Image";
};

export default getCroppedImageUrl;
