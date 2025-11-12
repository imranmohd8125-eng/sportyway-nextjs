
import React, { useState } from 'react';

export default function Home() {
  const products = Array.from({length:12}).map((_,i)=>({
    id: i+1,
    name: `Sportyway Jersey ${i+1}`,
    price: 699 + i*50,
    sku: `SW-${1000+i}`,
    img: `/products/jersey-${i+1}.jpg`,
    sizes: ['S','M','L','XL'],
    colors: ['Red','Blue','Black']
  }));
  const [query,setQuery] = useState('');
  const [cart,setCart] = useState([]);
  const [selected,setSelected] = useState(null);

  function addToCart(p){
    setCart(prev=>{
      const found = prev.find(x=>x.id===p.id);
      if(found) return prev.map(x=>x.id===p.id?{...x,qty:x.qty+1}:x);
      return [...prev,{...p,qty:1}];
    });
  }
  function total(){ return cart.reduce((s,c)=>s + c.qty*c.price,0); }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">Free pickup — Troop Bazar, Abids <span>Call/WhatsApp: +91 8328000860</span></div>
      </div>

      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-red-600 flex items-center justify-center text-white font-bold">S</div>
            <div>
              <h1 className="text-2xl font-extrabold">SPORTYWAY.IN</h1>
              <p className="text-xs text-gray-500">Affordable football jerseys & sportswear</p>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#products" className="text-sm">Shop</a>
            <a href="#contact" className="text-sm">Contact</a>
            <button onClick={()=>document.getElementById('cart')?.classList.toggle('hidden')} className="bg-red-600 text-white px-4 py-2 rounded">Cart ({cart.reduce((s,c)=>s+c.qty,0)})</button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-4xl font-extrabold">Official store of affordable jerseys</h2>
            <p className="mt-4 text-gray-600">Shop replicas, training kits and team orders. Bulk discounts available.</p>
            <div className="mt-6">
              <a href="#products" className="bg-red-600 text-white px-5 py-3 rounded">Shop Jerseys</a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="/hero/hero.jpg" alt="hero" className="w-full h-auto" />
          </div>
        </section>

        <section id="products">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">All Products</h3>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search" className="border px-3 py-2 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())).map(p=> (
              <div key={p.id} className="border rounded overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-64 object-cover" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/700x900?text=Image'}} />
                <div className="p-4">
                  <h4 className="font-semibold">{p.name}</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-lg font-bold">₹{p.price}</div>
                    <div className="text-xs text-gray-500">{p.sku}</div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button onClick={()=>setSelected(p)} className="border px-3 py-2 rounded">Quick view</button>
                    <button onClick={()=>addToCart(p)} className="bg-red-600 text-white px-3 py-2 rounded">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-xl">SPORTYWAY.IN</h5>
            <p className="text-sm text-gray-300 mt-2">Affordable football jerseys & sportswear</p>
          </div>
          <div>
            <h6 className="font-semibold">Contact</h6>
            <p className="text-sm text-gray-300 mt-2">Phone: +91 8328000860</p>
            <p className="text-sm text-gray-300">Email: FASHIONENTERPRISES26@GMAIL.COM</p>
            <p className="text-sm text-gray-300">Troop Bazar, Abids, Koti, Hyderabad 500001</p>
          </div>
          <div>
            <h6 className="font-semibold">Newsletter</h6>
            <div className="mt-3 flex gap-2">
              <input placeholder="Your email" className="flex-1 px-3 py-2 rounded" />
              <button className="px-3 py-2 bg-red-600 rounded text-white">Join</button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6">© {new Date().getFullYear()} SPORTYWAY.IN</div>
      </footer>

      <div id="cart" className="fixed right-6 bottom-6 w-80 bg-white border rounded-lg shadow-lg hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="font-semibold">Your Cart</div>
          <button onClick={()=>document.getElementById('cart')?.classList.add('hidden')} className="text-sm">Close</button>
        </div>
        <div className="p-4 max-h-64 overflow-auto">
          {cart.length === 0 ? <div className="text-sm text-gray-500">Cart is empty</div> : cart.map(item => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">Qty: {item.qty}</div>
              </div>
              <div>
                <div className="font-semibold">₹{item.price * item.qty}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between font-semibold mb-3">Total <span>₹{total()}</span></div>
          <button className="w-full bg-red-600 text-white py-2 rounded">Checkout (contact to complete)</button>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4">
                <img src={selected.img} alt={selected.name} className="w-full h-auto" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/700x900?text=Image'}} />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold">{selected.name}</h3>
                  <button onClick={()=>setSelected(null)} className="text-sm">Close</button>
                </div>
                <p className="mt-2 text-gray-600">Price: ₹{selected.price}</p>
                <p className="mt-4 text-sm">Sizes: {selected.sizes.join(', ')}</p>
                <div className="mt-6 flex gap-3">
                  <button onClick={()=>{addToCart(selected); setSelected(null);}} className="bg-red-600 text-white px-4 py-2 rounded">Add to cart</button>
                  <button onClick={()=>setSelected(null)} className="px-4 py-2 border rounded">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
