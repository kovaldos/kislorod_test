import {Upload} from './upload.js';

const uploadImageBlock = document.querySelector('[data-upload="img"]');

const ONE_MB = 1048576;

export const uploadImage = () => new Upload(uploadImageBlock, {
  uploadLength: 99,
  dropZone: false,
  preview: true,
  previewImg: true,
  maxFullSize: ONE_MB * 10,
  accept: ['.png', '.jpeg'],
  iconFormat: {
    png: './img/file/icon-file-png.png',
    jpeg: './img/file/icon-file-jpg.png',
    default: './img/file/icon-file-docs.png',
  },
  fileInfo: {
    fileName: false,
    fileSize: false,
  },
  emptyMessage: '',
  errorMessage: 'Размер фотографии(ий) превышает 10 Мб!',
});
