import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpDown, Eye } from 'lucide-react';

const AllEquipment = () => {
  const [items, setItems] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/equipment`)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleSortByPrice = () => {
    const sorted = [...items].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setItems(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 border-l-4 border-emerald-500 pl-4">All Sports Equipment</h1>
          <p className="text-slate-400 text-sm mt-1">Browse our full collection of equipment and accessories.</p>
        </div>
        <button 
          onClick={handleSortByPrice} 
          className="flex items-center space-x-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-emerald-400 px-4 py-2.5 rounded-xl text-sm font-semibold transition"
        >
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort Price: {isAscending ? "Low to High" : "High to Low"}</span>
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto shadow-xl">
        <table className="w-full text-left text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase text-xs border-b border-slate-800">
            <tr>
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Rating</th>
              <th className="py-4 px-6">Stock Status</th>
              <th className="py-4 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {items.map((item) => (
              <tr key={item._id} className="hover:bg-slate-800/40 transition">
                <td className="py-4 px-6 flex items-center space-x-3">
                  <img src={item.image} alt={item.itemName} className="w-12 h-12 object-cover rounded-lg border border-slate-700" />
                  <span className="font-semibold text-slate-100">{item.itemName}</span>
                </td>
                <td className="py-4 px-6">{item.categoryName}</td>
                <td className="py-4 px-6 font-bold text-emerald-400">${item.price}</td>
                <td className="py-4 px-6">⭐ {item.rating}</td>
                <td className="py-4 px-6">
                  <span className={`px-2.5 py-1 text-xs rounded-full border ${parseInt(item.stockStatus) > 0 ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`}>
                    {item.stockStatus} available
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <Link to={`/equipment/${item._id}`} className="inline-flex items-center space-x-1 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-semibold transition">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;