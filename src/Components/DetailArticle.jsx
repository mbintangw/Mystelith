import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig"; // Adjust the import path if necessary
import { AiFillHome, AiOutlineArrowDown } from "react-icons/ai";

const DetailArticle = () => {
  const { id } = useParams(); // Get the article ID from URL parameters
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "Articles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          setError("No such document!");
        }
      } catch (err) {
        console.error("Error fetching article: ", err); // Log the error to console
        setError("Error fetching article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="flex flex-col justify-center items-center mt-20">
      <div className="container flex flex-col justify-center items-center text-justify gap-10 px-10 md:px-20">
        {article ? (
          <div className="space-y-10">
            <div className="space-y-5">
              <h1 className="text-3xl text-center font-bold">
                {article.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            <div>
              <p>
                <strong>Date:</strong> {article.date}
              </p>
              <p>
                <strong>Author:</strong> {article.author}
              </p>
            </div>
          </div>
        ) : (
          <p>No article found</p>
        )}
        <button
          className="fixed bottom-24 right-5 w-[60px] h-[60px] bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700"
          onClick={scrollToBottom}
        >
          <AiOutlineArrowDown size={25} />
        </button>
        <button
          className="w-[200px] h-[50px] border-4 rounded-full bg-black text-white mb-10"
          onClick={() => navigate(-1)}
        >
          Back to Articles
        </button>
        <button
          className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700"
          onClick={() => navigate(-1)}
        >
          <AiFillHome size={30} />
        </button>
      </div>
    </main>
  );
};

export default DetailArticle;
