import { render, screen } from '@testing-library/react';
import Post from '..';

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post imageUrl="https://m.media-amazon.com/images/I/51ctichIThL._AC_SL1500_.jpg" children={undefined}/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});