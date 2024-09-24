import React, { useState, useEffect } from "react";
import { db, storage } from "../../firebaseconfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { Link } from "react-router-dom";

const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, "Articles"));
      const articlesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setArticles(articlesData);
    };
    fetchArticles();
  }, []);

  return (
    <main
      className="flex flex-col justify-center items-center gap-10"
      id="Article"
    >
      <div className="border-b-4 w-full text-center mt-28">
        <h1 className="text-3xl font-bold">Articles</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-xl shadow-black/50 overflow-hidden flex flex-col "
          >
            <div className="relative">
              <img
                src={article.posterImage}
                alt={article.title}
                className="w-full h-[200px] object-cover"
              />
            </div>

            <div className="p-4 flex flex-col space-y-2">
              <p className="text-Paragraph text-sm mt-2 flex-grow">
                Written by <span className="font-medium">{article.author}</span>{" "}
                on <span className="">{article.date}</span>
              </p>
              <h1 className="text-lg font-semibold text-Highlight uppercase">
                {article.title}
              </h1>
              <div className="text-Paragraph text-sm mt-2 line-clamp-2">
                {stripHtml(article.content)}
              </div>
            </div>

            <Link
              to={`/detail/${article.id}`}
              className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-tl-full self-end"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Article;
