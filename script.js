var container=document.createElement("div")
container.className="dog";

var row=document.createElement("div");
row.className="row";

container.append(row)


var res=fetch("https://dog.ceo/api/breed/hound/images? limit=30");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1)

    for(let i=0; i<data1.message.length; i++){
        //console.log(data1.message[i])
        row.innerHTML +=`
        <div class="col-lg-3 col-sm-12">
        
        <div class="design"><img src="${data1.message[i]}" alt="..."> <br>
        <button type="button" class="btn btn-outline-success">Download</button>
        </div>
        <div class="card-body">
       
    </div>
</div>`
}
    document.body.append(container)
}