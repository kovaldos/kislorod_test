import {Upload} from './upload.js';

const uploadImageBlock = document.querySelector('[data-upload="img"]');

export const uploadImage = () => new Upload(uploadImageBlock, {
  uploadLength: 4,
  dropZone: false,
  preview: true,
  previewImg: true,
  maxFileSize: 10485760,
  accept: ['.png', '.jpg', '.jpeg'],
  iconFormat: {
    png: './img/file/icon-file-png.png',
    jpg: './img/file/icon-file-jpg.png',
    jpeg: './img/file/icon-file-jpg.png',
    default: './img/file/icon-file-docs.png',
  },
  fileInfo: {
    fileName: true,
    fileSize: true,
  },
  emptyMessage: 'Добавьте до 4 изображений (Необязательно)',
  errorMessage: 'Выделенные файлы превышают максимальный размер',
});
