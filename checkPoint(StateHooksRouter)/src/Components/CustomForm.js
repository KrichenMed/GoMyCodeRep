import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as yup from "yup";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomForm() {
  const validationSchema = yup.object().shape({
    movieTitle: yup.string().required(),
    movieDescription: yup.string().required(),
    rating: yup.number().required(),
    trailer: yup.string().required(),
    poster: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      movieTitle: "",
      movieDescription: "",
      rating: 0,
      trailer: "",
      poster: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Row className="justify-content-center">
      <Col md="6">
        <Form className="modern-form" noValidate onSubmit={formik.handleSubmit}>
          <Form.Group controlId="validationFormik101">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              type="text"
              name="movieTitle"
              value={formik.values.movieTitle}
              onChange={formik.handleChange}
              isValid={formik.touched.movieTitle && !formik.errors.movieTitle}
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik102">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="movieDescription"
              value={formik.values.movieDescription}
              onChange={formik.handleChange}
              isValid={
                formik.touched.movieDescription &&
                !formik.errors.movieDescription
              }
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik103">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rating here"
              name="rating"
              value={formik.values.rating}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.rating}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {formik.errors.rating}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik104">
            <Form.Label>Movie Poster Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link here"
              name="poster"
              value={formik.values.poster}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.poster}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {formik.errors.poster}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik105">
            <Form.Label>Trailer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter youtube trailer here"
              name="trailer"
              value={formik.values.trailer}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.trailer}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {formik.errors.trailer}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Add</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default CustomForm;
