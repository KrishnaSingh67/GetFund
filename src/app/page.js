import Image from "next/image";


export default function Home() {
  return (
    <>
  <div className="flex  justify-center flex-col items-center text-white">
   <div className="font-bold text-3xl">Buy me a chai!</div>
   <div >
    <p> crowde funding  get the funding fo thw  funfing the ennvf</p>
    <div className="gap-12"></div>
   <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none  font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start now </button>
   <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none  font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"> read more</button>
   </div>
  </div>
  <div className="h-3 bg-white ">ivofv</div>
  <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      {/* <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" /> */}
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      {/* <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" /> */}
      <p className="font-bold text-center">Fans want to contribute</p>
      <p className="text-center">Your fans are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      {/* <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" /> */}
      <p className="font-bold text-center">Fans want to collaborate</p>
      <p className="text-center">Your fans are ready to collaborate with you</p>
    </div>
  </div>
</div>
<div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
      
      </div>
  </>
  );
}
