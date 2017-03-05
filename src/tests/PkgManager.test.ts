import test from 'ava'
import * as shasum from 'shasum';

import pkgManger from './../packageManager'

let manager : pkgManger;

test.before('when looking for a package', t => {

 manager = new pkgManger('https://registry.npmjs.org');

});

test('when looking for package, if not availble use NPM', async t => {

   

    let pkg = await manager.get('lodash');

    t.is(pkg.name, 'lodash');

});


//this test sucks as the version isn't pinned but get us started
test('can get the tarball for a package', async t =>{

    var tarball = await manager.fetch('lodash');
    console.log(tarball);
    var sha = shasum(tarball);  

    t.is(sha, '78203a4d1c328ae1d86dca6460e369b57f4055ae');
});