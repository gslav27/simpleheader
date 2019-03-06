export default {

  // MediaMixins
  widthXlMediaMixin:
    styles => `@media (max-width: 1920px) and (min-width: 1367px) {
      ${styles}
    }`,
  widthLgMediaMixin:
    styles => `@media (max-width: 1366px) and (min-width: 1025px) {
      ${styles}
    }`,
  widthMdMediaMixin:
    styles => `@media (max-width: 1024px) and (min-width: 415px) {
      ${styles}
    }`,
  widthXsMediaMixin:
    styles => `@media (max-width: 414px) and (min-width: 0px) {
      ${styles}
    }`,
};

