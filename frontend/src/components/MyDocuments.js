import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase"; 
function MyDocuments() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      const user = auth.currentUser;

      if (!user) return;

      const q = query(
        collection(db, "extractedTexts"),
        where("user", "==", user.email)
      );

      try {
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setDocuments(docs);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleDownload = (text, index) => {
    const element = document.createElement("a");
    const fileBlob = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = `document-${index + 1}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pastel to-lilac text-indigo">
        <div className="animate-spin text-4xl mb-4">✏️</div>
        <p className="text-lg text-indigo font-lora">Fetching your documents...</p>
      </div>
      );

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel to-lilac px-4 py-8">
      <h2 className="text-violet text-3xl font-bold mb-6 text-center">My Documents</h2>

      {documents.length === 0 ? (
        <p className="text-center text-indigo">You don't have any saved documents yet.</p>
      ) : (
        <div className="grid gap-4 max-w-3xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              className="bg-white shadow rounded-xl p-4 border border-platinum"
            >
              <p className="text-sm text-indigo whitespace-pre-wrap mb-4 break-words max-h-40 overflow-auto">
                {doc.text}
              </p>
              <div className="text-right">
                <button
                  onClick={() => handleDownload(doc.text, index)}
                  className="bg-pastel hover:bg-lime text-indigo font-semibold py-1 px-4 rounded transition-colors"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyDocuments;
