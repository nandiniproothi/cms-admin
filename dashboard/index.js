function previewCard(){

}

function loadFirst(){
    document.getElementById('place-card').innerHTML = `
    <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="../img/8sample.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">sample card</h5>
                      <p class="card-text">hope you have a nice day ;)</p>
                    </div>
                  </div>
            </div>
            <div class="col">
                <form>
                    <div class="form-group">
                      <label for="exampleFormControlFile1">preview image goes here</label>
                      <input type="file" class="form-control-file" id="form-file0" accept="image/*">
                    </div>
                    <form>
                        <div class="form-group">
                          <input type="text" class="form-control" id="form-title0" placeholder="project title goes here">
                        </div>
                        <div class="form-group">
                          <input type="url" class="form-control" id="form-link0" placeholder="enter the link, don't be shy :3">
                        </div>
                      </form>
                    <div class="form-group">
                        <textarea class="form-control" id="form-desc0" rows="3" placeholder="project description goes here"></textarea>
                      </div>
                      <button class="btn btn-info">click to preview!</button>
                  </form>
            </div>
    `
}

function pushWeb(i){
    //perform something
    var title = document.getElementById(`form-title${i}`);
    var link = document.getElementById(`form-link${i}`);
    var desc = document.getElementById(`form-desc${i}`);
    var newRef = db.collection("projects").doc();
    newRef.set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    document.getElementById('pushWeb').style.display= "none";
    document.getElementById('pushWebSuccess').style.display = "block";
}