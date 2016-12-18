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
  GET_YEAR: 'GET_YEAR',
  GET_TEAMS: 'GET_TEAMS',
  GET_LINK: 'GET_LINK',

}

export const website = `https://www.a1astair.ca`

export const GET_TEAMS_WEB_SERVICE_URL = (subreddit) => `${website}/stream/api/sport?subreddit=${subreddit}`
export const GET_LINK_WEB_SERVICE_URL = (subreddit, team) => `${website}/stream/api?subreddit=${subreddit}&team=${team}`
