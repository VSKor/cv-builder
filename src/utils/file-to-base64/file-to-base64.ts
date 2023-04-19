import type { EncodeFileResult } from './types';

export const fileToBase64 = async (file: File): Promise<EncodeFileResult> => {
  return new Promise((resolve, reject) => {
    if (!('FileReader' in window)) {
      reject(new Error('FileReader not supported in the browser!'));
    }
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const base64String = (reader.result as string).replace(/^.+,/, '');
        const result: EncodeFileResult = { name: file.name, type: file.type, base64String };
        resolve(result);
      } catch (err) {
        reject(err);
      }
    };
    reader.readAsDataURL(file);
  });
};