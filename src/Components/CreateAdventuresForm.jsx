import React, { useState, useEffect } from "react";
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

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Load adventure categories data from JSON file
  useEffect(() => {
    fetch("./adventure_categories.json") // Replace with the correct path
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error loading adventure categories:", error);
      });
  }, []);

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
              placeholder="Name your adventure (Optional)"
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
                {selectedCategory
                  ? selectedCategory.name
                  : "Select an Adventure"}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  style={{ marginLeft: "1rem" }}
                  src={selectedCategory.image_url}
                  alt={selectedCategory.image_alt}
                />
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
                {categories.map((category) => (
                  <Dropdown.Item
                    key={category.name}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <img src={category.image_url} alt={category.image_alt} />
                    &nbsp;{category.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              placeholder="Few descriptions (Optional)"
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
