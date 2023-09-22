class CookieService{
    // cname => name of cookie, 
    // cvalue => cookie value
    // cextime => time in hours
    setCookie = (cname, cvalue, cextime) => {
        const d = new Date();
        if(cextime > 0){
            d.setTime(d.getTime() + (cextime * 60 * 60 * 1000));    
        } else {
            d.setTime(d.getTime() - 10000);
        }
        // document.cookie = "name=value; name=value; expires=Thu, 7 Jul 2023 12:00:00 UTC; path=/";

        let expTime = "expires="+d.toUTCString();
        document.cookie = cname+"="+cvalue+"; "+expTime+"; path=/";
    }

    getCookie = (cname) => {
        let name = cname+"=";
        let decodeCookie = decodeURIComponent(document.cookie);
        let parts = decodeCookie.split(';');    // ["name=value","expires=Thu, 7 Jul 2023...", "path=/"]
        
        for(let i =0; i< parts.length; i++){
            let cook = parts[i];
            while(cook.charAt(0) === ' '){
                cook = cook.substring(1);
            }
            if(cook.indexOf(name) === 0){
                return cook.substring(name.length, cook.length);
            }
        }
        return undefined;
    }

    removeCookie = (cname) => {
        this.setCookie(cname, "", 0)
    }
}
const cookieSvc = new CookieService();
export default cookieSvc;