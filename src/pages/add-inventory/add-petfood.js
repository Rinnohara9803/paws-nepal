import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddPetFood = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const fileList = Array.from(event.currentTarget.files);
    const selectedImages = fileList.map((file) => URL.createObjectURL(file));
    setImages(selectedImages);
  };

  const initialValues = {
    productName: "",
    category: "Dogs",
    brand: "",
    weight: "",
    shortDescription: "",
    protein: "",
    fat: "",
    fiber: "",
    moisture: "",
    ingredients: "",
    images: images,
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    category: Yup.string().required("Category is required"),
    brand: Yup.string().required("Brand is required"),
    weight: Yup.string().required("Weight is required"),
    shortDescription: Yup.string().required("Short description is required"),
    protein: Yup.string().required("Protein is required"),
    fat: Yup.string().required("Fat is required"),
    fiber: Yup.string().required("Fiber is required"),
    moisture: Yup.string().required("Moisture is required"),
    ingredients: Yup.string().required("Ingredients are required"),
    images: Yup.array().min(1, "At least one image is required").nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // You can handle form submission here
    resetForm(); // Reset the form after submission
    setImages([]);
  };

  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-2xl font-bold mb-4">Add Pet Food</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className=" w-full md:w-2/3 lg:w-1/2">
            <div className="mb-5 flex flex-col items-start w-full">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="productName"
              >
                Product Name
              </label>
              <Field
                placeholder="Enter product name"
                type="text"
                name="productName"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="productName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="category"
              >
                Category
              </label>
              <Field
                as="select"
                name="category"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              >
                <option value="Dogs">Dogs</option>
                <option value="Cats">Cats</option>
                <option value="Birds">Birds</option>
                <option value="Fishes">Fishes</option>
                <option value="Others">Others</option>
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="brand"
              >
                Brand
              </label>
              <Field
                placeholder="Enter brand"
                type="text"
                name="brand"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="brand"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="weight"
              >
                Weight (in grams)
              </label>
              <Field
                placeholder="Enter weight"
                type="number"
                name="weight"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="weight"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="shortDescription"
              >
                Short Description
              </label>
              <Field
                as="textarea"
                rows={5}
                placeholder="Enter short description"
                type="text"
                name="shortDescription"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="shortDescription"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-row justify-between items-center gap-x-5">
              <div className="mb-5 flex flex-col items-start w-full">
                <label
                  className="mb-2 font-semibold tracking-wider text-lg"
                  htmlFor="protein"
                >
                  Protein
                </label>
                <Field
                  placeholder="Protein %"
                  type="text"
                  name="protein"
                  className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
                />
                <ErrorMessage
                  name="protein"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-5 flex flex-col items-start w-full">
                <label
                  className="mb-2 font-semibold tracking-wider text-lg"
                  htmlFor="fat"
                >
                  Fat
                </label>
                <Field
                  placeholder="Fat %"
                  type="text"
                  name="fat"
                  className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
                />
                <ErrorMessage
                  name="fat"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-5">
              <div className="mb-5 flex flex-col items-start w-full">
                <label
                  className="mb-2 font-semibold tracking-wider text-lg"
                  htmlFor="fiber"
                >
                  Fiber
                </label>
                <Field
                  placeholder="Fiber %"
                  type="text"
                  name="fiber"
                  className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
                />
                <ErrorMessage
                  name="fiber"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-5 flex flex-col items-start w-full">
                <label
                  className="mb-2 font-semibold tracking-wider text-lg"
                  htmlFor="moisture"
                >
                  Moisture
                </label>
                <Field
                  placeholder="Moisture %"
                  type="text"
                  name="moisture"
                  className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
                />
                <ErrorMessage
                  name="moisture"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col items-start w-full">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="ingredients"
              >
                Ingredients
              </label>
              <Field
                as="textarea"
                rows={6}
                placeholder="Enter ingredients"
                type="text"
                name="ingredients"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="ingredients"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="images"
              >
                Images
              </label>
              <input
                id="images"
                name="images"
                type="file"
                onChange={handleImageChange}
                multiple // Allow multiple file selection
                accept="image/*" // Allow only image files
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full text-zinc-500"
              />
              <ErrorMessage
                name="images"
                component="div"
                className="text-red-500"
              />
            </div>
            {/* Display selected images */}
            <div className="mt-4 flex flex-row flex-wrap gap-x-4 gap-y-4">
              {images.map((imageUrl, index) => (
                <a
                  key={index}
                  href={imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`tag ${index + 1}`}
                    className="w-32 h-32 rounded object-cover border border-solid border-white"
                  />
                </a>
              ))}
            </div>
            <div className="flex flex-row justify-end">
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-3 rounded mt-8"
              >
                Add Pet Food
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetFood;
