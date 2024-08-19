import Image from "next/image";

export default function LoginPage() {
  return (
    <section className='w-dvw h-dvh grid grid-cols-2 items-center justify-center'>
      <div className='flex flex-col justify-between prose p-4 h-full py-12'>
        {/* title block */}
        <div>
          <h1 className='mb-0 text-7xl'>HRIS</h1>
          <span className='italic text-sm'>by 3.28</span>
        </div>
        <div></div>
      </div>
      <div className='col-start-2 w-full h-full overflow-hidden relative'>
        <Image src='https://plus.unsplash.com/premium_photo-1661306465544-cc55151ab336?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fill alt='HRIS' className='object-cover' />
      </div>
    </section>
  )
}
