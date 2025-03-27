import { useSelector } from 'react-redux'
import { setBreadcumbs } from '../Reducers/BreadcrumbReducer';
import { BreadcrumbModel } from '../Models/Breadcrumb';

const Breadcrumb = (props : {breadcumbs: BreadcrumbModel[]}) => {

  const breadcrumbsReducer = useSelector((state) => state.breadcrumbs);  

  return (
    <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            { breadcrumbsReducer.map((breadcrumb, index)=> (
              <li key={index} className={"breadcrumb-item" + (breadcrumb.isActive ? " active" : "")}>
              {breadcrumb.title}
            </li>
            ))}
            </ol>
        </nav>
    </>
  )
}

export default Breadcrumb