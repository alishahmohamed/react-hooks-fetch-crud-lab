function handleSubmit(event) {
  event.preventDefault();
  // console.log(formData);
  const newQuestion = {
    prompt: formData.prompt,
    answers: [formData.answer1, formData.answer2, formData.answer3, formData.answer4],
    correctIndex: parseInt(formData.correctIndex),
  };
  fetch("http://localhost:4000/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newQuestion),
  }).then((r) => {
    if (r.ok) {
      r.json().then((newQuestion) => {
        props.handleAddQuestion(newQuestion);
      });
    }
  }
  );


}

return 
