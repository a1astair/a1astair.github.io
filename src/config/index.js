let actualRouterPath = "/"

/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
/* eslint-enable */
  actualRouterPath = "/public/";
}

export const RouterPaths = {
  ROOT: actualRouterPath,
};

export const Paths = {
  ROOT: RouterPaths.ROOT,
};