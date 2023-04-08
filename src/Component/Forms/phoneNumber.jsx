import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'


function PhonenumberFrom() {
    const [value, setValue] = useState()
    return (
      <PhoneInput
        className="form-control form-control-lg"
        value={value}
        onChange={setValue}/>
    )
}

export default PhonenumberFrom;
