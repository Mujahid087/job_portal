// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { RadioGroup } from '../ui/radio-group'
// import { Button } from '../ui/button'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading } from '@/redux/authSlice'
// import { Loader2 } from 'lucide-react'

// const Signup = () => {

//     const [input, setInput] = useState({
//         fullname: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//         file: ""
//     });
//     const { loading, user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }
//     const changeFileHandler = (e) => {
//         setInput({ ...input, file: e.target.files?.[0] });
//     }
//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();    //formdata object
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role", input.role);
//         if (input.file) {
//             formData.append("file", input.file);
//         }

        

//         try {
//             dispatch(setLoading(true));
//             const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//                 headers: { 'Content-Type': "multipart/form-data" },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             const errorMessage = error?.response?.data?.message || "Something went wrong";
//             toast.error(errorMessage);
//         } finally {
//             dispatch(setLoading(false));
//         }
//     }

//     useEffect(() => {
//         if (user) {
//             navigate("/");
//         }
//     }, [])
//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center max-w-7xl mx-auto'>
//                 <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
//                     <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
//                     <div className='my-2'>
//                         <Label>Full Name</Label>
//                         <Input
//                             type="text"
//                             value={input.fullname}
//                             name="fullname"
//                             onChange={changeEventHandler}
//                             placeholder="patel"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Email</Label>
//                         <Input
//                             type="email"
//                             value={input.email}
//                             name="email"
//                             onChange={changeEventHandler}
//                             placeholder="patel@gmail.com"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Phone Number</Label>
//                         <Input
//                             type="text"
//                             value={input.phoneNumber}
//                             name="phoneNumber"
//                             onChange={changeEventHandler}
//                             placeholder="8080808080"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Password</Label>
//                         <Input
//                             type="password"
//                             value={input.password}
//                             name="password"
//                             onChange={changeEventHandler}
//                             placeholder="patel@gmail.com"
//                         />
//                     </div>
//                     <div className='flex items-center justify-between'>
//                         <RadioGroup className="flex items-center gap-4 my-5">
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     checked={input.role === 'student'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r1">Student</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="recruiter"
//                                     checked={input.role === 'recruiter'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r2">Recruiter</Label>
//                             </div>
//                         </RadioGroup>
//                         <div className='flex items-center gap-2'>
//                             <Label>Profile</Label>
//                             <Input
//                                 accept="image/*"
//                                 type="file"
//                                 onChange={changeFileHandler}
//                                 className="cursor-pointer"
//                             />
//                         </div>
//                     </div>
//                     {
//                         loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
//                     }
//                     <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup

import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: null
    });
    const [errors, setErrors] = useState({});
    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Basic client-side validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!input.fullname.trim()) newErrors.fullname = "Full name is required";
        
        if (!input.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            newErrors.email = "Email is invalid";
        }
        
        if (!input.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!/^\d{10}$/.test(input.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits";
        }
        
        if (!input.password) {
            newErrors.password = "Password is required";
        } else if (input.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        if (!input.role) newErrors.role = "Role selection is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: undefined });
        }
    };

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setErrors({ ...errors, file: "File size should be less than 5MB" });
                return;
            }
            // Check file type
            if (!file.type.startsWith('image/')) {
                setErrors({ ...errors, file: "Only image files are allowed" });
                return;
            }
            setInput({ ...input, file });
            setErrors({ ...errors, file: undefined });
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            toast.error("Please fill all required fields correctly");
            return;
        }

        // Debug log to verify API endpoint
        console.log("Submitting to:", `${USER_API_END_POINT}/register`);

        const formData = new FormData();
        formData.append("fullname", input.fullname.trim());
        formData.append("email", input.email.trim());
        formData.append("phoneNumber", input.phoneNumber.trim());
        formData.append("password", input.password);
        formData.append("role", input.role);
        
        if (input.file) {
            formData.append("file", input.file);
        }

        // Debug log to verify form data
        console.log("Form data being sent:", {
            fullname: input.fullname.trim(),
            email: input.email.trim(),
            phoneNumber: input.phoneNumber.trim(),
            role: input.role,
            hasFile: !!input.file,
            fileType: input.file ? input.file.type : 'none'
        });

        try {
            dispatch(setLoading(true));
            
            // Set a timeout for the request
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
            
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
                signal: controller.signal,
                // Increase timeout for large file uploads
                timeout: 15000
            });
            
            clearTimeout(timeoutId);
            
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message || "Registration successful! Please login.");
            } else {
                // Some APIs might return 200 but with success: false
                toast.error(res.data.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Registration Error:", error);
            
            if (error.name === "AbortError" || error.code === "ECONNABORTED") {
                toast.error("Request timed out. The server took too long to respond.");
            } else if (error.response) {
                // The request was made and the server responded with a status code
                console.log("Server responded with:", error.response.status, error.response.data);
                const errorMessage = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
                toast.error(errorMessage);
                
                // Handle validation errors from backend if available
                if (error.response.data?.errors) {
                    setErrors(error.response.data.errors);
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received:", error.request);
                toast.error("No response from server. Server might be down or network connection issue.");
                
                // Check if the API endpoint is correct
                console.log("Please verify the API endpoint:", USER_API_END_POINT);
            } else {
                // Something happened in setting up the request
                toast.error("Failed to send request. Please check your connection and try again.");
            }
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-full md:w-2/3 lg:w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label htmlFor="fullname">Full Name <span className="text-red-500">*</span></Label>
                        <Input
                            id="fullname"
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Your full name"
                            className={errors.fullname ? "border-red-500" : ""}
                        />
                        {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
                    </div>
                    <div className='my-2'>
                        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                        <Input
                            id="email"
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="email@example.com"
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className='my-2'>
                        <Label htmlFor="phoneNumber">Phone Number <span className="text-red-500">*</span></Label>
                        <Input
                            id="phoneNumber"
                            type="tel"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="10-digit phone number"
                            className={errors.phoneNumber ? "border-red-500" : ""}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>
                    <div className='my-2'>
                        <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
                        <Input
                            id="password"
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Min. 6 characters"
                            className={errors.password ? "border-red-500" : ""}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    
                    <div className='my-2'>
                        <Label>Role <span className="text-red-500">*</span></Label>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="student"
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="recruiter"
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </div>
                        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                    </div>
                    
                    <div className='my-2'>
                        <Label htmlFor="file">Profile Photo</Label>
                        <Input
                            id="file"
                            accept="image/*"
                            type="file"
                            onChange={changeFileHandler}
                            className={`cursor-pointer mt-1 ${errors.file ? "border-red-500" : ""}`}
                        />
                        <p className="text-sm text-gray-500 mt-1">Max size: 5MB, Allowed formats: JPG, PNG, GIF</p>
                        {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
                    </div>
                    
                    <Button 
                        type="submit" 
                        className="w-full my-4" 
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> 
                                Please wait
                            </>
                        ) : "Sign Up"}
                    </Button>
                    
                    <div className='text-sm text-center'>
                        Already have an account? <Link to="/login" className='text-blue-600 hover:underline'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup

