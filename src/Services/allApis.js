import { base_url } from "./baseurl";
import { commonRequest } from "./commonStructure";


// add video - (title,cover image url,video url)

export const addVideoApi=async (bodyData)=>{
    return await commonRequest('POST',`${base_url}/videos`,bodyData)
}

// access videos

export const accessVideoApi=async()=>{
    return await commonRequest('GET',`${base_url}/videos`,{})
}

// add new caegory

export const addCategoryApi=async(bodyData)=>{
   return await commonRequest('POST',`${base_url}/categories`,bodyData)
}

// get all category

export const getAllcategory=async()=>{
    return await commonRequest("GET",`${base_url}/categories`,{})
}

// delete category

export const deleteCategoryApi=async(id)=>{
    return await commonRequest("DELETE",`${base_url}/categories/${id}`,{})
}

// delete video
export const deleteVideoApi=async(id)=>{
    return await commonRequest("DELETE",`${base_url}/videos/${id}`,{})
}

// addHistories

export const addHistories=async(bodyData)=>{
    return await commonRequest("POST",`${base_url}/Histories`,bodyData)
}

// getHistories

export const accessHistories=async()=>{
     return await commonRequest("GET",`${base_url}/Histories`,{})
}

// deleteHistories

export const deleteHistoryApi=async(id)=>{
    return await commonRequest("DELETE",`${base_url}/Histories/${id}`,{})
}

// get single video

export const singleVideoApi=async(id)=>{
    return await commonRequest('GET',`${base_url}/videos/${id}`,{})
}

// updatecategory

export const updateCategoryApi=async(id,bodyData)=>{
      return await commonRequest("PUT",`${base_url}/categories/${id}`,bodyData)
}

