import "normalize.css";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <section class="container">
    <nav class="navbar">
      <div class="navbar__content">
      <img/>
        <ul>
          <li><a href="#">Exclusivos</a></li>
          <li><a href="#">Nuevos</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Find a Store</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <h1>Diseña tu <br> <strong>Super Heroe!</strong></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, harum. Iure omnis veritatis recusandae quo ducimus facere quisquam ratione placeat illo doloremque? Veritatis ratione pariatur tempore mollitia quae, nesciunt nostrum.</p>
    </main>
    <aside>
      <p>SuperMan</p>
      <img/>
      <div></div>
    </aside>
    <footer>
      <div>
        <img/>
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
