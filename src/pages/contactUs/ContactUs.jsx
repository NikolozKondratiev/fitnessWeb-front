import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Form from "./Form";

const contactDetails = [
  {
    icon: <ApartmentIcon fontSize="large" className="scale-125 text-red-600" />,
    header: "Address",
    text: "Vaja-pshavela 70, Tbilisi, Georgia",
    id: 1,
  },
  {
    icon: <EmailIcon fontSize="large" className="scale-125 text-red-600" />,
    header: "Email Address",
    text: "info@12roundsboxing.ge",
    id: 2,
  },
  {
    icon: (
      <LocalPhoneIcon fontSize="large" className="scale-125 text-red-600" />
    ),
    header: "Phone Number",
    text: "+995 555 555 555",
    id: 3,
  },
];

function ContactUs() {
  return (
    <div className="flex flex-col justify-between gap-10 px-5 md:px-24 lg:flex-row xl:px-48">
      <div className="w-6/12">
        <h1 className="mb-3 font-main3 text-3xl">Contact Us</h1>
        {contactDetails.map((contactDetail) => (
          <div className="mb-10 ml-4 flex" key={contactDetail.id}>
            <div className="flex items-center gap-5">
              {contactDetail.icon}
              <div className="flex flex-col">
                <h2 className="font font-main2 text-xl">
                  {contactDetail.header}
                </h2>
                <p className="font-main2 text-base text-gray-500">
                  {contactDetail.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Form />
    </div>
  );
}

export default ContactUs;
