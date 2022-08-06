const { uppercase } = require("./exercise7");

it('uppercase te -> TE', (done) => {
    uppercase('azul', (callback) => {
        try {
            expect(callback).toBe('AZUL');
            done();
        } catch (error) {
            done(error);
        }
    })
})

