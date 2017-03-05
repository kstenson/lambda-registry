import test from 'ava'

import PkgManager from './../packageManager'

test.before('when looking for a package', t=>{
    
    
});

test('when looking for package, if not availble use NPM', t=>{

    let manager = new PkgManager();
    
   let pkg = manager.get('lodash');

   t.is(pkg.name, 'lodash');

});