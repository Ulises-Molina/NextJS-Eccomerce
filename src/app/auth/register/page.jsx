"use client"
import { useForm } from "react-hook-form"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function RegisterPage() {

    const {register, handleSubmit, formState : {errors}} = useForm();
    const router = useRouter()
    const [error, setError] = useState(null);

    const onSubmit = handleSubmit(async (data) => {

        if (data.password !== data.confirmPassword) {
            return alert("Las contraseñas no coinciden")
        }

        const res = await fetch('/api/auth/register', {method: 'POST', body: JSON.stringify({username: data.username, email: data.email, password: data.password}), headers: {'Content-Type': 'application/json'}} )
    const resJSON = await res.json()
    if(resJSON.error) {
        return setError(resJSON.error)
    }
    if (res.ok) {
        router.push("/auth/login")
        alert("User created successfully")
    }
    })

    return (
        <div id="gradient" className="flex justify-center items-center w-screen h-screen min-w-96 ">
            <Link className='absolute top-10 left-10' href={"/"}><KeyboardArrowLeftIcon sx={{ fontSize: 50 }}/></Link>
                <div id="gradient" className="border border-gray-300 p-14 rounded shadow-lg">
                {error && <div className="text-center w-full bg-red-300 text-red-800 rounded-lg shadow-sm p-2 mb-5"><p className="">{error}</p></div>}
                    <h3 className="text-lg text-center mb-10">Register</h3>
                <form onSubmit={onSubmit} className="flex flex-col gap-9">

                    <div className="flex flex-col relative">
                    <label htmlFor="username" className="text-sm">Username</label>
                    <input className="p-1 pr-12 rounded border text-letra placeholder:text-xs" type="text" placeholder="John Doe" {...register("username", {required: {value: true,message: "Username is required"}})}/>
                    {errors.username && <p className="text-red-500 absolute -bottom-6">{errors.username.message}</p>}
                    </div>

                    <div className="flex flex-col relative">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input className="p-1 pr-12 rounded border text-letra placeholder:text-xs" type="email" placeholder="Example@gmail.com" {...register("email", {required: {value: true,message: "Email is required"}})} />
                    {errors.email && <p className="text-red-500 absolute -bottom-6">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-sm">Password</label>
                    <input className="p-1 pr-12 rounded border text-letra placeholder:text-xs" type="password" placeholder="*********" {...register("password", {required: {value: true,message: "Password is required"}})}/>
                    {errors.password && <p className="text-red-500 absolute -bottom-6">{errors.password.message}</p>}
                    </div>

                    <div className="flex flex-col relative">
                    <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                    <input className="p-1 pr-12 rounded border text-letra placeholder:text-xs" type="password" placeholder="**********" {...register("confirmPassword", {required: {value: true,message: "Confirm is required"}})}/>
                    {errors.confirmPassword && <p className="text-red-500 absolute -bottom-6">{errors.confirmPassword.message}</p>}
                    </div>

                
                    <button className="bg-primary mt-5 text-letra py-1 w-full self-center rounded shadow-md" type="submit">Register</button>
                    <Link href="/auth/login" className="text-center text-sm hover:cursor-pointer">Do you already have an account? Log in</Link>
                </form>
                </div>
        </div>
    )
}