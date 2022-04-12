import propTypes from 'prop-types';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { API_PERSON } from '@constants/api';
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import PersonFilms from '@components/PersonPage/PersonFilms';

import styles from './PersonPage.module.css';

const PersonPage = ({ setErrorApi }) => {
   const [personInfo, setPersonInfo] = useState(null)
   const [personName, setPersonName] = useState(null)
   const [personPhoto, setPersonPhoto] = useState(null)
   const [personFilms, setPersonFilms] = useState(null)

   const { id } = useParams()

   useEffect(() => {
      (async () => {
         const res = await getApiResource(`${API_PERSON}/${id}/`)

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
         } else {
            setErrorApi(true)
         }
      })()
   }, [])

   return (
      <>
         <PersonLinkBack />
         <div className={styles.wrapper} >
            <span className={styles.person__name} >{personName}</span>
            <div className={styles.container}>
               <PersonPhoto personPhoto={personPhoto} personName={personName} />

               {personInfo && <PersonInfo personInfo={personInfo} />}

               {personFilms && <PersonFilms personFilms={personFilms} />}
            </div>
         </div>
      </>
   );
}

PersonPage.propTypes = {
   setErrorApi: propTypes.func,
}

export default withErrorApi(PersonPage);
