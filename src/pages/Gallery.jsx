// Gallery.jsx
import React from 'react';

const pins = [
  { id: 1, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", aspect: "4/5" },
  { id: 2, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", aspect: "3/4" },
  { id: 3, src: "https://images.unsplash.com/photo-1600565193348-f74bd5c7ccca?w=800", aspect: "5/3" },
  { id: 4, src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800", aspect: "2/3" },
  { id: 5, src: "https://images.unsplash.com/photo-1613977257363-707ba934822f?w=800", aspect: "4/5" },
  { id: 6, src: "https://images.unsplash.com/photo-1600585154526-990dced4cb0d?w=800", aspect: "3/4" },
  { id: 7, src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800", aspect: "5/4" },
  { id: 8, src: "https://images.unsplash.com/photo-1600565193185-2d7e0c759e8f?w=800", aspect: "2/3" },
  { id: 9, src: "https://images.unsplash.com/photo-1600563438938-a9a2724e73a8?w=800", aspect: "4/5" },
  { id: 10, src: "https://images.unsplash.com/photo-1600565193378-68e8e47c3c1c?w=800", aspect: "3/4" },
];

function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Pure CSS Masonry using columns */}
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6">
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <img
                src={pin.src}
                alt=""
                className="w-full h-auto object-cover"
                style={{ aspectRatio: pin.aspect }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;