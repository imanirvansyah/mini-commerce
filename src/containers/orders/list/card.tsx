"use client"
import { useState } from "react"
export const CardOrder = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between p-2 text-white rounded-md ">
        <div>
          <p>Customer name</p>
          <span className="text-sm italic">Order id</span>
        </div>
        <span>shipping status</span>
      </div>
      <hr />
      <div>
        <div className="p-2 flex items-center justify-between ">
          <div className="flex items-center justify start gap-2">
            <div className="w-16 h-16 bg-red-300" />
            <div>
              <p>Items name</p>
              <p>variant</p>
              <p>2x</p>
            </div>
          </div>
          <p>RP 100.000</p>
        </div>
      </div>
      <hr />
      <div>
        <div className="p-2 flex items-center justify-between ">
          <div className="flex items-center justify start gap-2">
            <div className="w-16 h-16 bg-red-300" />
            <div>
              <p>Items name</p>
              <p>variant</p>
              <p>2x</p>
            </div>
          </div>
          <p>RP 100.000</p>
        </div>
      </div>
      <div className="text-right p-2">
        <h1 className="text-2xl mb-2">Total: Rp200.000</h1>
        <button className="bg-slate-700 p-2 mr-2 text-sm" onClick={() => setToggle(true)}>See detail shipment</button>
        {/* <button className="border border-slate-700 p-2  text-sm">Print label</button> */}
      </div>
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-start justify-center z-50 overflow-auto py-12">
          <div className="bg-black  border m-5 p-5 rounded-md shadow-lg w-96">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold mb-4">Shipment Detail</h2>
              <button onClick={() => setToggle(false)}>
                <h2 className="text-xl font-bold mb-4">x</h2>
              </button>
            </div>
            <p>Shipment detail will be displayed here.</p>
            <button onClick={() => setToggle(false)} className="mt-4 text-red-500">Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}