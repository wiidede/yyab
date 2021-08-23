import router from '/@/router';

export const navTo = (path: string): void => {
  router.push(path).then(void 0);
};

export const goBack = (): void => {
  router.back();
};
