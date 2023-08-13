"use client";
import React, { useEffect, useState } from "react";

export default function OtpInput({ maxLength, setState }) {
  const [otpRefs, setOtpRefs] = useState([]);

  useEffect(() => {
    let addRefs = [];
    Array(maxLength)
      .fill()
      .map((_, index) => {
        addRefs[index] = React.createRef();
      });
    setOtpRefs(addRefs);
  }, []);

  const onChange = (text, name) => {
    if (text.length === 1) {
      if (name + 1 >= maxLength) {
        otpRefs[name].current.blur();
        setState((prev) => prev + text);
        return;
      }
      otpRefs[name + 1].current.focus();
      setState((prev) => prev + text);
    }
    if (text.length === 0) {
      if (name - 1 < 0) {
        otpRefs[name].current.focus();
        setState((prev) => prev.slice(0, -1));
        return;
      }
      otpRefs[name - 1].current.focus();
      setState((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="flex mx-auto gap-8 my-5">
      {otpRefs.map((ref, key) => {
        return (
          <div key={key}>
            <input
              maxLength={1}
              name={key}
              onChange={(e) => onChange(e.target.value, key)}
              className="w-10 h-10 border-violet-600 border rounded-md shadow-md text-center"
              type="number"
              ref={ref}
            />
            {key !== maxLength - 1 && <div className="mx-1" />}
          </div>
        );
      })}
    </div>
  );
}
