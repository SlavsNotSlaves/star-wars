import { HTTP, HTTPS } from "@constants/api";

// Изменяет URL с HTTP на HTTPS
export const changeHTTP = url => {
   return url ? url.replace(HTTP, HTTPS) : url;
}


// Отправляет запрос Fetch
export const getApiResource = async (url) => {

   try {
      const res = await fetch(url)

      if (!res.ok) {
         console.error('Could not fetch.', res.status);
         return false
      }

      return await res.json()
   } catch (error) {
      console.error('Could not fetch.', error.message);
      return false
   }
}




