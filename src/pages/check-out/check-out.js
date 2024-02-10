import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";

const CheckOut = () => {
  const [selectedPm, setSelectedPm] = useState(null);

  const paymentMethods = ["Cash on Delivery", "E-sewa", "Khalti"];
  return (
    <div className="flex flex-col items-start px-10 md:px-36 w-full">
      <Formik
        initialValues={{
          houseNumber: "",
          streetName: "",
          city: "",
          district: "",
          zone: "",
          phoneNumber: "",
          paymentNumber: "",
          paymentPin: "",
        }}
        validationSchema={Yup.object().shape({
          houseNumber: Yup.string().required("House Number is required"),
          streetName: Yup.string().required("Street Name is required"),
          city: Yup.string().required("City is required"),
          district: Yup.string().required("District is required"),
          zone: Yup.string().required("Zone is required"),
          phoneNumber: Yup.string()
            .required("Phone Number is required")
            .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
          paymentNumber: Yup.string()
            .required("Number is required")
            .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
          paymentPin: Yup.string()
            .required("MPIN is required")
            .matches(/^\d{4}$/, "MPIN must be 4 digits"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full md:w-2/3 lg:w-1/2">
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-xl tracking-wider mt-6 mb-5">
                {" "}
                Secure CheckOut
              </p>
              <p className="font-semibold text-lg tracking-wider mt-6 mb-5">
                {" "}
                Shipping Details
              </p>
              <div className="flex flex-row items-start justify-between gap-x-5 w-full">
                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="houseNumber" className="text-zinc-500">
                    House Number
                  </label>
                  <Field
                    placeholder="eg. AH-192"
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="houseNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="streetName" className="text-zinc-500">
                    Street Name
                  </label>
                  <Field
                    placeholder="eg. Dhobidhara"
                    type="text"
                    id="streetName"
                    name="streetName"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="streetName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-between gap-x-5 w-full">
                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="city" className="text-zinc-500">
                    City
                  </label>
                  <Field
                    placeholder="eg. Kamalpokhari"
                    type="text"
                    id="city"
                    name="city"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="district" className="text-zinc-500">
                    District
                  </label>
                  <Field
                    placeholder="eg. Kathmandu"
                    type="text"
                    id="district"
                    name="district"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="district"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-between gap-x-5 w-full">
                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="zone" className="text-zinc-500">
                    Zone
                  </label>
                  <Field
                    placeholder="eg. Bagmati"
                    type="text"
                    id="zone"
                    name="zone"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="zone"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="phoneNumber" className="text-zinc-500">
                    Contact Number
                  </label>
                  <Field
                    placeholder="eg. 980#######"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    pattern="[0-9]{10}"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>

            <p className="font-semibold text-lg tracking-wider mt-8 mb-5">
              {" "}
              Payment Method
            </p>

            {paymentMethods.map((pm) => {
              return (
                <div
                  onClick={() => {
                    setSelectedPm(pm);
                  }}
                  className={` ${
                    selectedPm === pm ? "shadow-sm shadow-white" : ""
                  } flex flex-row items-center justify-between w-full bg-zinc-900 px-3 py-3 rounded-lg border border-solid border-zinc-700 mb-4 cursor-pointer`}
                >
                  <div className="flex flex-row items-center gap-x-4">
                    {selectedPm === pm && (
                      <FontAwesomeIcon
                        className="text-xl text-red-800"
                        icon={faCircleDot}
                      ></FontAwesomeIcon>
                    )}
                    {selectedPm !== pm && (
                      <FontAwesomeIcon
                        className="text-xl text-zinc-700"
                        icon={faCircle}
                      ></FontAwesomeIcon>
                    )}
                    <p> {pm} </p>
                  </div>
                </div>
              );
            })}

            {/* online payment */}
            {(selectedPm === "E-sewa" || selectedPm === "Khalti") && (
              <div className="flex flex-row items-start justify-between gap-x-5 w-full">
                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="paymentNumber" className="text-zinc-500">
                    {selectedPm} Number
                  </label>
                  <Field
                    placeholder="eg. 980#######"
                    type="tel"
                    id="paymentNumber"
                    name="paymentNumber"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="paymentNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col justify-between items-start gap-y-1 w-full tracking-wider my-2">
                  <label htmlFor="paymentPin" className="text-zinc-500">
                    MPIN
                  </label>
                  <Field
                    placeholder="eg. 9803"
                    type="tel"
                    id="paymentPin"
                    name="paymentPin"
                    className="rounded-md px-3 py-2 bg-zinc-800 w-full"
                  />
                  <ErrorMessage
                    name="paymentPin"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className=" tracking-wider bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-4 transition-all duration-700 ease-in"
            >
              Place Order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckOut;