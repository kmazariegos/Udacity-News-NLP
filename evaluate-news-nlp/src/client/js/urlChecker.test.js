import { checkUrl } from './urlChecker' 

test('checking module', () => {
    expect(checkUrl('https://www.google.com')).toBe(true)
    expect(checkUrl('1.1.1.1')).toBe(false)
})

// test('Test, the function "checkUrl()" should be a function', () => {
//     expect(typeof validURL).toBe("function");
// });