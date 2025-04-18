import Link from "next/link";
const ListCustomers = () => {
  return (
    <div>
      <div className="w-full h-full overflow-scroll mt-12">
        <div className="flex items-center justify-start gap-2 mb-3">
          <input placeholder="search customer.." className="p-2" />
          <button className="bg-blue-500 text-white p-2 rounded">Search</button>
          <button className="border text-white p-2 rounded">Filter</button>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-start">Name</th>
              <th className="text-start">Email</th>
              <th className="text-start">Total Purchased</th>
              <th className="text-start">Last Purchase</th>
              <th className="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John doe</td>
              <td>johndoe@mail.com</td>
              <td>Rp1.000.000</td>
              <td>January 13, 2025</td>
              <td>
                <Link href="/customers/1">
                  <button className="bg-blue-500 text-white p-2 rounded" >View</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>johndoe@mail.com</td>
              <td>Rp1.000.000</td>
              <td>January 13, 2025</td>
              <td>
                <Link href="/customers/1">
                  <button className="bg-blue-500 text-white p-2 rounded" >View</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>johndoe@mail.com</td>
              <td>Rp1.000.000</td>
              <td>January 13, 2025</td>
              <td>
                <Link href="/customers/1">
                  <button className="bg-blue-500 text-white p-2 rounded" >View</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>johndoe@mail.com</td>
              <td>Rp1.000.000</td>
              <td>January 13, 2025</td>
              <td>
                <Link href="/customers/1">
                  <button className="bg-blue-500 text-white p-2 rounded" >View</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>johndoe@mail.com</td>
              <td>Rp1.000.000</td>
              <td>January 13, 2025</td>
              <td>
                <Link href="/customers/1">
                  <button className="bg-blue-500 text-white p-2 rounded" >View</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>johndoe@mail.com</td>
              <td>Rp1.000.000</td>
              <td>January 13, 2025</td>
              <td>
                <button className="bg-blue-500 text-white p-2 rounded">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListCustomers;