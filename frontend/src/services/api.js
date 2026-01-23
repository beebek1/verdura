import axios from  'axios';

const ApiFormData =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"multipart/form-data",

    },
});
const Api =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",

    },

})

const config ={
    headers:{
        'authorization':`Bearer ${localStorage.getItem("token")}`
    }
}

export const createUserApi =(data) => Api.post("/api/auth/register",data)
export const loginUserApi =(data) => Api.post("/api/auth/login",data)
export const upVoteBlog =(blog_id) => Api.patch(`/api/user/upvote/${blog_id}`,{}, config)
export const joinCampaignApi =(campaign_id) => Api.patch(`/api/user/join-campaign/${campaign_id}`,{}, config)

export const getOrgById =() => Api.get(`/api/user/get-org`, config)
export const getIndById =() => Api.get(`/api/user/get-ind`, config)
export const getIndRecentActivity =() => Api.get(`/api/user/get-recent-activity`, config)

export const getAllBlogs =async() => { 
    const res = await Api.get("/api/user/get-all-blogs",config) 
    return res.data.blogs
    };


export const getAllCampaigns =async() => { 
    const res = await Api.get("/api/user/get-all-campaigns") 
    return res.data.campaigns
    };
///
export const createBlog = async (data) => {
    const res = await Api.post("/api/user/create-blog", data,config); 
    return res.data;
};

export const updateIndProfile = async (data) => {
    const res = await Api.put("/api/user/update-ind-profile", data,config); 
    return res.data;
};










const WeatherApi = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_API_URL
});

//weather api
export const getLatestWeather = (city) => WeatherApi.get(`/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=yes`);