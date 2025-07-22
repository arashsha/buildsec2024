import React from 'react'

const Introduction = ({data}) => {
  return (
    <section id="introduction">
    <p className="tracking-tight leading-6 text-neutral-800 dark:text-neutral-100 font-normal text-md">
      {data.introduction}
    </p>
  </section>
  )
}

export default Introduction