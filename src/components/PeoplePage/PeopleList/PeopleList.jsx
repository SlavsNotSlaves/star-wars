import propTypes from 'prop-types';
import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
   return (
      <>
         <ul>
            {people.map(({ id, name, img }) =>
               <li key={id}>
                  <img src={img} alt={name} />
                  <p>{name}</p>
               </li>
            )}
         </ul>
      </>
   );
}

PeopleList.propTypes = {
   people: propTypes.array,
}

export default PeopleList;
