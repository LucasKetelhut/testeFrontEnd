import '@testing-library/jest-dom';

describe('compareName', () => {

    const mock = jest.fn((a, b) => {
        if (a.name < b.name){
          return -1;
        }
        if (a.name > b.name){
          return 1;
        }
        return 0;
    });

    it('should return -1', () => {
        const a = { name: 'Lucas' };
        const b = { name: 'Rafael' };
    
        const result = mock(a, b);
        expect(result).toBe(-1);
    });

    it('should return 1', () => {
        const a = { name: 'Rafael' };
        const b = { name: 'Lucas' };
    
        const result = mock(a, b);
        expect(result).toBe(1);
    });

    it('should return 0', () => {
        const a = { name: 'Lucas' };
        const b = { name: 'Lucas' };
    
        const result = mock(a, b);
        expect(result).toBe(0);
    });
});

describe('compareCreation', () => {

    const mock = jest.fn((a, b) => {
        if (a.created < b.created){
          return -1;
        }
        if (a.created > b.created){
          return 1;
        }
        return 0;
    });

    it('should return -1', () => {
        const a = { created: '2022-05-05' };
        const b = { created: '2024-05-05' };
    
        const result = mock(a, b);
        expect(result).toBe(-1);
    });

    it('should return 1', () => {
        const a = { created: '2024-05-05' };
        const b = { created: '2022-05-05' };
    
        const result = mock(a, b);
        expect(result).toBe(1);
    });

    it('should return 0', () => {
        const a = { created: '2024-05-05' };
        const b = { created: '2024-05-05' };
    
        const result = mock(a, b);
        expect(result).toBe(0);
    });
});
