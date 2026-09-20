import  { useEffect, useState } from 'react';
import { useParams } from 'react'
import { Star, Truck, ShieldCheck, Clock, Layers } from 'lucide-react';

const ViewDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/equipment/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) return <div className="text-center py-20 text-slate-400">Loading details...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
        <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
          <img src={item.image} alt={item.itemName} className="w-full h-[380px] sm:h-[450px] object-cover" />
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-semibold px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">{item.categoryName}</span>
            <h1 className="text-3xl font-black text-slate-100 mt-3">{item.itemName}</h1>
            
            <div className="flex items-center space-x-4 mt-3">
              <div className="flex items-center text-amber-400 font-semibold text-sm">
                <Star className="w-4 h-4 fill-amber-400 mr-1" />
                <span>{item.rating} / 5.0</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 text-sm">{item.stockStatus} units in stock</span>
            </div>

            <div className="text-3xl font-black text-emerald-400 mt-4">${item.price}</div>
            <p className="text-slate-300 text-sm mt-4 leading-relaxed">{item.description}</p>
          </div>

          <div className="space-y-3 bg-slate-950/60 rounded-xl p-4 border border-slate-800/80">
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span><strong>Customization:</strong> {item.customization || "Standard Spec"}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span><strong>Processing Time:</strong> {item.processingTime || "1-2 Days"}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span><strong>Shipping:</strong> Expedited global dispatch available</span>
            </div>
          </div>

          <button className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black rounded-xl hover:opacity-90 transition">
            Buy Equipment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;