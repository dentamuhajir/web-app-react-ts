import { BreadcrumbModel } from '../Models/Breadcrumb'

const Breadcrumb = (props : {breadcumbs: BreadcrumbModel[]}) => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            { props.breadcumbs.map((breadcrumb) => {
                return (
                    <>
                      <li className={"breadcrumb-item" + ( breadcrumb.isActive ? ' active' : '')}>{ breadcrumb.title }</li>
                    </>
                )
            })}
            </ol>
        </nav>
    </>
  )
}

export default Breadcrumb