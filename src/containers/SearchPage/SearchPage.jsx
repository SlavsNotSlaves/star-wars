import propTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import { API_SEARCH } from '@constants/api';
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';

import styles from './SearchPage.module.css';
import { debounce } from 'lodash';

const SearchPage = ({ setErrorApi }) => {
   const [inputSearchValue, setInputSearchValue] = useState('')
   const [people, setPeople] = useState([])

   const getResponse = async param => {
      console.log(param);
      const res = await getApiResource(API_SEARCH + param)

      if (res) {
         const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)

            return {
               id, name, img
            }
         })
         setPeople(peopleList);
         setErrorApi(false)
      } else {
         setErrorApi(true)
      }
   }

   useEffect(() => {
      getResponse('')
   }, [])

   const debouncedGetResponse = useCallback(
      debounce(value => getResponse(value), 300), []
   )


   const handleInputChange = (event) => {
      const value = event.target.value

      setInputSearchValue(value)
      debouncedGetResponse(value)
   }

   return (
      <>
         <h1 className='header__text'>Search</h1>
         <input
            type="text"
            onChange={handleInputChange}
            value={inputSearchValue}
            placeholder="Input character's name"
         />
         <SearchPageInfo people={people} />
      </>
   );
}

SearchPage.propTypes = {
   setErrorApi: propTypes.func,
}

export default withErrorApi(SearchPage);
