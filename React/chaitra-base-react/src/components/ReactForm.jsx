import React from 'react'
import { useForm } from "react-hook-form"
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ReactForm() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm() // UI Optimization: Removed unused 'errors' state lookup

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Form data:", data);
        toast.success("Form submitted successfully!");
    }

    const onInvalid = (formErrors) => {
        Object.values(formErrors).forEach((error) => {
            if (error?.message) {
                toast.error(error.message);
            }
        })
    }

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true} 
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <h2>React Form</h2>
            <form
                className='flex flex-col gap-2 py-2 px-1 items-center w-70 bg-amber-300'
                onSubmit={handleSubmit(onSubmit, onInvalid)}>

                <label htmlFor="firstName">First Name:</label>
                <input 
                    className='border-blue-400 border w-60 px-1'
                    {...register('firstName', {
                        required: "First name is required!!",
                        minLength: { value: 5, message: "Minimum length is 5!!" },
                        maxLength: { value: 10, message: "Maximum length is 10!!" }
                    })}
                />

                <label htmlFor="middleName">Middle Name:</label>
                <input 
                    className='border-blue-400 border w-60 px-1'
                    {...register('middleName', {
                        required: "Middle name is required!!",
                        pattern: { value: /^[A-Za-z]+$/i, message: "Middle name must contain letters only!!" }
                    })}
                />

                <label htmlFor="age">Age:</label>
                <input 
                    type="number" 
                    className='border-blue-400 border w-60 px-1'
                    {...register('age', { 
                        required: "Age is required!!",
                        min: { value: 18, message: "You must be at least 18 years old!!" } 
                    })}
                />

                <input
                    className='bg-amber-100 cursor-pointer rounded w-30 disabled:opacity-50 mt-2'
                    disabled={isSubmitting}
                    value={isSubmitting ? "Submitting..." : "Submit"}
                    type="submit" 
                />
            </form>
        </>
    )
}

export default ReactForm
