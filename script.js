function toggleD(){
    let d = document.getElementById("dropdown-info");
    const additionalBox = document.querySelector('.additional-box');
    
  if (d.style.display === 'block') {
    d.style.display = 'none';
    additionalBox.style.height = '10%'; // Reset box height
  } else {
    d.style.display = 'block';
    additionalBox.style.height = 'auto'; // Adjust height as needed
  }
}

function toggleD1(){
    let d = document.getElementById("dropdown-info1");
    const additionalBox = document.querySelector('.additional-box2');
    if (d.style.display === 'block') {
        d.style.display = 'none';
        additionalBox.style.height = '10%'; // Reset box height
      } else {
        d.style.display = 'block';
        additionalBox.style.height = 'auto'; // Adjust height as needed
      }
}

function toggleD2(){
    let d = document.getElementById("dropdown-info2");
    const additionalBox = document.querySelector('.additional-box3');
    if (d.style.display === 'block') {
        d.style.display = 'none';
        additionalBox.style.height = '10%'; // Reset box height
      } else {
        d.style.display = 'block';
        additionalBox.style.height = 'auto'; // Adjust height as needed
      }
}