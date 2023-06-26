export const isImageOrVideo = (filename) => {
    const fileExtension = filename.split('.').pop(); // Get the file extension
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv'];
  
    const lowercaseExtension = fileExtension.toLowerCase();
  
    if (imageExtensions.includes(lowercaseExtension)) {
      return 'image';
    } else if (videoExtensions.includes(lowercaseExtension)) {
      return 'video';
    } else {
      return 'other';
    }
  };