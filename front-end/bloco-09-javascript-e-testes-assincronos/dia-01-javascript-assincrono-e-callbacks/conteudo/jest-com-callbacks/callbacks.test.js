test('Não deveria passar!', (done) => {
		setTimeout(() => {
		try {
			expect(10).toBe(10);
			console.log('Deveria falhar!');
			done();
		} catch (error) {
			done(error);
		}
		}, 500);
	});