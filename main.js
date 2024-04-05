import "normalize.css";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <section class="container">
    <nav class="navbar">
      <div class="navbar__content">
      <img src="https://tiendalego.com.co/cdn/shop/files/LEGO-Logo_88x88_cf5cb234-fd96-44e1-9130-2fcf3bea77af_53x53.png?v=1649179371" alt="logo"/>
        <ul>
          <li><a href="#">Exclusivos</a></li>
          <li><a href="#">Nuevos</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Find a Store</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <h1>Diseña tu <br> <strong>Súper Héroe!</strong></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, harum. Iure omnis veritatis recusandae quo ducimus facere quisquam ratione placeat illo doloremque? Veritatis ratione pariatur tempore mollitia quae, nesciunt nostrum.</p>
    </main>
    <aside>
      <div></div>
      <p>SuperMan</p>
      <img src="https://i.ibb.co/x16pz1x/super-man.png" alt="Superman"/>
    </aside>
    <footer>
      <div>
        <img src="https://i.ibb.co/tKWqw8J/spiderman.png" alt="spiderman"/>
      </div>
      <div>
        <img src="https://i.ibb.co/Xzsdvgg/robin.png" alt="robin"/>
      </div>
      <div>
        <img src="https://i.ibb.co/M18p91c/batman.webp" alt="batman"/>
      </div>
    </footer>
  </section>
  <section class="loader">
    <div></div>
    <div></div>
    <div></div>
  </section>
  <section class="modal"></section>
`;
