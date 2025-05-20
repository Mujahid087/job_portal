// import React, { useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { useSelector } from 'react-redux'
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
// import axios from 'axios'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useNavigate } from 'react-router-dom'
// import { Loader2 } from 'lucide-react'

// const companyArray = [];

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         position: 0,
//         companyId: ""
//     });
//     const [loading, setLoading]= useState(false);
//     const navigate = useNavigate();

//     const { companies } = useSelector(store => store.company);
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company)=> company.name.toLowerCase() === value);
//         setInput({...input, companyId:selectedCompany._id});
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input,{
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 withCredentials:true
//             });
//             if(res.data.success){
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally{
//             setLoading(false);
//         }
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center w-screen my-5'>
//                 <form onSubmit = {submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
//                     <div className='grid grid-cols-2 gap-2'>
//                         <div>
//                             <Label>Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Description</Label>
//                             <Input
//                                 type="text"
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Requirements</Label>
//                             <Input
//                                 type="text"
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Salary</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Job Type</Label>
//                             <Input
//                                 type="text"
//                                 name="jobType"
//                                 value={input.jobType}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Experience Level</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>No of Postion</Label>
//                             <Input
//                                 type="number"
//                                 name="position"
//                                 value={input.position}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         {
//                             companies.length > 0 && (
//                                 <Select onValueChange={selectChangeHandler}>
//                                     <SelectTrigger className="w-[180px]">
//                                         <SelectValue placeholder="Select a Company" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {
//                                                 companies.map((company) => {
//                                                     return (
//                                                         <SelectItem value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
//                                                     )
//                                                 })
//                                             }

//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             )
//                         }
//                     </div> 
//                     {
//                         loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Post New Job</Button>
//                     }
//                     {
//                         companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>*Please register a company first, before posting a jobs</p>
//                     }
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default PostJob






import React, { useState, useEffect } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState("");
    const navigate = useNavigate();

    const { companies } = useSelector(store => store.company);
    
    // Reset form error when inputs change
    useEffect(() => {
        if (formError) setFormError("");
    }, [input]);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => 
            company.name.toLowerCase() === value.toLowerCase()
        );
        if (selectedCompany) {
            setInput({...input, companyId: selectedCompany._id});
        }
    };

    const validateForm = () => {
        // Check required fields
        const requiredFields = ["title", "description", "requirements", "companyId"];
        for (const field of requiredFields) {
            if (!input[field]) {
                setFormError(`Please fill in all required fields`);
                return false;
            }
        }
        return true;
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center w-screen my-5'>
                <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
                    <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
                    
                    {formError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {formError}
                        </div>
                    )}
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <Label htmlFor="title">Title<span className="text-red-500">*</span></Label>
                            <Input
                                id="title"
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="description">Description<span className="text-red-500">*</span></Label>
                            <Input
                                id="description"
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="requirements">Requirements<span className="text-red-500">*</span></Label>
                            <Input
                                id="requirements"
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="salary">Salary</Label>
                            <Input
                                id="salary"
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="jobType">Job Type</Label>
                            <Input
                                id="jobType"
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="experience">Experience Level</Label>
                            <Input
                                id="experience"
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="position">Number of Positions</Label>
                            <Input
                                id="position"
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                min="0"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="company">Company<span className="text-red-500">*</span></Label>
                            {companies && companies.length > 0 ? (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {companies.map((company) => (
                                                <SelectItem 
                                                    key={company._id} 
                                                    value={company.name.toLowerCase()}
                                                >
                                                    {company.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <p className='text-sm text-red-600 font-medium mt-1'>
                                    No companies available. Please register a company first.
                                </p>
                            )}
                        </div>
                    </div>
                    
                    {loading ? (
                        <Button disabled className="w-full mt-6">
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                        </Button>
                    ) : (
                        <Button 
                            type="submit" 
                            className="w-full mt-6"
                            disabled={companies.length === 0}
                        >
                            Post New Job
                        </Button>
                    )}
                    
                    {companies.length === 0 && (
                        <p className='text-xs text-red-600 font-bold text-center mt-4'>
                            *Please register a company first before posting jobs
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default PostJob
