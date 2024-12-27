function TodoItem1() {
  let TodoName = "The next task..";
  let TodoDate = "02/02/2020";

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
