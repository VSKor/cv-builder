import { defineStore } from 'pinia';
import cv from './../../__mocks__/data/cv.json';

export const useAppStore = defineStore('app', () => {
  return {
    cv,
  };
});
