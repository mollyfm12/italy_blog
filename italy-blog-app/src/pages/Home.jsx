import './css/Home.css'
import Tree from './components/Tree';

function Home() {
  return (
    <>
      <section className="columns"> 
        <Tree 
          name="Live Oak"
          description="Doesn't lose leaves"

          />
        <Tree 
          name="Dogwood"
          description="flowers in spring"
          
          />
      </section>
    </>
  );
};
//can't use class
export default Home; //when export, allows to import into another file to utilize
