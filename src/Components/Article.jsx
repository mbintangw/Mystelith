const Article = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-10' id="Article">
      <div className="border-b-4 w-full text-center">
        <h1 className="text-3xl font-bold">Articles</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="max-w-[300px] rounded-lg">
        <div  className="w-full h-[200px] object-cover overflow-hidden rounded-t-lg">
          <img src="/Images/artikelimage.jpg"/>
        </div>

        <div className="p-5 space-y-6">
          <p className="text-gray-400">12 August, 2024</p>
          <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, incidunt!</h1>
        </div>
      </div>
      <div className="max-w-[300px] rounded-lg">
        <div  className="w-full h-[200px] object-cover overflow-hidden rounded-t-lg">
          <img src="/Images/artikelimage.jpg"/>
        </div>

        <div className="p-5 space-y-6">
          <p className="text-gray-400">12 August, 2024</p>
          <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, incidunt!</h1>
        </div>
      </div>
      <div className="max-w-[300px] rounded-lg">
        <div  className="w-full h-[200px] object-cover overflow-hidden rounded-t-lg">
          <img src="/Images/artikelimage.jpg"/>
        </div>

        <div className="p-5 space-y-6">
          <p className="text-gray-400">12 August, 2024</p>
          <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, incidunt!</h1>
        </div>
      </div>
      </div>
    </main>
  )
}

export default Article
