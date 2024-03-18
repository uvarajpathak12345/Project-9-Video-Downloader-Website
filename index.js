let btn = document.getElementById('btn');
btn.addEventListener('click',async function(){
    let input = document.getElementById('data').value;
    let div = document.getElementById('popup');

    if(input == ""){
        alert("Enter the Url of video");
    }else{
        div.innerHTML = `<iframe style="width:800px;height:250px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/card/?url=${input}&adUrl=https://myAdurl.com"></iframe>`
    }
})