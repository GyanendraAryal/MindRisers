import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function reactform() {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()
    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        console.log("clicked!!!");
        toast.success('Form submitted sucessfully', {
            position: "top-right", autoClose: 4000,
            hideProgressBar: false, closeOnClick: false,
            pauseOnHover: true, draggable: true,
            progress: undefined, theme: "light",
            transition: Bounce,
        })
    }

    const onError = (formErrors) => {
        Object.values(formErrors).forEach((error) => {
            if (error.ref.name === 'age' && error.type === 'max') {
                toast.error(`Age cannot be ${watch('age')}(Max is 100)`)
            } else {
                toast.error(error.message)
            }
        })
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className='h-screen w-full fixed inset-0 bg-black/50'></div>
            <form
                className='flex flex-col rounded m-auto mt-50 relative z-10 bg-amber-200 w-70 gap-3 py-6 px-4'
                onSubmit={handleSubmit(onSubmit, onError)}>
                <div className='flex flex-col gap-1 justify-center'>
                    {/* {errors.firstName && <span className='text-red-600'>{errors.firstName.message}</span>} */}
                    {/* {errors.firstName && toast.error(errors.firstName.message, {
                        position: "bottom-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })} */}
                    <label htmlFor="firstName">FirstName: <span className="text-red-500">*</span></label>
                    <input
                        id='firstName'
                        {...register('firstName', {
                            required: "First Name is required!!",
                            minLength: { value: 3, message: "Must be atleast 3 characters" },
                        })}
                        className='border' />

                </div>
                <div className='flex flex-col gap-1 justify-center'>
                    {/* {errors.middleName && <span className='text-red-600'>{errors.middleName.message}</span>} */}
                    <label htmlFor="middleName">MiddleName:</label>
                    <input
                        id='middleName'
                        {...register('middleName', {
                            // required: "Midlle Name is required!!",
                            minLength: { value: 3, message: "Must be atleast 3 characters" }
                        })}
                        className='border' />
                </div>
                <div className='flex flex-col gap-1 justify-center'>
                    {/* {errors.lastName && <span className='text-red-600'>{errors.lastName.message}</span>} */}
                    <label htmlFor="lastName">LastName: <span className="text-red-500">*</span></label>
                    <input
                        id='lastName'
                        {...register('lastName', {
                            required: "Last Name is required!!",
                            minLength: { value: 3, message: "Must be atleast 3 characters" }
                        })}
                        className='border' />
                </div>
                <div className='flex flex-col gap-1 justify-center'>
                    {/* {errors.age && <span className='text-red-600'>{errors.age.type === 'max' ? `Age cannot be ${watch('age')} (Max is 100)` : ''}</span>} */}
                    <label htmlFor="age">Age: <span className="text-red-500">*</span></label>
                    <input
                        id='age'
                        type='number'
                        {...register('age', {
                            valueAsNumber: true,
                            required: "Age is required",
                            min: { value: 5, message: "Only age 6 and above can fill the form." },
                            max: { value: 100, message: "Age cannot be more than" }
                        })}
                        className='border' />
                </div>
                <button
                    className={`h-8 mt-2 border rounded-2xl ${isSubmitting ? 'bg-gray-300 cursor-not-allowed' : ''} cursor-pointer hover:bg-amber-100`}
                    disabled={isSubmitting}
                    type='submit'>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </form>
        </>
    )
}

export default reactform