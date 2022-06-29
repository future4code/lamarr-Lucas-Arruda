import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://video-gig2-1.xx.fbcdn.net/v/t39.30808-6/274995188_4612072492253501_5529438382324651113_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGZgEtERx1-WNtnKwzse9j0JIJKDzDXpDMkgkoPMNekM3dFHmDSahXRlvBI2-Hd2xyi2TlsN-kUVFc_vTKZogzW&_nc_ohc=xR6isT8aoCYAX_kp1Vp&_nc_ht=video-gig2-1.xx&oh=00_AT9GKzL-RD6b1wT_VOjtE3ISCtlVTIoO3maNmORWQp87_g&oe=62BA4FC2" 
          nome="Lucas" 
          descricao="Oi, eu sou o Lucas. Tenho 23 anos e sou um estudante de programação e trabalho como entregador de bebidas na AmBev."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
        imagem="https://i.pinimg.com/736x/2e/e5/0b/2ee50b20e6cbf18856f683c82e681d8c.jpg"
        contato="Email:"
        texto="luucasferreiira21@gmail.com"
        />

        <CardPequeno
        imagem="https://cutewallpaper.org/24/address-icon-png/home-address-free-architecture-and-city-icons.png"
        contato="Endereço:"
        texto="Travessa Aguia Branca"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
