import { Form, redirect } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Signup</h1>
      <div className="row d-flex justify-content-center">
        <Form className="col-8" method="post">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              name="username"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);
  const requestApi = await fetch('http://localhost:3000/api/v1/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (requestApi.ok) {
    return redirect('/');
  }
};
