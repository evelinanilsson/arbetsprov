function loadXMLDoc() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "sma_gentext.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  let x, i, xmlDoc, transUnitArr;
  xmlDoc = xml.responseXML;
  transUnitArr = [];
  x = xmlDoc.getElementsByTagName("trans-unit");
  for (i = 0; i < x.length; i++) {
    transUnitArr.push(x[i]);
  }
  for (i = 0; i < transUnitArr.length; i++) {
    if (transUnitArr[i].id === "42007") {
      let target =
        xmlDoc.getElementsByTagName("target")[i].childNodes[0].nodeValue;
      console.log(target);
    } else {
      console.log("not available");
    }
  }
}
