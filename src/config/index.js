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

export const ActionTypes = {
  GET_YEAR: 'GET_YEAR'
}

export const LOAD_TEAMS_WEB_SERVICE_URL = "/stream/api/sport"
export const GET_LINK_WEB_SERVICE_URL = "/stream/api"
