function Loading() {
  return (
    <>
      <div className="absolute w-screen h-screen top-0 backdrop-blur-sm"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-20 w-20 bg-slate-100"></div>
      </div>
    </>
  );
}

export default Loading;
