import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";

// CreateAdventuresForm component for adding adventures
function CreateAdventuresForm() {
  // State variables for categories and selected category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // State variable for form data (name, selected picture, description)
  const [formData, setFormData] = useState({
    name: "",
    selectedPicture: "",
    description: "",
  });

  // Event handler for adventure name input
  const handleAdventureNameChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for adventure description input
  const handleAdventureDescriptionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Effect to update form data when selectedCategory changes
  useEffect(() => {
    selectedCategory &&
      setFormData({
        name: selectedCategory.name,
        selectedPicture: selectedCategory.image_url,
        description: selectedCategory.description,
      });
  }, [selectedCategory]);

  // Form submission handler (not yet implemented)
  const handleSubmit = (e) => {
    e.preventDefault();
    // I'm going to put submission logic here
  };

  // Effect to load adventure categories data from a JSON file
  useEffect(() => {
    fetch("./adventure_categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error loading adventure categories:", error);
      });
  }, []);

  // JSX rendering for the component
  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center mb-5">
        <Form
          onSubmit={handleSubmit}
          className="container justify-content-center"
        >
          {/* Form title */}
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

          {/* Adventure name input */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Adventure name (Optional)"
              value={formData.name}
              onChange={handleAdventureNameChange}
              style={{
                backgroundColor: "#fff",
                color: "#d35504",
                fontWeight: "600",
                borderColor: "#d35504",
                fontSize: "1.3rem",
              }}
            />
          </Form.Group>

          {/* Dropdown for selecting adventure category */}
          <Form.Group className="mb-3">
            <Dropdown>
              <Dropdown.Toggle
                className="container d-flex justify-content-between"
                style={{
                  backgroundColor: "#fff",
                  color: "#d35504",
                  fontWeight: "600",
                  borderColor: "#d35504",
                  fontSize: "1.3rem",
                }}
                varient="primary"
                id="dropdown-basic"
              >
                <span>
                  {selectedCategory
                    ? selectedCategory.name
                    : "Select an Adventure"}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {selectedCategory && (
                    <img
                      style={{ marginLeft: "1rem" }}
                      src={selectedCategory.image_url}
                      alt={selectedCategory.name}
                    />
                  )}
                </span>
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
                {/* Map adventure categories as dropdown options */}
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

          {/* Adventure description input */}
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              placeholder="Few descriptions (Optional)"
              value={formData.description}
              onChange={handleAdventureDescriptionChange}
              style={{
                backgroundColor: "#fff",
                color: "dark-gray",
                fontWeight: "600",
                borderColor: "#d35504",
                fontSize: "1.3rem",
              }}
            />
          </Form.Group>

          {/* Submit button */}
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
