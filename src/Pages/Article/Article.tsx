import { Outlet } from 'react-router'

type Props = {}

const Article = (props: Props) => {
  
  return (
    <>
        <div>Article Page</div>
        <Outlet/>
    </>
  )
}

export default Article