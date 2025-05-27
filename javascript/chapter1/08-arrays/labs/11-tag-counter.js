/*
게시글들의 해시태그들을 모아서 각 해시태그가별 몇 번 등장했는지 세어보세요.
*/

const posts = [
  { title: "첫 글", tags: ["#daily", "#fun"] },
  { title: "맛집 후기", tags: ["#food", "#daily"] },
  { title: "운동 루틴", tags: ["#fitness", "#health"] },
];

// TODO: 모든 태그를 하나의 배열로 합친 후, reduce로 개수 세기

// const posts_tags = posts[0].tags.concat(posts[1].tags, posts[2].tags);
// posts_tags.reduce((count, tag) => count);

// flatMap() : 평탄화
const tagList = posts.flatMap((post) => post.tags);

let tagCount = {};

tagList.forEach((tag) => {
  if (tagCount[tag]) {
    tagCount[tag] += 1;
  } else {
    tagCount[tag] = 1;
  }
});

console.log(tagCount);
