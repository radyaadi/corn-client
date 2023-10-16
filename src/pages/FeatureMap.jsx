const FeatureMap = ({ onClassified, extractedImg }) => {
  return (
    <section className="mt-4 w-full">
      <h1 className="text-xl font-extrabold text-[#f65555]">Ekstraksi Fitur</h1>
      <div>
        {onClassified === true ? (
          <div className="mt-8 grid w-full grid-cols-2 gap-5 gap-y-8">
            <div>
              <h1 className="text-lg font-semibold text-[#f65555]">
                Lapisan Blok Pertama
              </h1>
              <img
                src={`data:image/png;base64,${extractedImg["block1_pool"]}`}
                alt="Gambar"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#f65555]">
                Lapisan Blok Kedua
              </h1>
              <img
                src={`data:image/png;base64,${extractedImg["block2_pool"]}`}
                alt="Gambar"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#f65555]">
                Lapisan Blok Ketiga
              </h1>
              <img
                src={`data:image/png;base64,${extractedImg["block3_pool"]}`}
                alt="Gambar"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#f65555]">
                Lapisan Blok Keempat
              </h1>
              <img
                src={`data:image/png;base64,${extractedImg["block4_pool"]}`}
                alt="Gambar"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#f65555]">
                Lapisan Blok Kelima
              </h1>
              <img
                src={`data:image/png;base64,${extractedImg["block5_pool"]}`}
                alt="Gambar"
              />
            </div>
          </div>
        ) : (
          <div className="mt-4 w-full rounded-md bg-white p-5 text-lg font-extrabold text-[#f65555] shadow-md">
            <h1>Lakukan Klasifikasi Terlebih Dahulu :*</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureMap;
