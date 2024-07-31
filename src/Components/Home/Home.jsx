import React from "react";
import Hero from './hero.jsx';
import Hero_2 from '../../assets/hero-2.avif'
import Card from './card.jsx';
import cardImage from '../../assets/cardImage.avif';
import './Home.css';


function Home()
{
  return(  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='container'>
      <Hero 
      head1="Let us find your" 
      head2="Forever Food." 
      para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!" 
      img2={Hero_2} 
      rightHead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis." 
      para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta."/>
      </div>
      <div className='cards'>
        <Card 
        card_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
      cardImage={cardImage}
        name="Gladis Lennon"
        position="Head of SEO"
        />

        <Card 
        card_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
        cardImage={cardImage}
        name="Gladis Lennon"
        position="Head of SEO"
        />

        <Card 
        card_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
        cardImage={cardImage}
        name="Gladis Lennon"
        position="Head of SEO"
        />

        <Card 
        card_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
        cardImage={cardImage}
        name="Gladis Lennon"
        position="Head of SEO"
        />

        <Card 
        card_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
        cardImage={cardImage}
        name="Gladis Lennon"
        position="Head of SEO"
        />

       <Card 
        card_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
        cardImage={cardImage}
        name="Gladis Lennon"
        position="Head of SEO"
        />

      </div>
    </>
    )
}
export default Home;