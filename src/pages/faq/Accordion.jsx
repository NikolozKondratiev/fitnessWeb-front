import React, { useState, useRef } from "react";
import QA from "../../jsonData/QA.json";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  const getContentHeight = (id) => {
    return contentRefs.current[id - 1].scrollHeight + "px";
  };

  return (
    <div className="relative h-auto w-full">
      {QA.map((qa) => (
        <div
          key={qa.id}
          className="relative mb-1 flex w-full flex-col border border-gray-300 bg-gray-100"
        >
          <div
            onClick={() => handleToggle(qa.id)}
            className="flex h-11 cursor-pointer items-center justify-start px-5"
          >
            <h1 className="font-main2 text-base font-semibold text-black">
              {qa.question}
            </h1>
          </div>
          <div
            className="overflow-hidden bg-gray-50 delay-100 duration-200 ease-in"
            style={{
              height:
                qa.id === activeAccordion ? getContentHeight(qa.id) : "0px",
            }}
          >
            <p
              ref={(ref) => (contentRefs.current[qa.id - 1] = ref)}
              className="px-5 pb-10 pt-5 font-main2 text-gray-500"
            >
              {qa.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
