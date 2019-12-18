import algoliasearch  from 'algoliasearch'
const ALGOLIA_APP_ID = "DYYV2OAQX1";
const ALGOLIA_ADMIN_KEY = "f0ed005b1ac8cf8306c88964067dde5b";
const ALGOLIA_INDEX_NAME = 'Smile';

export const client = algoliasearch(ALGOLIA_APP_ID,ALGOLIA_ADMIN_KEY)
export const index = client.initIndex(ALGOLIA_INDEX_NAME)