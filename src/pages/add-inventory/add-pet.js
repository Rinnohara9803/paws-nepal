import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddPet = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const fileList = Array.from(event.currentTarget.files);
    const selectedImages = fileList.map((file) => URL.createObjectURL(file));
    setImages(selectedImages);
  };

  const initialValues = {
    petName: "",
    category: "Dogs",
    breed: "",
    age: "",
    sex: "Male",
    weight: "",
    medicalInfo: "",
    careInstructions: "",
    images: images,
  };

  const validationSchema = Yup.object().shape({
    petName: Yup.string().required("Pet name is required"),
    category: Yup.string().required("Category is required"),
    breed: Yup.string().required("Breed is required"),
    age: Yup.number().required("Age is required"),
    sex: Yup.string().required("Sex is required"),
    weight: Yup.number().required("Weight is required"),
    medicalInfo: Yup.string().required("Medical Info is required"),
    careInstructions: Yup.string().required("Care Instructions are required"),
    images: Yup.array().min(1, "At least one image is required").nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // You can handle form submission here
    resetForm(); // Reset the form after submission
  };

  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-2xl font-bold mb-4">Add Pet</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className=" w-full md:w-2/3 lg:w-1/2">
            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="petName"
              >
                Pet Name
              </label>
              <Field
                placeholder="Enter name"
                type="text"
                name="petName"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="petName"
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

            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="breed"
              >
                Breed
              </label>
              <Field
                placeholder="Enter breed"
                type="text"
                name="breed"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="breed"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="age"
              >
                Age
              </label>
              <Field
                placeholder="Enter age"
                type="number"
                name="age"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="sex"
              >
                Sex
              </label>
              <Field
                as="select"
                name="sex"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              >
                <option value="Dogs">Male</option>
                <option value="Cats">Female</option>
              </Field>
              <ErrorMessage
                name="sex"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="weight"
              >
                Weight ( In Kg )
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

            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="medicalInfo"
              >
                Medical Info
              </label>
              <Field
                as="textarea"
                rows={6}
                placeholder="Enter medical info"
                type="text"
                name="medicalInfo"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="medicalInfo"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-5 flex flex-col items-start w-full ">
              <label
                className="mb-2 font-semibold tracking-wider text-lg"
                htmlFor="careInstructions"
              >
                Care Instructions
              </label>
              <Field
                as="textarea"
                rows={6}
                placeholder="Enter Care Instructions"
                type="text"
                name="careInstructions"
                className="bg-zinc-800 px-3 py-3 rounded-lg w-full"
              />
              <ErrorMessage
                name="careInstructions"
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
                Add Pet
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPet;
