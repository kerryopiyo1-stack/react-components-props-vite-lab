import Article from "./Article";

function ArticleList(props) {
  const articles = props.posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });

  return <main>{articles}</main>;
}

export default ArticleList;