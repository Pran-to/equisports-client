import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Edit3, Trash2 } from 'lucide-react';

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/my-equipment/${user.email}`)
        .then(res => res.json())
        .then(data => setItems(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This item will be permanently removed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#334155',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/equipment/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Equipment deleted successfully.', 'success');
              setItems(items.filter(item => item._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-slate-100 mb-8 border-l-4 border-emerald-500 pl-4">My Equipment List</h1>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800">
          <p className="text-slate-400">You haven't added any sports equipment yet.</p>
          <Link to="/add-equipment" className="mt-4 inline-block px-6 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl">Add Equipment</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item._id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <img src={item.image} alt={item.itemName} className="w-full h-48 object-cover rounded-xl mb-4" />
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-slate-100">{item.itemName}</h3>
                  <span className="text-emerald-400 font-bold">${item.price}</span>
                </div>
                <p className="text-slate-400 text-sm mt-2 line-clamp-2">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center space-x-3">
                <Link to={`/update-equipment/${item._id}`} className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-semibold flex items-center justify-center space-x-1 transition">
                  <Edit3 className="w-4 h-4" />
                  <span>Update</span>
                </Link>
                <button onClick={() => handleDelete(item._id)} className="flex-1 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm font-semibold flex items-center justify-center space-x-1 transition border border-red-500/20">
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEquipment;