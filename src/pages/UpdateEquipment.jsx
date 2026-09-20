import  { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/equipment/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  const handleUpdateEquipment = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      image: form.image.value,
      itemName: form.itemName.value,
      categoryName: form.categoryName.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: parseInt(form.stockStatus.value)
    };

    fetch(`${import.meta.env.VITE_API_URL}/equipment/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Updated!',
            text: 'Equipment details updated successfully!',
            icon: 'success',
            confirmButtonColor: '#10b981'
          });
          navigate('/my-equipment');
        }
      });
  };

  if (!item) return <div className="text-center py-20 text-slate-400">Loading equipment data...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-slate-100 mb-2 border-l-4 border-emerald-500 pl-4">Update Sports Equipment</h2>
        <p className="text-slate-400 text-sm mb-8">Update existing specs and inventory data for this product.</p>

        <form onSubmit={handleUpdateEquipment} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Image URL</label>
            <input type="url" name="image" defaultValue={item.image} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Item Name</label>
            <input type="text" name="itemName" defaultValue={item.itemName} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Category Name</label>
            <select name="categoryName" defaultValue={item.categoryName} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500">
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Tennis">Tennis</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Price ($)</label>
            <input type="number" step="0.01" name="price" defaultValue={item.price} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Rating</label>
            <input type="number" step="0.1" min="1" max="5" name="rating" defaultValue={item.rating} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Customization</label>
            <input type="text" name="customization" defaultValue={item.customization} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Processing Time</label>
            <input type="text" name="processingTime" defaultValue={item.processingTime} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Stock Quantity</label>
            <input type="number" name="stockStatus" defaultValue={item.stockStatus} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
            <textarea name="description" rows="3" defaultValue={item.description} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">User Email</label>
            <input type="email" value={user?.email || ''} readOnly className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-500 cursor-not-allowed" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">User Name</label>
            <input type="text" value={user?.displayName || ''} readOnly className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-500 cursor-not-allowed" />
          </div>

          <div className="sm:col-span-2 mt-4">
            <button type="submit" className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl transition shadow-lg shadow-emerald-500/20">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;