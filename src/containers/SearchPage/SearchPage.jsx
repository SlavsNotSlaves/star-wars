import propTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { API_SEARCH } from '@constants/api';
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiLoading from '@ui/UiLoading';
import UiInput from '@ui/UiInput';

import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
   const [inputSearchValue, setInputSearchValue] = useState('')
   const [people, setPeople] = useState([])
   const [isSearchLoading, setIsSearchLoading] = useState(false)


   const getResponse = async param => {
      setIsSearchLoading(true)
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
         setIsSearchLoading(false)
      } else {
         setErrorApi(true)
         setIsSearchLoading(false)
      }
   }

   useEffect(() => {
      getResponse('')
   }, [])

   const debouncedGetResponse = useCallback(
      debounce(value => getResponse(value), 300), []
   )

   const handleInputChange = (value) => {
      setInputSearchValue(value)
      debouncedGetResponse(value)
   }

   return (
      <>
         <h1 className='header__text'>Search</h1>

         <UiInput
            value={inputSearchValue}
            handleInputChange={handleInputChange}
            placeholder="Input character's name"
            classes={styles.input__search}
         />
         {isSearchLoading
            ? <UiLoading theme='white' isShadow />
            : <SearchPageInfo people={people} />
         }

      </>
   );
}

SearchPage.propTypes = {
   setErrorApi: propTypes.func,
}

export default withErrorApi(SearchPage);
