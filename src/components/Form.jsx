import React from "react"
import Text from "./icons/Text"

const Form = () => {
  return (
    <section className="max-w-[60%] m-auto my-3 px-4">
      <div className="border border-black rounded bg-gray-700 flex items-center p-2.5">
        <span className="text-gray-500 mr-2">
          <Text />
        </span>
        <form className="w-full bg-transparent outline-none">
          <input className='w-full'
            type="text"
            placeholder="Add a new task..." />
        </form>

      </div>

    </section>
  )
}

export default Form