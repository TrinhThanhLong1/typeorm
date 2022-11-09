export const imageFileFilter = (req: any, file: any, callback: any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp|JPG|JPEG|PNG|GIF|WEBP)$/)) {
    req.fileValidationError = 'Error';
    return callback(null, false);
  }
  callback(null, true);
};
