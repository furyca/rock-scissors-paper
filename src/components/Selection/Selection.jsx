import './Selection.module.scss'

const Selection = ({selection, image, handleSelection}) => {
  return (
    <li onClick={() => handleSelection(selection)}>
      <img src={image} alt={selection} />  
    </li>
  )
}

export default Selection