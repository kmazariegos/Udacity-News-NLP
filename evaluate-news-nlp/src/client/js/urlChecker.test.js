import { ValidURL } from './urlChecker' 

test('checking module', () => {
    expect(ValidURL('https://www.google.com')).toBe(true)
    expect(ValidURL('1.1.1.1')).toBe(false)
})

// test('Test, the function "checkUrl()" should be a function', () => {
//     expect(typeof validURL).toBe("function");
// }); 