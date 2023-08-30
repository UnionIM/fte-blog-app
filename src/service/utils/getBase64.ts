export const getBase64 = (file: Blob) => {
  if (file) {
    return new Promise<string | null | ArrayBuffer>(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  return null;
};
