import React from 'react'

const page =async ({params, searchParams}:RouteParams) => {
    const {id}= await params;
    const {page, pageSize, query}= searchParams;

    const {success, data,error} = await getTagQuestions({
        tagId:id,
        page:Number(page)||1,
        pageSize:Number(pageSize)|| 10,
        query,
    })
  return (
    <div>
        <h1></h1>
    </div>
  )
}

export default page