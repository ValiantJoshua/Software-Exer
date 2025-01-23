export default function About() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col items-center gap-3 text-center mb-10 mb:md-20">
        <h2 className="text-primary font-bold text-4xl mb-4 pt-5">About Us</h2>
      </div>

      <div class="container space-y-10 xl:space-y-0">
        //item 1
        <div className="flex flex-col items-center lg:flex-row gap-5">
          //image
          <div className="w-full lg:w-1/2">
            <img src="/gambar5.png" alt="About Imag " />
          </div>

           //content
          <div className="w-full-lg:w-1/2">
            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl xl:text-3xl">Our History</h3>
              <p className="max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sed feugiat leo, sit amet accumsan ligula. Maecenas pellentesque
                interdum ipsum, in commodo leo congue quis. Nunc ornare felis
                nec quam faucibus, a gravida quam cursus. Nullam quis sagittis
                neque, sed pretium augue. Aenean eu sapien tempus, feugiat
                sapien ut, vulputate nibh. Praesent id lacus sagittis felis
                euismod egestas. Donec iaculis tincidunt nisi quis bibendum.
                Duis fringilla fermentum lectus, ut rutrum diam tincidunt quis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container space-y-10 xl:space-y-0">
        //item 2
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
          //image2
          <div className="w-full lg:w-1/2">
            <img src="/gambar5.png" alt="About Imag " />
          </div>

           //content
          <div className="w-full-lg:w-1/2">
            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl xl:text-3xl">Ingredients & Freshness</h3>
              <p className="max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sed feugiat leo, sit amet accumsan ligula. Maecenas pellentesque
                interdum ipsum, in commodo leo congue quis. Nunc ornare felis
                nec quam faucibus, a gravida quam cursus. Nullam quis sagittis
                neque, sed pretium augue. Aenean eu sapien tempus, feugiat
                sapien ut, vulputate nibh. Praesent id lacus sagittis felis
                euismod egestas. Donec iaculis tincidunt nisi quis bibendum.
                Duis fringilla fermentum lectus, ut rutrum diam tincidunt quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
