import emptyImage from "../assets/empty-image.jpg";

const Classify = ({
  onHandleFileChange,
  onHandleSubmit,
  prediction,
  onClassified,
  onImage,
}) => {
  return (
    <section className="mt-4 w-full">
      <h1 className="text-xl font-extrabold text-[#f65555]">
        Klasifikasi Penyakit Daun Jagung
      </h1>
      <div className="mt-4 flex w-full flex-row gap-5">
        <div className="w-1/2 max-w-[36rem] rounded-md bg-white p-4 shadow-md">
          <form onSubmit={onHandleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Input Citra Jagung
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={onHandleFileChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:ring focus:ring-[#f65555]"
              />
            </div>
            <div className="relative mx-auto h-[340px] w-[340px] overflow-hidden">
              <img
                src={`${onImage === null ? emptyImage : onImage}`}
                className="absoulte h-full w-full object-cover"
                alt={`${onImage === null ? emptyImage : onImage}`}
              />
            </div>
            <div className="mt-5 flex flex-row justify-center gap-6">
              <button
                type="submit"
                className=" rounded-md bg-[#f65555] px-4 py-2 text-sm text-white duration-200 ease-in-out hover:bg-[#f655554a] hover:text-[#f65555]"
              >
                Klasifikasi
              </button>
              <button
                onClick={() => window.location.reload()}
                className="rounded-md bg-[#f65555] px-4 py-2 text-sm text-white duration-200 ease-in-out hover:bg-[#f655554a] hover:text-[#f65555]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="flex w-1/2 flex-col gap-6">
          <div className="w-full rounded-md bg-white p-4 text-center shadow-md">
            <h1>Model Hibrid VGG16-SVM</h1>
            {prediction === undefined ? (
              onClassified ? (
                <h2 className="text-[1.4rem]">classify...</h2>
              ) : (
                <h2 className="text-[1.4rem] tracking-widest">..........</h2>
              )
            ) : (
              <h2 className="text-[1.4rem] font-extrabold text-[#f65555]">
                {prediction["hybrid"]}
              </h2>
            )}
          </div>
          <div className="w-full rounded-md bg-white p-4 text-center shadow-md">
            <h1>Model VGG16 Classifier</h1>
            {prediction === undefined ? (
              onClassified ? (
                <h2 className="text-[1.4rem]">classify...</h2>
              ) : (
                <h2 className="text-[1.4rem] tracking-widest">..........</h2>
              )
            ) : (
              <h2 className="text-[1.4rem] font-extrabold text-[#f65555]">
                {prediction["vgg16"]}
              </h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classify;
