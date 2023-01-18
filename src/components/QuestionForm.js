function handleSubmit(event,props) {
  event.preventDefault();
  // console.log(formData);
  const newQuestion = {
   
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