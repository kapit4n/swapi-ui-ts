import { Link } from 'react-router-dom'
import "./list-item.css"

interface ListProps {
  data: ListItemData;
  route: string;
  onClickSetCurrent: (data: string) => void
}

export default function ListItem({ data, onClickSetCurrent }: ListProps) {

  const transform = (field: string) => {
    return field.replaceAll("_", " ")
  }

  return (
    <div className='list-item'>
      <Link to={`/${data.mainRoute}/details/${data.dataSource.id}`} onClick={() => onClickSetCurrent(data.dataSource['id'])}>
        <h2 className="list-item-title">{data.dataSource[data.titleField]}</h2>
      </Link>
      <div className="list-item-secondary">
        <img src={data.imagePlaceholder} height="100" alt="placeholder"/>
        <div className="list-item-fields">
          {data.descriptionFields.map(fieldName => (
            <div className="description-item">
              <h3>{transform(fieldName)}:</h3>
              <p>{data.dataSource[fieldName]}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}