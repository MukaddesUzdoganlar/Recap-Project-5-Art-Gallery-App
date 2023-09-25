export default function CommentForm(onSubmitComment) {
  function handleSubmitComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmitComment}>
        <label htmlFor="comment">Comment:</label>
        <textarea
          name="comment"
          id="comment"
          rows="5"
          placeholder="write a comment"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
