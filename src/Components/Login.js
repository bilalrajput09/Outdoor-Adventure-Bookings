const Login = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Login</h1>
      <div className="row d-flex justify-content-center">
        <form className="col-8">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
