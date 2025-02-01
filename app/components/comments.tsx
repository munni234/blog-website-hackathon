"use client";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const commentsave = localStorage.getItem("comments");

    if (commentsave) {
      setComments(JSON.parse(commentsave));
    }
  }, []);

  const addComments = () => {
    if (comment.trim() !== " ") {
      const updateComments = [...comments, comment];
      setComments(updateComments);

      setComment("");
      localStorage.setItem("comments", JSON.stringify(updateComments));
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>

        {/* Comment Input */}
        <div className=" items-start mb-4">
          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(f) => setComment(f.target.value)}
            className="flex-grow border w-[400px] rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
          <br />
          <button
            className="bg-green-500 w-[300px] ml-11 text-gray-800 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white"
            onClick={addComments}
          >
            Add comments
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {/* Comment Item */}
          <div className="flex gap-4 items-start">
            <div className="flex-grow">
           
              <p className="text-gray-700">
                {comments.length === 0 ? (
                  <p>No comments yet.</p>
                ) : (
                  <ul>
                    {comments.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;