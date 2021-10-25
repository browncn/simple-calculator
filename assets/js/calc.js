
localStorage.input = '';
localStorage.theme = 'dark';

function gid(id){
    return document.getElementById(id)
}
function qsel(query){
    return document.querySelector(query);
}
function d_toggle(){
    qsel('body').style.background= "rgb(113,122,130)";
}
function l_toggle(){
    qsel('body').style.background= "white";
}
function valget(val){
    if(val == '='){
        equation = gid('formulae').innerHTML;
        //equation= float(equation);
        gid('result').innerHTML = eval(equation);
    }else if(val == 'ce'){
        gid('formulae').innerHTML = '0';
        gid('result').innerHTML = '0';
    }else if(val == 'c'){
        fdata = gid('formulae').innerHTML;
        if(fdata.length == 1){
            ndata= 0;
        }else{
            ndata= fdata.slice(0, -1);
        }
        gid('formulae').innerHTML = ndata;
    }else{
        v = gid('formulae').innerHTML;
        if(localStorage.input == '='){
            gid('formulae').innerHTML = '';
        }
        if(v == '0'){
            gid('formulae').innerHTML = val;
        }else{
            if(val=='.'){
                if(v.includes('.')){
                    return false;
                }else{
                    gid('formulae').innerHTML += val;
                }
            }else{
                gid('formulae').innerHTML += val;
            }
        }
    }
    localStorage.input= val;
}

function ch(id){
    gid(id).style.boxShadow= "inset 5px 1px 5px 0px";
    setTimeout(function(){
        gid(id).style.boxShadow= "1px 1px 3px 0px";
    }, 100)
}




