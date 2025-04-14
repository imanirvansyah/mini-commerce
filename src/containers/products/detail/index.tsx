
const ProductDetail = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 ">
      <div className="my-3 min-w-[33%] max-w-[500px]">
        <div className="w-full aspect-square bg-slate-500" />
        <div className="flex mt-3 gap-3">
          <div className="w-1/2 aspect-square bg-slate-500" />
          <div className="w-1/2 aspect-square bg-slate-500" />
          <div className="w-1/2 aspect-square bg-slate-500" />
          <div className="w-1/2 aspect-square bg-slate-500" />
        </div>
        {/* <Image src="https://via.placeholder.com/150" alt="Product" className="w-full h-auto" width={500} height={500} /> */}
      </div>
      <div className="flex-2">
        <h1 className="text-xl font-bold">Product Name</h1>
        <h2 className="text-lg">Price: $100</h2>
        <span className="text-sm italic">Sell more than 10k item this month</span>
        <hr className="my-3" />
        <h5 className="font-bold text-lg mb-1">Product description</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat!</p>
        <hr className="my-3" />
        <h5 className="font-bold text-lg mb-1">Product Stock</h5>
        <p>Total Available: 100</p>
        <h6>Variant</h6>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="border border-gray-300 p-2 mb-2 rounded-md">
            <p>Variant 1</p>
            <p>Available: 100</p>
          </div>
          <div className="border border-gray-300 p-2 mb-2 rounded-md">
            <p>Variant 2</p>
            <p>Available: 100</p>
          </div>
          <div className="border border-gray-300 p-2 mb-2 rounded-md">
            <p>Variant 3</p>
            <p>Available: 100</p>
          </div>
          <div className="border border-gray-300 p-2 mb-2 rounded-md">
            <p>Variant 4</p>
            <p>Available: 100</p>
          </div>
        </div>
        <hr className="my-3" />
        <h5 className="font-bold text-lg mb-1">Product Reviews</h5>
        <div>
          <div className="border border-gray-300 p-2 mb-2 rounded-md">
            <h6>John doe</h6>
            <h6>Rating: 4.5</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat!</p>
          </div>
          <div className="border border-gray-300 p-2 mb-2 rounded-md">
            <h6>John doe</h6>
            <h6>Rating: 4.5</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat!</p>
          </div>
          <div className="border border-gray-300 p-2 mb-2 rounded-md">
            <h6>John doe</h6>
            <h6>Rating: 4.5</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;