import React, { useState } from "react";
import "../styles/Forum.css"; 

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (questionText.trim()) {
      setQuestions([...questions, { id: questions.length + 1, text: questionText, responses: [] }]);
      setQuestionText("");
    }
  };

  const handleResponse = (index, responseText) => {
    if (responseText.trim()) {
      const newQuestions = [...questions];
      newQuestions[index].responses.push(responseText);
      setQuestions(newQuestions);
    }
  };

  return (
    <div className="forum-container">
      <h2>Forum de discussion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Posez votre question..."
          className="input-field"
        />
        <button type="submit" className="submit-button">Poser la question</button>
      </form>

      <h3>Questions posées :</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={question.id} className="question">
            <p>{question.text}</p>
            <input
              type="text"
              placeholder="Répondez à cette question..."
              className="input-field"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleResponse(index, e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <ul>
              {question.responses.map((response, respIndex) => (
                <li key={respIndex} className="response">{response}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
