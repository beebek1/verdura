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
export const verifyTokenApi =(data) => Api.post("/api/auth/verify-token",data)
export const verifyEmailApi =(data) => Api.post("/api/auth/verify-email",data)
export const resetPasswordApi =(data) => Api.post("/api/auth/reset-password",data)
export const forgotPasswordApi =(data) => Api.post("/api/auth/forgot-password",data)
export const upVoteBlog =(blog_id) => Api.patch(`/api/user/upvote/${blog_id}`,{}, config)
export const joinCampaignApi =(campaign_id) => Api.patch(`/api/user/join-campaign/${campaign_id}`,{}, config)

export const getOrgById =() => Api.get(`/api/user/get-org`, config)
export const getIndById =() => Api.get(`/api/user/get-ind`, config)
export const getIndRecentActivity =() => Api.get(`/api/user/get-ind-recent-activity`, config)
export const getOrgRecentActivity =() => Api.get(`/api/user/get-org-recent-activity`, config)

export const getAllBlogs =async() => { 
    const res = await Api.get("/api/user/get-all-blogs",config) 
    return res.data.blogs
    };

export const deleteBlog = async (blog_id) => {
    const res = await Api.delete(`/api/user/delete-blog/${blog_id}`, config); 
    return res.data;
};

export const deleteAccountApi = (data) => {
  const token = localStorage.getItem("token");

  return Api.delete(`/api/auth/delete-user`, {
    headers: {
      'authorization': `Bearer ${token}`
    },
    data: data
  });
};



export const updateBlog = async (blog_id, data) => {
    const res = await Api.put(`/api/user/update-blog/${blog_id}`, data, config); 
    return res.data;
};


export const getAllCampaigns =async() => { 
    const res = await Api.get("/api/user/get-all-campaigns",config) 
    return res.data.campaigns
    };

export const createBlog = async (data) => {
    const res = await Api.post("/api/user/create-blog", data,config); 
    return res.data;
};

export const updateIndProfile = async (data) => {
    const res = await Api.put("/api/user/update-ind-profile", data,config); 
    return res.data;
};

export const updateOrgProfile = async (data) => {
    const res = await Api.put("/api/user/update-org-profile", data,config); 
    return res.data;
};
export const updateIndPfp = async (data) => {
    const res = await ApiFormData.put("/api/user/update-ind-pfp", data,config); 
    return res.data;
};

export const updateOrgPfp = async (data) => {
    const res = await ApiFormData.put("/api/user/update-org-pfp", data,config); 
    return res.data;
};


//campaign apis
export const createCampaign = async (data) => {
    const res = await Api.post("/api/user/campaignpost", data,config); 
    return res.data;
};

export const updateCampaign = async (campaign_id, data) => {
    const res = await Api.put(`/api/user/update-campaign/${campaign_id}`, data, config); 
    return res.data;
};


export const getCampaignById = async (campaign_id) => {
    const res = await Api.get(`/api/user/campaign/${campaign_id}`, config);
    return res.data.campaign;
};

export const deleteCampaign = async (campaign_id) => {
    const res = await Api.delete(`/api/user/delete-campaign/${campaign_id}`, config);
    return res.data;
};

const WeatherApi = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_API_URL
});

//weather api
export const getLatestWeather = (city) => WeatherApi.get(`/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=yes`);