// import { setCompanies} from '@/redux/companySlice'
// import { COMPANY_API_END_POINT} from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// const useGetAllCompanies = () => {
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         const fetchCompanies = async () => {
//             try {
//                 const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
//                 console.log('called');
//                 if(res.data.success){
//                     dispatch(setCompanies(res.data.companies));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchCompanies();
//     },[])
// }

// export default useGetAllCompanies


import { setCompanies } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();

    // Exposed function to re-fetch companies manually
    const fetchCompanies = async () => {
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
                withCredentials: true
            });
            console.log('Companies fetched');
            if (res.data.success) {
                dispatch(setCompanies(res.data.companies));
            }
        } catch (error) {
            console.log('Error fetching companies:', error);
        }
    };

    // Fetch once on component mount
    useEffect(() => {
        fetchCompanies();
    }, []);

    return fetchCompanies; // expose for reuse
};

export default useGetAllCompanies;
