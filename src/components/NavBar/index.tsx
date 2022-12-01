import * as S from './style';
import { AiOutlineHome } from 'react-icons/ai';
import { FiArrowUpCircle } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { BsSuitHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const scrollToTop = (event) => {
    if (!window.scrollY) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = useNavigate();
  return (
    <S.Container>
      <div>
        <AiOutlineHome onClick={() => navigate('/')} />
      </div>
      <div>
        <FiMenu />
      </div>
      <div>
        <BsSuitHeart />
      </div>
      <div>
        <FiArrowUpCircle onClick={scrollToTop} />
      </div>
    </S.Container>
  );
};

export default NavBar;
