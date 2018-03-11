const capitalizeFileExtension = (text: string) => {
  const extensionPattern = /\.[0-9a-z]+$/i;
  return text.replace(extensionPattern, ext => ext.toUpperCase());
};

export default capitalizeFileExtension;
