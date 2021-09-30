const api = {
    root: "https://api.hashnode.com/",
    webViewUrl: "https://hashnode.com/post/",
};

const queryConstructor =
`
query getStories($type:FeedType!,$page:Int!){
storiesFeed(type:$type,page:$page){
    title,
  author{
    name,
    coverImage,
    photo,
  },
  cuid,
  slug,
  dateAdded,
  brief,
  coverImage,
  totalReactions,
  responseCount
  }
}
`;

const typeOfArticles = {
    featured: 'FEATURED',
    recent: 'NEW',
    relavent: 'COMMUNITY'
}

export {
    api,
    queryConstructor,
    typeOfArticles
};