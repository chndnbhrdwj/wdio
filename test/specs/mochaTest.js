import assert from 'assert';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('./');
        console.log("###### printing " + title);
        assert.equal(title, 'Google');
    });
});