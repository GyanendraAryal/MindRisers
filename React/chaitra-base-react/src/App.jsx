import React from 'react'
import Courses from './components/Courses'
import Blogs from './components/Blogs'
import Todo from './components/Todo'
import { data } from './data/data'
import Counter from './components/Counter'
import ChangeTheme from './components/ChangeTheme'
import GoogleTabs from './components/GoogleTabs'
import TodosCrud from './components/TodosCrud'
import TodosCrudModal from './components/TodosCrudModal'
import Modal from './components/Modal'

const { courses } = data
function App() {
  return (
    <>
      {/* Featured Section */}
      {/* <h1 className='h15 text-center mb-6 mt-3 font-semibold text-2xl'>Featured</h1>
      <div className='h-full justify-items-center gap-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {courses.filter((item) => item.featured).map((item, index) => {
          return <Courses key={index} title={item.title} image={item.image} description={item.description} featured={item.featured ? "Yes" : "No"} />
        })}
      </div> */}
      {/* Others Section */}
      {/* <h1 className='h15 text-center mb-6 mt-3 font-semibold text-2xl'>Others</h1>

      <div className='h-full justify-items-center gap-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

        {
          courses.filter((item) => !item.featured).map((item, index) => {
            return <Courses key={index} title={item.title} image={item.image} description={item.description} featured={item.featured ? "Yes" : "No"} />
          })
        }
      </div> */}
      {/* <Blogs />
      {/* <Todo /> */}
      {/* <Counter/>  */}
      {/* <ChangeTheme /> */}
      {/* <GoogleTabs/> */}
      {/* <TodosCrud/> */}
      {/* <TodosCrudModal /> */}
      <Modal/>

    </>
  )
}

export default App
