import styles from './sobre.module.scss';
import Subjects from './subjects';

const About = () => {
  return (
    <section>
      <h2 className={styles.titulo}>Sobre nós</h2>
      <div className={styles.sobreNos}>
        <img
          src="https://images.pexels.com/photos/5865209/pexels-photo-5865209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className={styles.sobreNos__text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            blanditiis reprehenderit nostrum dolor temporibus fugit omnis quas
            voluptate, molestias atque suscipit aut odit sed nisi magnam veniam,
            cum et harum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            architecto iusto libero at laboriosam, tempora provident ex tempore
            consequuntur necessitatibus in. Earum voluptate nostrum natus
            officia fugit error neque eius.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt atque
            veritatis expedita voluptatem eius repellendus quis odio praesentium
            natus, vel eos, doloremque earum impedit, iusto accusantium
            distinctio eligendi officia perspiciatis.
          </p>
        </div>
      </div>
      <Subjects/>
    </section>
  );
};

export default About;
