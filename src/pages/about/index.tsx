import Carousel from 'src/components/carousel';
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
            One of the things that makes a coffee shop stand out is its
            atmosphere. A cozy, welcoming space can make all the difference in
            creating a positive experience for customers. This includes
            comfortable seating, good lighting, and a pleasant ambiance.
          </p>
          <p>
            In addition to the atmosphere, the quality of the coffee and other
            beverages is crucial. Specialty coffee shops often focus on sourcing
            high-quality beans and brewing techniques to create a unique and
            delicious cup of coffee. Many also offer a variety of non-coffee
            drinks, such as tea, chai, and hot chocolate, for those looking for
            a caffeine-free option.
          </p>
          <p>
            Overall, a good coffee shop is more than just a place to grab a cup
            of coffee - its a place to relax, connect, and be a part of a
            community. Whether its a quick stop on the way to work, or a place
            to spend a leisurely afternoon, coffee shops have become an integral
            part of our daily routine.
          </p>
        </div>
      </div>
      <Subjects />
    </section>
  );
};

export default About;
