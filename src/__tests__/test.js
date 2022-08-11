import { ErrorRepository } from "../index";

test('error', () => {
    const err = new ErrorRepository(2, 'Неверный адрес');

    expect(err.translate(2)).toBe('Неверный адрес');
});

test('error2', () => {
    const err = new ErrorRepository(2, 'Неверный адрес');

    expect(err.translate(3)).toBe('Unknown error');
});