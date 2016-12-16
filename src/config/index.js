let actualRouterPath = "/"

/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
/* eslint-enable */
  actualRouterPath = "/public/";
}

export const RouterPaths = {
  ROOT: actualRouterPath,
  STREAM: '/streamFinder'
};

// export const Paths = {
//   ROOT: RouterPaths.ROOT,
// };

export const ActionTypes = {
  GET_YEAR: 'GET_YEAR'
}
