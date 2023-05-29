import { Link } from 'react-router-dom'
import "./list-item.css"
import { transform } from '../utils';

export default function ListItem({ data, onClickSetCurrent }: ListItemProps) {
  return (
    <div className='list-item'>
      <div className='list-item-header'>
        <Link to={`/${data.mainRoute}/details/${data.dataSource.id}`} onClick={() => onClickSetCurrent(data.dataSource['id'], data.objectType)}>
          {data.titleField && <h2 className="list-item-title">{data.dataSource[data.titleField]}</h2>}
        </Link>
        {data.dataSource.visited && (
          <span>{data.dataSource.visited} times visited</span>
        )}
      </div>
      <div className="list-item-secondary">
        <img className='img-placeholder-list' src={data.dataSource.imgPlaceholder} alt="placeholder"/>
        <div className="list-item-fields">
          {data.descriptionFields?.map(fieldName => (
            <div className="description-item" key={fieldName}>
              <h3>{transform(fieldName)}:</h3>
              <p>{data.dataSource[`${fieldName}`]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}