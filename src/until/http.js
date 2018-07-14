let querystring={
    stringify(obj){
        let brr = '';
        for(let i in obj){
            brr+=i+'='+obj[i]+'&'
        }
        return brr.slice(0,-1)
    },
    parse(arr){
        let brr = arr.split('&');
        let str = {}
        for(var i=0;i<brr.length;i++){
            let o = brr[i].split('=');
            str[o[0]]=o[1]
        }
        return str
    }
}

let domin = 'http://localhost:3000';

export default {
    get(url,params){
        let s = querystring.stringify(params);
        //'foo=bar&baz=qux&corge='
        if(url.indexOf('?')>-1){
            url=url+'&'+s
        }else{
            url=url+'?'+s
        }
        return new Promise((resolve,reject)=>{
            fetch(url,{
                headers:{
                    'Content-type':'application/json'
                }
            }).then(body=>body.json())
            .then(res=>{
                resolve(res)
            })
        })
    },
    post(url,params){
        return new Promise((resolve,reject)=>{
            fetch(domin+url,{
                method:'post',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(params)
            }).then(body=>body.json())
            .then(res=>{
                resolve(res)
                console.log(res)
            })
        })
    }
}