const Prepocessing = ({ onClassified, imgData, rescaledImgData }) => {
  return (
    <section className="mt-4 w-full">
      <h1 className="text-xl font-extrabold text-[#f65555]">
        Prepocessing Citra
      </h1>
      {onClassified === true ? (
        <div className="mt-4 flex w-full flex-col gap-5">
          <div className="flex w-full flex-col gap-5 rounded-md bg-white p-5 px-8 shadow-md">
            <h1 className="text-lg font-semibold text-[#f65555]">
              Matriks Citra Sebelum Rescaling
            </h1>
            <div className="">
              <h3 className="mb-1 font-semibold text-[#f65555]">Kanal R</h3>
              <p className="text-sm">{imgData["r"]}</p>
            </div>
            <div className="">
              <h3 className="mb-1 font-semibold text-[#f65555]">Kanal G</h3>
              <p className="text-sm">{imgData["g"]}</p>
            </div>
            <div className="">
              <h3 className="mb-1 font-semibold text-[#f65555]">Kanal B</h3>
              <p className="text-sm">{imgData["b"]}</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 rounded-md bg-white p-5 px-8 shadow-md">
            <h1 className="text-lg font-semibold text-[#f65555]">
              Matriks Citra Setelah Rescaling
            </h1>
            <div className="">
              <h3 className="mb-1 font-semibold text-[#f65555]">Kanal R</h3>
              <p className="text-sm">{rescaledImgData["r"]}</p>
            </div>
            <div className="">
              <h3 className="mb-1 font-semibold text-[#f65555]">Kanal G</h3>
              <p className="text-sm">{rescaledImgData["g"]}</p>
            </div>
            <div className="">
              <h3 className="mb-1 font-semibold text-[#f65555]">Kanal B</h3>
              <p className="text-sm">{rescaledImgData["b"]}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4 w-full rounded-md bg-white p-5 text-lg font-extrabold text-[#f65555] shadow-md">
          <h1>Lakukan Klasifikasi Terlebih Dahulu :*</h1>
        </div>
      )}
    </section>
  );
};

export default Prepocessing;
