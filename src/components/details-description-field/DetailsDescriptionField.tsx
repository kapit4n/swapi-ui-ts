import { transform } from "../../utils"
import './DetailsDescriptionField.css'

interface DetailsDescriptionFieldProps {
  dataSource: any,
  fields: string[]
}

export const DetailsDescriptionField: React.FC<DetailsDescriptionFieldProps> = ({ dataSource, fields }) => {
  return (
    <div className="details-description">
      {
        fields.map(field => {
          return (
            <div className="field-container">
              <span className="label">{transform(field)}:</span>
              <p className="value">{dataSource[field]}</p>
            </div>
          )
        })
      }
    </div >
  )
}
