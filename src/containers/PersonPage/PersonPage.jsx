import propTypes from 'prop-types';
import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense } from 'react';
import { API_PERSON } from '@constants/api';
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@ui/UiLoading';

import styles from './PersonPage.module.css';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
   const [personInfo, setPersonInfo] = useState(null)
   const [personId, setPersonId] = useState(null)
   const [personName, setPersonName] = useState(null)
   const [personPhoto, setPersonPhoto] = useState(null)
   const [personFilms, setPersonFilms] = useState(null)
   const [personFavorite, setPersonFavorite] = useState(false)
   const [isPersonLoading, setIsPersonLoading] = useState(false)

   const storeData = useSelector(state => state.favoriteReducer)

   const { id } = useParams()

   useEffect(() => {
      (async () => {
         setIsPersonLoading(true)
         const res = await getApiResource(`${API_PERSON}/${id}/`)

         storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

         setPersonId(id)

         if (res) {
            setPersonInfo([
               { title: 'Height', data: res.height },
               { title: 'Mass', data: res.mass },
               { title: 'Hair Color', data: res.hair_color },
               { title: 'Skin Color', data: res.skin_color },
               { title: 'Eye Color', data: res.eye_color },
               { title: 'Birth Year', data: res.birth_year },
               { title: 'Gender', data: res.gender },
            ])
            setPersonName(res.name)
            setPersonPhoto(getPeopleImage(id))

            res.films.length && setPersonFilms(res.films)

            setErrorApi(false)
            setIsPersonLoading(false)
         } else {
            setErrorApi(true)
            setIsPersonLoading(false)
         }
      })()
   }, [])

   return (
      <>
         <PersonLinkBack />

         {isPersonLoading
            ? <UiLoading theme='white' isShadow />
            : <div className={styles.wrapper}>

               <span className={styles.person__name}>{personName}</span>

               <div className={styles.container}>

                  <PersonPhoto
                     personFavorite={personFavorite}
                     setPersonFavorite={setPersonFavorite}
                     personId={personId}
                     personPhoto={personPhoto}
                     personName={personName}
                  />

                  {personInfo && <PersonInfo personInfo={personInfo} />}

                  {personFilms && (
                     <Suspense fallback={<UiLoading theme='white' isShadow />}>
                        <PersonFilms personFilms={personFilms} />
                     </Suspense>)}
               </div>
            </div>
         }
      </>
   );
}

PersonPage.propTypes = {
   setErrorApi: propTypes.func,
}

export default withErrorApi(PersonPage);
