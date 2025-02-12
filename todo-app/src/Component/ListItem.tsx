import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import './ListItem.css'

interface items {
  index:number,
  title:string,
  onRemove:(index:number)=>void

}
const ListItem = ({index,title,onRemove}:items) => {
  return (
    <div className="display-list">
      <p> {index+1}. {title}</p>  
      <FontAwesomeIcon icon={faCircleXmark} onClick={()=>onRemove(index)}/>

    </div>
  )
}

export default ListItem