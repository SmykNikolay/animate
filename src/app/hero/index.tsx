export default function Hero() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto p-5">
        <header className="flex justify-between items-center flex-wrap">
          <img src="images/5.png" alt="" className="h-10" />
          <img src="images/6.png" alt="" className="h-10" />
        </header>
        <section className="banner">
          <div className="content flex justify-between items-center flex-wrap font-['Odibee_Sans']">
            <h1 className="left text-[17em]">CSS ONLY</h1>
            <div className="right text-right transform -translate-y-8">
              <h2 className="text-[7em] font-light">Some</h2>
              <p>Web Design</p>
              <p>
                Don't forget to subscribe to the channel to continuously
                <br />
                update interesting videos
              </p>
            </div>
            <div className="image relative w-full h-[600px] bg-[url('images/banner.png')]">
              <img
                src="images/mouth.png"
                alt=""
                className="absolute h-[130%] left-1/2 transform -translate-x-1/2 bottom-0"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-6 gap-12 mt-12">
          <figure className="col-span-4 row-span-1">
            <img src="images/sich.png" alt="" className="w-full" />
          </figure>
          <figure className="col-span-2 row-span-1">
            <img src="images/3.png" alt="" className="w-full autoRotate" />
          </figure>
          <h2 className="col-span-6 text-center text-[7em] z-10">Introduce</h2>
        </section>

        <section className="grid grid-cols-6 gap-12 mt-12 text-[1.7em]">
          <div className="col-span-3 row-span-3 autoShow">
            <figure>
              <img src="images/6.png" alt="" className="w-full" />
            </figure>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen b <br />
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop like.
            </p>
          </div>
          <div className="col-span-3 row-span-2 autoShow">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen b <br />
            ook. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. printer took a galley of type and scrambled it to make a type
            specimen b <br />
            ook. It has survived not only five centuries, but also the leap into
            electronic typesetting, remai
          </div>

          <div className="col-span-3 row-span-3 autoShow">
            <figure>
              <img src="images/2.png" alt="" className="w-full" />
            </figure>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen b <br /> only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="col-span-3 row-span-2 autoShow">
            <figure>
              <img src="images/candy.png" alt="" className="w-full" />
            </figure>
          </div>
        </section>

        <section className="grid grid-cols-6 gap-12 mt-12 text-[10em]">
          <div className="col-span-4 autoBLur">LUNDEV</div>
          <div className="col-span-4 text-right autoBLur">DESIGNER</div>
          <div className="col-span-4 autoBLur">DEVELOPER</div>
          <div className="col-span-6 autoBLur">SUBCRIBE +</div>
          <div className="col-span-6 autoBLur">SEE MORE &#8599;</div>
        </section>
      </main>
      <footer className="border-t border-[#2e373a55] min-h-screen">
        <div className="grid grid-cols-6 gap-12 mt-12 text-[1.7em] max-w-screen-lg mx-auto p-5">
          <div className="col-span-2 row-span-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            labore numquam explicabo itaque qui, assumenda temporibus aspernatur
            ex quae corrupti, ipsa quod esse hic debitis quidem obcaecati
            aperiam! Incidunt blanditiis facilis a et provident vel aspernatur
            deleniti sint debitis numquam ducimus recusandae assumenda eligendi
            explicabo id unde quasi dicta ut cumque, tempore accusamus ipsa
            similique repellat. Deserunt delectus sint debitis ad sequi
            laboriosam inventore consequatur nemo neque cum est nostrum eveniet
            aliquid unde distinctio, omnis sed vitae amet nobis atque.
          </div>
          <div className="col-span-2 row-span-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            labore numquam explicabo itaque qui, assumenda temporibus aspernatur
            ex quae corrupti, ipsa quod esse hic debitis quidem obcaecati
            aperiam! Incidunt blanditiis facilis a et provident vel aspernatur
            deleniti sint debitis numquam ducimus recusandae assumenda eligendi
            explicabo id unde quasi dicta ut cumque, tempore accusamus ipsa
            similique repellat. Deserunt delectus sint debitis ad sequi
            laboriosam inveum est nostrum eveniet aliquid unde distinctio, omnis
            sed vitae amet nobis atque.
          </div>
          <div className="col-span-2 row-span-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            labore numquam explicabo itaque qui, assumenda temporibus aspernatur
            ex quae corrupti, ipsa quod esse hic debitis quidem obcaecati
            aperiam! Incidunt blanditiis facilis a et provident vel aspernatur
            deleniti sint debitis numquam ducimus recusandae assumenda eligendi
            explicabo id unde quasi dicta ut cumque, tempore accusamus ipsa
            similique repellat. Deserunt delectus sint debitis ad sequi
            laboriosam inventore consequatur nemo neque cum est nos atque.
          </div>
          <div className="col-span-2 row-span-1">
            <figure>
              <img src="images/8.png" alt="" className="w-full" />
            </figure>
          </div>
        </div>
      </footer>
    </>
  );
}
