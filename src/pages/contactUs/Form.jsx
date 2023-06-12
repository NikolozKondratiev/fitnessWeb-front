import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useState, React } from "react";

function Form() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      textArea: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Your name is required")
        .min(2, "Please enter a valid name")
        .max(20, "Please enter a valid name"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{9,16}$/, "Phone number is not valid")
        .required("Phone number is required"),
      textArea: Yup.string().required("This field is required"),
    }),
    onSubmit: () => {
      sendData();
    },
  });

  const inputVals = [
    {
      id: 1,
      name: "name",
      placeHolder: "Your Name",
      value: formik.values.name,
    },
    {
      id: 2,
      name: "email",
      placeHolder: "Email Address",

      value: formik.values.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      placeHolder: "Phone Number",
      value: formik.values.phoneNumber,
    },
  ];

  let url = "http://localhost:3005/createUser";

  const sendData = () => {
    axios
      .post(url, formik.values)
      .then((res) => {
        setIsSuccessful(true);
        console.log("userData sent successfully:" + res);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="flex w-full flex-col lg:w-5/12">
      <h1 className="font-main3 text-3xl">How We Can Help You...</h1>

      {isSuccessful ? (
        <div className="mt-3 flex h-12 w-full items-center rounded-md border bg-green-100 px-2 pl-5 font-main2 text-base lg:w-xs">
          <p className="font-main2 text-base text-green-800">
            <strong>Success!</strong> Your message has been sent to us.
          </p>
        </div>
      ) : (
        error && (
          <div className="mt-3 flex h-12 w-full items-center rounded-md border bg-red-100 px-2 pl-5 font-main2 text-base lg:w-xs">
            <p className="font-main2 text-base text-red-800">
              <strong>Connection error!</strong> Something went wrong.
            </p>
          </div>
        )
      )}

      {inputVals.map((input) => {
        const hasError =
          formik.touched[input.name] && formik.errors[input.name];
        return (
          <div key={input.id}>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={input.value}
              placeholder={input.placeHolder}
              name={input.name}
              className={`mt-3 h-12 w-full rounded-md border bg-gray-50 px-2 pl-5 font-main2 text-base lg:w-xs ${
                hasError ? "border-red-600" : "none"
              }`}
            />
            {hasError ? (
              <p className="ml-0.5 mt-0.5 font-main2 text-sm text-red-700">
                {formik.errors[input.name]}
              </p>
            ) : null}
          </div>
        );
      })}
      <textarea
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="How can we help you?"
        name="textArea"
        value={formik.textArea}
        className={`mt-3 h-48 w-full rounded-md border bg-gray-50 px-2 pl-5 font-main2 text-base lg:w-xs ${
          formik.touched.textArea && formik.errors.textArea
            ? "border-red-600"
            : "none"
        }`}
      ></textarea>
      {formik.touched.textArea && formik.errors.textArea ? (
        <p className="ml-0.5 mt-0.5 font-main2 text-sm text-red-700">
          {formik.errors.textArea}
        </p>
      ) : null}
      <button
        type="submit"
        onClick={formik.handleSubmit}
        className="mt-3 w-5/12 cursor-pointer bg-red-700 px-6 py-3 font-main3 text-base text-white duration-200 ease-in hover:bg-red-600 md:w-36"
      >
        SEND MESSAGE
      </button>
    </div>
  );
}

export default Form;
