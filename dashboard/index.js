function previewCard(){

}

var n = 0;

function addProj(){
  console.log(n);
  var i = n;
  let html = '';
  x = `
    <div class="row">
    <div class="col">
                <div class="card" style="width: 18rem;" id="card">
                    <img src="../img/8sample.png" class="card-img-top${i}" id="card-img-top" alt="...">
                    <div class="card-body${i}">
                      <h5 class="card-title${i}">sample card</h5>
                      <p class="card-text${i}">hope you have a nice day ;)</p>
                    </div>
                  </div>
            </div>
            <div class="col">
                <form>
                    <div class="form-group">
                      <label for="exampleFormControlFile1">preview image goes here</label>
                      <input type="file" class="form-control-file" id="form-file${i}" accept="image/*">
                    </div>
                    <form>
                        <div class="form-group">
                          <input type="text" class="form-control" id="form-title${i}" placeholder="project title goes here">
                        </div>
                        <div class="form-group">
                          <input type="url" class="form-control" id="form-link${i}" placeholder="enter the link, don't be shy :3">
                        </div>
                      </form>
                    <div class="form-group">
                        <textarea class="form-control" id="form-desc${i}" rows="3" placeholder="project description goes here"></textarea>
                      </div>
                      <button class="btn btn-info">click to preview!</button>
                  </form>
            </div>
    </div>
    <br>
    `;
    
    html += x;
    document.getElementById('place-card').innerHTML += html;
    n++;
    
}

/*
const fileInput = document.getElementById(`form-file${i}`);
    fileInput.onchange = () => {
      const selectedFile = fileInput.files[0];
      console.log(selectedFile);
    }
*/

function pushWeb(){
    console.log("total:" + n);
    //perform something
    var i;
    for(i=0;i<n;i++){
      console.log("i is: " + i);
    var title = document.getElementById(`form-title${i}`).value;
    var link = document.getElementById(`form-link${i}`).value;
    var desc = document.getElementById(`form-desc${i}`).value;
    var newRef = db.collection("projects").doc();
    console.log(title + link + desc);
    newRef.set({
        title: title, 
        link: link, 
        desc: desc,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    }
    document.getElementById('pushWeb').style.display= "none";
    document.getElementById('pushWebSuccess').style.display = "block";
}

