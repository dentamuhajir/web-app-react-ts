import React, { useEffect, useState } from 'react'
import articleService from '../ArticleService'
import { Article } from '../../../Models/Article'
import { BreadcrumbModel } from '../../../Models/Breadcrumb'
import Breadcrumb from '../../../Shared/Breadcrumb'

type Props = {}

const ListArticle = (props: Props) => {
  
  const breadcrumbData :BreadcrumbModel[] =[
    {
      title: "Home",
      link: "\cms",
      isActive: true
    },
    {
      title: "Article",
      link: "\cms\article",
      isActive: true
    },
    {
      title: "List",
      link: "",
      isActive: false
    }
  ]

  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    loadArticle()
  },[])

  console.log(articles)

  const loadArticle = async () => {
    try {
      const data = await articleService.fetchListArticle(); 
      setArticles(data);
    } catch (err) {
      //setError((err as Error).message);
    }
  }

  return (
    <>
    <Breadcrumb breadcumbs={breadcrumbData}></Breadcrumb>
    <div>List Articles</div>
    { articles?.map((article) => {
      return(
        <p>{ article.id } | { article.name } | { article.email }</p>
      ) 
    }
    )}
   </>
  )
}

export default ListArticle