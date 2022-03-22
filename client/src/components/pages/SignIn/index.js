import React, { useState } from 'react';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faUserGear, faListCheck, faChartLine, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import AuthService from 'services/authService';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState({
    value: '',
    error: ''
  });

  const [password, setPassword] = useState({
    value: '',
    error: ''
  });

  const validateEmail = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return '';
    } else {
      return 'Please enter a valid email address'
    }
  }
  
  const validatePassword = (value) => {
    if (!!value && value.length >= 3) {
      return '';
    } else {
      return 'Please enter a valid password'
    }
  }

  const setValue = (method, obj, prop, value, validator) => {
    let result = { ...obj, [prop]: value };
    if (!!obj.error) {
      const error = validator(value);
      result = { ...result, error }
    }
    console.log(result)
    method(result);
  }

  const onBlur = (method, obj, validator) => {
    const error = validator(obj.value);
    const result = { ...obj, error }
    method(result);
  }

  const onSubmit = async () => {
    onBlur(setEmail, email, validateEmail)
    onBlur(setPassword, password, validatePassword);
    if(email.value && password.value && !email.error && !password.error) {
      AuthService.signIn({email: email.value, password: password.value})
      .then(() => {
        navigate("/", { replace: true });
      }).catch((err) => {
        setEmail({ value: '', error: 'Please enter a valid email address' });
        setPassword({ value: '', error: 'Please enter a valid password' });
        console.log(err);
      })
    }
  }

  return (
    <div className="h-[calc(100%-250px)]">
      <div className="mx-auto mt-[70px] w-[573px] px-[56px] py-[48px] bg-white">
        <div className="text-[20px] tracking-[0px] leading-[25px] font-semibold">Sign in to your account</div>
        <div className="w-[24px] h-[4px] bg-theme-red mt-[4px]"></div>
        <div className="mt-[24px]">
          <span className="text-theme-red text-[16px] tracking-[0px] leading-[18px]">*</span>Email Address
        </div>
        <div className={"border-gray-300 focus-visible:border-gray-900 " + (!!email.error ? "text-theme-red border-theme-red" : "text-black")}>
          <input
            onChange={(e) => setValue(setEmail, email, 'value', e.target.value, validateEmail)}
            value={email.value}
            onBlur={() => onBlur(setEmail, email, validateEmail)}
            className="mt-[6px] outline-0 text-[18px] tracking-[0px] leading-[22px] px-[16px] py-[8px] w-full border border-inherit"
            type="text"
          />
          <div className="text-[14px] tracking-[0px] leading-[16px]">
            {email.error}
          </div>
        </div>
        <div className="mt-[19px]">
          <span className="text-theme-red text-[16px] tracking-[0px] leading-[18px]">*</span>Password
          </div>
        <div className={"border-gray-300 focus-visible:border-gray-900 " + (!!password.error ? "text-theme-red border-theme-red" : "text-black")}>
          <input
            onChange={(e) => setValue(setPassword, password, 'value', e.target.value, validatePassword)}
            value={password.value}
            onBlur={() => onBlur(setPassword, password, validatePassword)}
            className="mt-[6px] outline-0 text-[18px] tracking-[0px] leading-[22px] px-[16px] py-[8px] w-full border border-inherit"
            type="password"
          />
          <div className="text-[14px] tracking-[0px] leading-[16px]">
            {password.error}
          </div>
        </div>
        <button
          disabled={(!!email.error || !!password.error) || (!email.value || !password.value)}
          className="mt-[32px] bg-theme-red disabled:bg-[#BFBFBF] text-white text-[13px] tracking-[1.3px] leading-[16px] text-center font-semibold py-[12px] rounded-[3px] w-full cursor-pointer"
          onClick={() => onSubmit()}
        >
          SIGN IN
          </button>
      </div>
    </div>
  )
}

export default SignIn;