import { useLocation } from "react-router"


// Синтаксический анализ строки запроса
export const useQueryParams = () => {
   return new URLSearchParams(useLocation().search)
}