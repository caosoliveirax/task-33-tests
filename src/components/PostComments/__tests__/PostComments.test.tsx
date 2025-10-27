import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Teste renderizar corretamente com 2 comentários', () => {
        render(<PostComment/>)

        const button = screen.getByTestId('btn-add-comment')
        const input = screen.getByTestId('input-comment')
        
        fireEvent.change(input, {target: {value: 'Que legal!'}})
        fireEvent.click(button)

        fireEvent.change(input, {target: {value: 'Fantástico!'}})
        fireEvent.click(button)

        expect(screen.getAllByTestId("comment-list-item")).toHaveLength(2)
    })
});