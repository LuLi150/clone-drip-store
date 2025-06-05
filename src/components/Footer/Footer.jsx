import {Logo} from '../Logo/Logo';
import { Useful } from '../Useful/Useful';
import { Nav } from '../Nav/Nav';
import './Footer.css';

export const Footer = () => {
  return (
    <Footer id='footer'>
      <div className='box-footer'>
        <div className='box-logo-pai'>
          <div className='box-logo'>
            <Logo 
            color={'white'}
            margin={'4.5rem'}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className='logo-icons'>
            <img src='../../../public/facebook.svg'/>
             <img src='../../../public/instagram.svg'/>
            <img src='../../../public/twiiter.svg'/>
          </div>
        </div>
        <div className='box-info'>
          <h3>informações</h3>
          <Nav
          width={'8.4375rem'}
          height={'17.375rem'}
          margin={'4.5rem 0 0 12.8125rem'}
          >
            <li>
              <Useful 
               value={'Sobre Drip Store'}
               color={'white'}
               margin={'1.75rem 0 0 0'}
              />
            </li>
            <li>
              <Useful 
               value={'segurança'}
               color={'white'}
               margin={'1rem 0 0 0'}
              />
            </li>
            <li>
              <Useful 
               value={'Wishlist'}
               color={'white'}
               margin={'1rem 0 0 0'}
              />
            </li>
            <li>
              <Useful 
               value={'Blog'}
               color={'white'}
               margin={'1rem 0 0 0'}
              />
            </li>
            <li style={{ display: 'flex' }}><Useful
              value={'Trabalhe conosco'}
              color={'white'}
              margin={'1rem 0 0 0'}
            /></li>
          </Nav>
        </div>
        <div className='box-categoria'>
          <h3>Categoria</h3>
          <Nav
          width={'6rem'}
          height={'15rem'}
          margin={'4.5rem 0 0 6.375rem'}
          >
          <li><Useful
            value={'camisetas'}
            color={'white'}
            margin={'1.75rem 0 0 0'}
          />
          </li>
          <li><Useful
              value={'calças'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            />
          </li>
             <li><Useful
              value={'bonés'}
              color={'white'}
              margin={'1rem 0 0 0'}
          />
          </li>
          <li><Useful
              value={'Headphones'}
              color={'white'}
              margin={'1rem 0 0 0'}
          />
          </li>
          <li><Useful
              value={'tênis'}
              color={'white'}
              margin={'1rem 0 0 0'}
          />
          </li>
          </Nav>
          </div>
          <div className='box-contato'>
          <h3>Contato</h3>
          <Nav 
          width={'14.5625rem'}
          height={'15rem'}
          margin={'4.5rem 0 0 10.5rem'}
          >
          <li><Useful
            value={'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161'}
            color={'white'}
            margin={'1.75rem 0 0 0'}
          />
          </li>
          <li><Useful
            value={'(85) 3051-3411'}
            color={'white'}
            margin={'1rem 0 0 0'}
          />
          </li>
          </Nav>
        </div>
        <hr/>
      </div>
    </Footer>
  )
} 
