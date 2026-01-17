import React from 'react';

const uploadImage = async(imageFile) => {
   const formData = new FormData();
   formData.append("image", imageFile)


   const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_KEY}`


   const res = await fetch(url, {
    method: "POST",
    body: formData
   })

   const data = await res.json();
   return data.data.display_url;


};

export default uploadImage;