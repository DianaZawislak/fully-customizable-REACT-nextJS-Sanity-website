interface HeaderProps {
  content: any;
}

function Banner2({ content }: HeaderProps) {
  return (
    <div className="py-5 md:mt-24 mt-[70px] text-center items-center justify-center mb-10">
      <h1 className="text-center text-black text-xl mb-3">OUR SERVICES</h1>


      <h2 className="text-3xl text-gray-500 mb-6">Services Offered by Harmony Trees and Gardens</h2>
      <div className="h-1 w-1/4 bg-lime-300 mx-auto mt-3 mb-4"></div>
   
    </div>
  );
}

export default Banner2;
