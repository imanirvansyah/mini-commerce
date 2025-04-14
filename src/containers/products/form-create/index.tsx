"use client"
import { useState } from "react"

export type Variant = {
  id?: number;
  name: string;
  stock: number;
}

const FormCreate = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [variant, setVariant] = useState<Variant[]>([]);
  return (
    <div>
      <button onClick={() => setToggle(true)}>+ Add product</button>
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-start justify-center z-50 overflow-auto py-12">
          <div className="bg-black  border m-5 p-5 rounded-md shadow-lg w-96">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold mb-4">Add Product</h2>
              <button onClick={() => setToggle(false)}>
                <h2 className="text-xl font-bold mb-4">x</h2>
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <label htmlFor="images">Images</label>
              <input id="images" type="file" className="border p-2 rounded-md" placeholder="upload images" />
              <input type="text" placeholder="Product Name" className="border p-2 rounded-md" />
              <input type="text" placeholder="Product Description" className="border p-2 rounded-md" />
              <input type="number" placeholder="Price" className="border p-2 rounded-md" />
              <input type="number" placeholder="Stock" className="border p-2 rounded-md" />
              <button
                type="button"
                className="bg-slate-500 rounded-md w-fit p-3"
                onClick={() => setVariant(prev => [...prev, {
                  id: prev.length + 1,
                  name: '', stock: 0
                }])}
              >add variant</button>
              {
                variant.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <input type="text" placeholder="Variant Name" className="border p-2 rounded-md w-full" />
                    <input type="number" placeholder="Stock" className="border p-2 rounded-md w-full" />
                    <button
                      onClick={() => setVariant(prev => prev.filter((_, i) => i !== index))}
                      type="button"
                      className="bg-red-500 text-white rounded-md w-fit p-3"
                    >X</button>
                  </div>
                ))
              }
              <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">Create</button>
            </form>
            <button onClick={() => setToggle(false)} className="mt-4 text-red-500">Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormCreate