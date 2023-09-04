import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";

function CreateAdventuresForm() {
  const [formData, setFormData] = useState({
    name: "",
    selectedPicture: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownSelect = (selectedPicture) => {
    setFormData({
      ...formData,
      selectedPicture,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center mb-5">
        <Form
          onSubmit={handleSubmit}
          className="container justify-content-center"
        >
          <Form.Label
            className="text-center container"
            style={{
              backgroundColor: "#fff",
              color: "#d35504",
              borderColor: "#d35504",
              fontSize: "4rem",
              marginTop: "-80%",
              marginBottom: "2rem",
            }}
          >
            Add Adventures
          </Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name your adventure"
              value={formData.name}
              onChange={handleChange}
              style={{
                backgroundColor: "#fff",
                color: "#d35504",
                fontWeight: "600",
                borderColor: "#d35504",
                fontSize: "1.3rem",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Dropdown>
              <Dropdown.Toggle
                className="container"
                style={{
                  backgroundColor: "#fff",
                  color: "inherit",
                  fontWeight: "600",
                  borderColor: "#d35504",
                  fontSize: "1.3rem",
                }}
                varient="primary"
                id="dropdown-basic"
              >
                {formData.selectedPicture ? (
                  <>
                    <img
                      src="/log-out.png"
                      alt="My Image"
                      style={{ marginRight: "1rem" }}
                    />
                    {formData.selectedPicture}
                  </>
                ) : (
                  <>Select a suitable image.</>
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="container"
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                  fontWeight: "600",
                  borderColor: "#d35504",
                  fontSize: "1.3rem",
                }}
              >
                <Dropdown.Item
                  onClick={() => handleDropdownSelect("Option - 1")}
                >
                  <img src="/log-out.png" alt="My Image" />
                  &nbsp; Option 1
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDropdownSelect("Option - 2")}
                >
                  <img src="/log-out.png" alt="My Image" />
                  &nbsp; Option 2
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDropdownSelect("Option - 3")}
                >
                  <img src="/log-out.png" alt="My Image" />
                  &nbsp; Option 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              placeholder="Few descriptions"
              value={formData.message}
              onChange={handleChange}
              style={{
                backgroundColor: "#fff",
                color: "#d35504",
                fontWeight: "600",
                borderColor: "#d35504",
                fontSize: "1.3rem",
              }}
            />
          </Form.Group>
          <Button
            className="container"
            type="submit"
            variant="primary"
            style={{
              borderColor: "#d35504",
              backgroundColor: "#d35504",
              fontSize: "2rem",
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateAdventuresForm;
