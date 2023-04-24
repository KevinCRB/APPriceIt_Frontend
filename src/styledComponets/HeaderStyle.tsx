import styled from 'styled-components';
import { paleteColors } from '../utils/colors';

const [ lightMain , lightSecondary, neutral, darkSecondary, darkMain] = paleteColors();
export const HeaderStyle = styled.div`
    display: flex;

    position: absolute;
    top: 1.4rem;
    left: 50%;
    transform: translateX(-45%);
    justify-content:  space-around;
    align-items: center;
    padding: 0rem 1.4rem;
    background-color: ${lightMain};
    
    border-radius: 0.5rem;
    height: 5rem;
    box-shadow: 0rem 0.1rem 0.2rem -0.1rem rgba(0,0,0,0.2), 0rem 0.2rem 0.3rem 0rem rgba(0,0,0,0.14), 0rem 0.1rem 0.7rem 0rem rgba(0,0,0,0.12);
`