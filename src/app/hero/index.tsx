import "./style.css";

export default function Hero() {
  return (
    <>
      <main>
        <header>
          <img src="images/5.png" alt="" />
          <img src="images/6.png" alt="" />
        </header>
        <section className="banner">
          <div className="content">
            <h1 className="left">CSS ONLY</h1>
            <div className="right">
              <h2>Some</h2>
              <p>Web Design</p>
              <p>
                Don't forget to subscribe to the channel to continuously
                <br />
                update interesting videos
              </p>
            </div>
            <div className="image">
              <img src="images/mouth.png" alt="" />
            </div>
          </div>
        </section>

        <section className="grid grid-1">
          <figure>
            <img src="images/sich.png" alt="" />
          </figure>
          <figure>
            <img src="images/3.png" alt="" className="autoRotate" />
          </figure>
          <h2 className="autoShow">Introduce</h2>
        </section>

        <section className="grid grid-2">
          <div className="autoShow">
            <figure>
              <img src="images/6.png" alt="" />
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
          <div className="autoShow">
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

          <div className="autoShow">
            <figure>
              <img src="images/2.png" alt="" />
            </figure>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen b <br /> only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="autoShow">
            <figure>
              <img src="images/candy.png" alt="" />
            </figure>
          </div>
        </section>

        <section className="grid grid-3">
          <div className="autoBLur">LUNDEV</div>
          <div className="autoBLur">DESIGNER</div>
          <div className="autoBLur">DEVELOPER</div>
          <div className="autoBLur">SUBCRIBE +</div>
          <div className="autoBLur">SEE MORE &#8599;</div>
        </section>
      </main>
      <footer>
        <div className="grid grid-5 content">
          <div>
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
          <div>
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
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            labore numquam explicabo itaque qui, assumenda temporibus aspernatur
            ex quae corrupti, ipsa quod esse hic debitis quidem obcaecati
            aperiam! Incidunt blanditiis facilis a et provident vel aspernatur
            deleniti sint debitis numquam ducimus recusandae assumenda eligendi
            explicabo id unde quasi dicta ut cumque, tempore accusamus ipsa
            similique repellat. Deserunt delectus sint debitis ad sequi
            laboriosam inventore consequatur nemo neque cum est nos atque.
          </div>
          <div>
            <figure>
              <img src="images/8.png" alt="" />
            </figure>
          </div>
        </div>
      </footer>
    </>
  );
}
