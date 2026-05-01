"use client";
// import { authServices } from '@/services/authServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// import { Button } from "@/components/ui/button";
import { faEnvelope, faEye, faLock, faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { Loader2 } from 'lucide-react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinSchema } from '@/validation/signinSchema';
import * as z from "zod"
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';


export default function LoginForm() {
  // const {register, handleSubmit, watch, formState: { errors } } = useForm({
  //   resolver:
  // });
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false)
	const [errMsg, setErrMsg] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  async function onSubmit(loginData: z.infer<typeof signinSchema>) {
    try{
      setIsLoading(true)
      setErrMsg("")
      const res = await signIn("credentials", {
        email:loginData.email,
        password:loginData.password,
        redirect:false,
      })
      if(res?.ok){
        toast.success("Login successful",{
          style:{
            color:'green',
          },
          className: "text-lg p-6 " 
        })
        router.replace("/")
        router.refresh()
      }else{
        // setErrMsg(res?.error??'Wrong email or password!')
        toast.error("Wrong email or password",{
          style:{
            color:"red"
          },
          className: "text-lg p-6 " 
        })
      }
      
    }catch(e){
      // setErrMsg('Try angain or try later')
      // setErrMsg()
    }finally{
      setIsLoading(false)
    }
  }


	// async function onSubmit(data: any) {
	// 	setIsLoading(true)
	// 	const response = {ok:true,}
  //   // await authServices.signIn(data.email,data.password,);
		
	// 	console.log(response); 
		
	// 	if (response ?. ok) {
	// 	router.push("/");
	// 	}else{ 
	// 		setErrMsg("Wrong email or passowrd")
	// 	}
	// 	setIsLoading(false)
	// }
  return (

    <>
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-primary-600">
              Fresh<span className="text-gray-800">Cart</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-600">
            Sign in to continue your fresh shopping experience
          </p>
        </div>
        <div className="space-y-3 mb-6">
          <button
            disabled={isLoading}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
          >
            {
              isLoading ?
                <Loader2  className="animate-spin w-5 h-5" />
                :
                <FontAwesomeIcon icon={faGoogle} className="svg-inline--fa fa-google text-red-500 text-lg" />
            }
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
          >
            <FontAwesomeIcon icon={ faFacebook} className='svg-inline--fa fa-facebook text-blue-600 text-lg' />
            <span className="font-medium text-gray-700">
              Continue with Facebook
            </span>
          </button>
        </div>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">
              OR CONTINUE WITH EMAIL
            </span>
          </div>
        </div>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                {...form.register("email")}
                // autoComplete='off'
                type="email"
                className={`w-full px-4 py-3 pl-12 border-2 rounded-xl transition-all ${form.formState.errors.email?'border-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100':'border-gray-200  focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100'}`}
                placeholder="Enter your email"
              />
              <FontAwesomeIcon icon={faEnvelope } className='svg-inline--fa fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
              {form.formState.errors.email && <span className='text-red-600'>{form.formState.errors.email.message}</span>}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
                >
                Password
              </label>
              <Link
                className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer font-medium"
                href="/forget-password"
                >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                {...form.register("password")}
                type={showPassword?'text':'password'}
                // className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                className={`w-full px-4 py-3 pl-12 border-2 rounded-xl transition-all ${form.formState.errors.password?'border-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100':'border-gray-200  focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100'}`}
                placeholder="Enter your password"
                />
              <FontAwesomeIcon icon={ faLock} className='svg-inline--fa fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
              <button
                title="test"
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={()=>setShowPassword(!showPassword)}
                >
                <FontAwesomeIcon icon={faEye} className="svg-inline--fa fa-eye" />
              </button>
            </div>
                {form.formState.errors.password && <span className='text-red-600'>{form.formState.errors.password.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                className="h-4 w-4 text-primary-600 accent-primary-600 border-2 border-gray-300 rounded focus:ring-primary-500"
                type="checkbox"
                name="rememberMe"
              />
              <span className="ml-3 text-sm text-gray-700">
                Keep me signed in
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl  flex justify-center items-center gap-3 disabled:bg-primary-600/50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {isLoading && <Loader2 className='w-5 h-5 animate-spin'/>}
            Sign In
          </button>
        </form>
        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-gray-600">
            New to FreshCart?
            <Link
              className="text-primary-600 hover:text-primary-700 ms-2 font-semibold cursor-pointer"
              href="/signup"
            >
              Create an account
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
          <div className="flex items-center">
            <FontAwesomeIcon icon={ faLock} className='svg-inline--fa fa-lock mr-1' />
            SSL Secured
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={ faUsers} className='svg-inline--fa fa-users mr-1' />
            50K+ Users
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={ faStar} className='svg-inline--fa fa-star mr-1' />
            4.9 Rating
          </div>
        </div>
      </div>
    </>

  )
}
