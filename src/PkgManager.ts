import fetch from 'node-fetch';

export default class PkgManager {
    /**
     *
     */

    private baseUrl : string;

    constructor(baseUrl : string) {
       this.baseUrl = baseUrl;
        
    }
    async get(pkgName : string) :Promise<any>{
        let pkgInfo = await fetch(`${this.baseUrl}/${pkgName}`);

        return pkgInfo.json();
    }

    async fetch(pkgName: string): Promise<any>{
        let pkgInfo = await this.get(pkgName);

        //get the latest version of the package
        let latest = pkgInfo['dist-tags'].latest;

        let tarballUrl = pkgInfo.versions[latest].dist.tarball;
        
        var tarball = await fetch(tarballUrl);
        return tarball.buffer();
    }
}