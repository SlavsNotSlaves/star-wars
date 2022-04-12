import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import PeopleList from '@components/PeoplePage/PeopleList';
import { API_PEOPLE } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { getApiResource, changeHTTP } from '@utils/network';
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {

   const [people, setPeople] = useState(null)
   const [prevPage, setPrevPage] = useState(null)
   const [nextPage, setNextPage] = useState(null)
   const [counterPage, setCounterPage] = useState(1)

   const query = useQueryParams()
   const queryPage = query.get('page')

   const getResource = async (url) => {
      const res = await getApiResource(url)

      if (res) {
         const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)

            return {
               id, name, img
            }
         })
         setPeople(peopleList)
         setPrevPage(changeHTTP(res.previous))
         setNextPage(changeHTTP(res.next))
         setCounterPage(getPeoplePageId(url))
         setErrorApi(false)
      } else {
         setErrorApi(true)
      }
   }

   useEffect(() => {
      getResource(API_PEOPLE + queryPage)
   }, [])

   return (
      <>
         <PeopleNavigation
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
         />
         {people && <PeopleList people={people} />}
      </>
   );
}

PeoplePage.propTypes = {
   setErrorApi: propTypes.func,
}

export default withErrorApi(PeoplePage);
