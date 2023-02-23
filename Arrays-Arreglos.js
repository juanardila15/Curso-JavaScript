const posts = [ {
  id: 1,
  litle: 'Mi primer post',
  tags: ['javascript', 'webdevelopment'],
}, {
  id: 2,
  title: 'Mi experencia con React',
  image: 'https://img.com/2',
  tags: ['javascript', 'webdevelopment', 'react'],
}, {
  id: 3,
  title: 'Por qué dejé Angular',
  image: ['javascript', 'webdevelopment', 'angular'],
}]
post.reduce((alltags, post) => {
  return [...allTags, ...post.tags]
}, []).filter((post, index, self) => index === self.index0f(post))
