import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const newEquipment = {
      image: form.image.value,
      itemName: form.itemName.value,
      categoryName: form.categoryName.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: parseInt(form.stockStatus.value),
      userEmail: user?.email,
      userName: user?.displayName
    };

    fetch(`${import.meta.env.VITE_API_URL}/equipment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEquipment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Sports equipment added successfully!',
            icon: 'success',
            confirmButtonColor: '#10b981'
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-slate-100 mb-2 border-l-4 border-emerald-500 pl-4">Add Sports Equipment</h2>
        <p className="text-slate-400 text-sm mb-8">List new athletic accessories and sports items in the store catalog.</p>

        <form onSubmit={handleAddEquipment} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Image URL</label>
            <input type="url" name="image" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" placeholder="https://..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Item Name</label>
            <input type="text" name="itemName" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" placeholder="Pro Cricket Bat" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Category Name</label>
            <select name="categoryName" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500">
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Tennis">Tennis</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Price ($)</label>
            <input type="number" step="0.01" name="price" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" placeholder="120.00" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Rating (1 to 5)</label>
            <input type="number" step="0.1" min="1" max="5" name="rating" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" placeholder="4.8" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Customization</label>
            <input type="text" name="customization" placeholder="Extra grip, customized string tension" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Processing Time (Days)</label>
            <input type="text" name="processingTime" placeholder="2-3 Business Days" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Stock Quantity</label>
            <input type="number" name="stockStatus" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" placeholder="15" />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
            <textarea name="description" rows="3" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" placeholder="Detailed product specifications..."></textarea>
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
            <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold rounded-xl hover:opacity-90 transition shadow-lg shadow-emerald-500/20">
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;