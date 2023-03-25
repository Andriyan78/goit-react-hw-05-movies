import { TiArrowBackOutline } from 'react-icons/ti';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <TiArrowBackOutline size="24" />
      {children}
    </StyledLink>
  );
};